import { useState, useEffect } from 'react';
import pokeball from "@/assets/icon/pokeball.png";
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Content() {
    const [isFirstMenu, setIsFirstMenu] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const size = 24;

    const handleMenuSwitch = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        
        // Allow time for the menu to retract before switching
        setTimeout(() => {
            setIsFirstMenu(!isFirstMenu);
        }, 500);
    };

    useEffect(() => {
        if (isAnimating) {
            // Reset animation state after complete transition
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    const containerVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: { 
            width: "auto", 
            opacity: 1,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.1
            }
        },
        exit: { 
            width: 0, 
            opacity: 0,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    return (
        <section id="content" className="flex items-center justify-start p-6">
            <div className="flex items-center relative">
                <motion.div 
                    className="h-12 w-12 border rounded-full flex items-center justify-center cursor-pointer z-10 relative shadow-lg"
                    onClick={handleMenuSwitch}
                >
                    <motion.div
                        animate={{ rotate: isAnimating ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={pokeball} alt="Pokeball" className="w-6 h-6 object-contain select-none" />
                    </motion.div>
                </motion.div>

                <AnimatePresence mode="wait">
                    {!isAnimating && (
                        <motion.div
                            key={isFirstMenu ? "first-menu" : "second-menu"}
                            className="border-r border-y rounded-r-lg overflow-hidden flex items-center py-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {isFirstMenu ? (
                                <div className="flex items-center space-x-6 px-8">
                                    <motion.a
                                        href="#about"
                                        className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
                                        variants={itemVariants}
                                    >
                                        <span className='font-semibold text-md'>about</span>
                                    </motion.a>
                                    <motion.a
                                        href="#skills"
                                        className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
                                        variants={itemVariants}
                                    >
                                        <span className='font-semibold text-md'>skills</span>
                                    </motion.a>
                                    <motion.a
                                        href="#experience"
                                        className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
                                        variants={itemVariants}
                                    >
                                        <span className='font-semibold text-md'>experience</span>
                                    </motion.a>
                                    <motion.a
                                        href="#projects"
                                        className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
                                        variants={itemVariants}
                                    >
                                        <span className='font-semibold text-md'>projects</span>
                                    </motion.a>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-6 px-8">
                                    <motion.a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-white hover:text-pink-400 transition-colors"
                                        variants={itemVariants}
                                    >
                                        <FaInstagram size={size} />
                                    </motion.a>
                                    <motion.a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
                                        variants={itemVariants}
                                    >
                                        <FaLinkedin size={size} />
                                    </motion.a>
                                    <motion.a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-white hover:text-gray-400 transition-colors"
                                        variants={itemVariants}
                                    >
                                        <FaGithub size={size} />
                                    </motion.a>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
                
                
            </div>
        </section>
    );
}