import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from 'react';
import { CiCircleAlert, CiCircleInfo, CiWarning } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
};

const sizeClasses = {
    small: "max-w-xs md:max-w-sm lg:max-w-lg h-full max-h-[400px]",
    medium: "max-w-sm md:max-w-md lg:max-w-xl h-full max-h-[720px]",
    large: "max-w-md md:max-w-lg lg:max-w-2xl h-full max-h-[840px]"
};

const iconTypes = {
    info: <CiCircleInfo className='text-blue-500 dark:text-blue-300' />,
    warning: <CiWarning className='text-yellow-500 dark:text-yellow-300' />,
    error: <CiCircleAlert className='text-red-500 dark:text-red-300' />,
    none: ""
};

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    type: "info" | "warning" | "error" | "none";
    size: "small" | "medium" | "large";
    showCloseButton?: boolean;
    autoClose?: number;
    closeOnOverlayClick: boolean;
    loading?: boolean;
}

const Modal: React.FC<ModalProps> = ({
    isOpen, onClose, title, children,
    type = "info", size = "medium",
    showCloseButton = true, autoClose = undefined, closeOnOverlayClick = true, loading = false
}) => {
    const closeModal = useCallback(() => onClose?.(), [onClose]);
    const [modalCount, setModalCount] = useState(0);
    const [countdown, setCountdown] = useState<number>(autoClose ? Math.floor(autoClose / 1000) : 0);

    useEffect(() => {
        if (isOpen) {
            setModalCount(prevCount => prevCount + 1);
            document.body.style.overflow = 'hidden';
            if (autoClose) {
                setCountdown(Math.floor(autoClose / 1000));
                const timer = setTimeout(() => {
                    closeModal();
                }, autoClose);
                return () => clearTimeout(timer);
            }
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen, autoClose, closeModal]);

    useEffect(() => {
        if (countdown > 0 && isOpen && autoClose) {
            const interval = setInterval(() => setCountdown(prev => prev - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [countdown, isOpen, autoClose]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (closeOnOverlayClick) {
            closeModal();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black/50 dark:bg-black/50 z-50 p-4 md:p-0 h-full"
                    initial={{ opacity: 0 }} animate="visible" exit={{ opacity: 0 }} variants={variants}
                    onClick={handleOverlayClick}
                >
                    <motion.div
                        className={`relative flex flex-col w-full border rounded-lg shadow-md overflow-auto bg-white dark:bg-gradient-to-br dark:from-[#040312] dark:to-gray-950 text-black dark:text-white ${sizeClasses[size]}`}
                        initial="hidden" animate="visible" exit="exit" variants={variants}
                        transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()}
                        style={{ zIndex: 1000 + modalCount }}
                    >
                        <div className="sticky top-0 flex items-center justify-between gap-8 p-4 border-b dark:border-neutral-900 bg-white/90 dark:bg-transparent">
                            <span className={`text-3xl lg:text-5xl ${!title && 'text-5xl lg:text-6xl'} p-0.5`}>{iconTypes[type]}</span>
                            {title && <h2 className="text-lg font-medium">{title}</h2>}
                            {showCloseButton && (
                                <button
                                    onClick={closeModal}
                                    className="text-4xl text-black dark:text-neutral-400 hover:dark:text-white"
                                >
                                    <IoIosClose />
                                </button>
                            )}
                        </div>
                        <div className='flex flex-col w-full h-full text-base md:text-lg py-2 px-4 text-neutral-300 overflow-y-auto'>
                            {loading ? (
                                <div className="flex items-center justify-center h-full">
                                    <div className="w-12 h-12 border-4 border-t-blue-500 rounded-full animate-spin" />
                                </div>
                            ) : (children)}
                            {autoClose && countdown > 0 && (
                                <div className="absolute top-2 right-2 text-sm text-gray-500 dark:text-gray-300">
                                    {`Closing in ${countdown}s`}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
