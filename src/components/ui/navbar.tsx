"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCode, FaRepeat } from "react-icons/fa6"
import { LuUserRound } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { PiBriefcase } from "react-icons/pi";
import { cn } from "@/lib/utils"
import { socials } from "@/data/socials"
import { SocialsProps } from "./socials"
import { scrollToSection } from "@/utils/scroll"

export default function FloatingNavbar() {
  const [showSocial, setShowSocial] = useState(false)
  const navbarHeight = 96;

  const pageLinks: SocialsProps[] = [
    { label: "about", link: "#about", icon: <LuUserRound className="w-6 h-6"/> },
    { label: "tech", link: "#technologies", icon: <GoGear className="w-6 h-6"/> },
    { label: "experience", link: "#experience", icon: <PiBriefcase className="w-6 h-6"/> },
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
      x: 100,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }

  return (
    <div className="fixed top-8 left-0 right-0 flex justify-center z-50">
      <motion.div
        className="relative w-full max-w-xl mx-4 rounded-full backdrop-blur-md"
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
                {showSocial ? (
                  // Social links - open in new tab
                  socials.map((item, index) => (
                    <SocialButton key={index} item={item} variants={itemVariants} />
                  ))
                ) : (
                  // Page section links - custom scroll behavior
                  pageLinks.map((item, index) => (
                    <NavButton 
                      key={index} 
                      item={item} 
                      variants={itemVariants}
                      navbarHeight={navbarHeight}
                    />
                  ))
                )}
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
          </motion.button>
        </div>

        {/* Subtle glassmorphism glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-full blur-md" />
      </motion.div>
    </div>
  )
}

// Page section navigation with custom scroll
function NavButton({ 
  item, 
  variants, 
  navbarHeight = 64 
}: { 
  item: SocialsProps; 
  variants: any; 
  navbarHeight?: number;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Remove the # from the link to get the ID
    const id = item.link.replace('#', '');
    scrollToSection(id, navbarHeight);
  };

  return (
    <motion.a
      href={item.link}
      onClick={handleClick}
      className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-full transition-colors"
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {item.icon}
      <span className="text-md font-medium ml-0.5 hidden sm:inline">{item.label}</span>
    </motion.a>
  )
}

// Social links - open in new tab
function SocialButton({ item, variants }: { item: SocialsProps; variants: any }) {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-full transition-colors"
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {item.icon}
      <span className="text-md font-medium ml-0.5 hidden sm:inline">{item.label}</span>
    </motion.a>
  )
}