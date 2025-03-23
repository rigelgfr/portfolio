"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGear, FaRepeat } from "react-icons/fa6"
import { cn } from "@/lib/utils"

import { socials } from "@/data/socials"
import { SocialsProps } from "./socials"
import { FaCode, FaSuitcase, FaUser } from "react-icons/fa"

export default function FloatingNavbar() {
  const [showSocial, setShowSocial] = useState(false)

  const pageLinks: SocialsProps[] = [
    { label: "about", link: "#about", icon: <FaUser className="w-6 h-6"/> },
    { label: "tech", link: "#technologies", icon: <FaGear className="w-6 h-6"/> },
    { label: "experience", link: "#experience", icon: <FaSuitcase className="w-6 h-6"/> },
    { label: "projects", link: "#projects", icon: <FaCode className="w-6 h-6"/> },
  ]

  const toggleNavItems = () => {
    setShowSocial(!showSocial)
  }

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  // Animation variants for individual items
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 50, // Start from right (cycle button)
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      x: 100, // Exit to right (toward cycle button)
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }

  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center z-50">
      <motion.div
        className="relative w-full max-w-xl mx-4 rounded-lg backdrop-blur-md"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex-1 flex justify-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={showSocial ? "social" : "pages"}
                className="flex items-center justify-center gap-12 sm:gap-4 "
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {(showSocial ? socials : pageLinks).map((item, index) => (
                  <NavButton key={index} item={item} variants={itemVariants} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            onClick={toggleNavItems}
            className={cn(
              "relative p-2 rounded-full bg-primary text-primary-foreground",
              "hover:bg-primary/90 transition-colors",
            )}
            whileTap={{ scale: 0.95 }}
            animate={{
              rotate: showSocial ? 180 : 0,
            }}
            transition={{
              rotate: { type: "spring", stiffness: 200, damping: 10 },
              scale: { duration: 0.3, times: [0, 0.5, 1] },
            }}
          >
            <FaRepeat className="h-4 w-4" />
            <AnimatePresence>
              {showSocial && (
                <motion.span
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                />
              )}
            </AnimatePresence>

            {/* Pulse effect when cycling */}
            <motion.div
              key={showSocial ? "social-pulse" : "pages-pulse"}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-full bg-primary"
            />
          </motion.button>
        </div>

        {/* Subtle glassmorphism glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-full blur-md" />
      </motion.div>
    </div>
  )
}

function NavButton({ item, variants }: { item: SocialsProps; variants: any }) {
  return (
    <motion.a
      href={item.link}
      className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-full transition-colors"
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      rel="noopener noreferrer"
    >
      {item.icon}
      <span className="text-sm font-medium hidden sm:inline">{item.label}</span>
    </motion.a>
  )
}

