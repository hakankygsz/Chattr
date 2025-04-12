import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type CarouselProps = {
    images: { id: number; imageSrc: string }[];
    autoPlay?: boolean;
    interval?: number;
    autoPlayDirection?: "next" | "prev";
    arrowStyle?: "default" | "none" | "custom";
    indicatorStyle?: "default" | "custom";
    onImageChange?: (index: number) => void;
    classNames?: string;
    pauseOnHover?: boolean;
    touchSwipe?: boolean; // Yeni özellik
    transitionEffect?: "slide" | "fade"; // Yeni özellik
    lazyLoad?: boolean; // Yeni özellik
};

const Carousel: React.FC<CarouselProps> = ({
    images = [],
    autoPlay = false,
    interval = 3000,
    autoPlayDirection = "next",
    arrowStyle = "default",
    indicatorStyle = "default",
    onImageChange = () => { },
    classNames = "",
    pauseOnHover = false,
    touchSwipe = true,
    transitionEffect = "slide",
    lazyLoad = false,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isTouching, setIsTouching] = useState(false);
    const touchStartRef = useRef(0);

    useEffect(() => {
        if (!autoPlay || isHovered) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (autoPlayDirection === "next"
                ? (prev + 1) % images.length
                : (prev - 1 + images.length) % images.length));
        }, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, images.length, autoPlayDirection, isHovered]);

    const changeSlide = (direction: "prev" | "next") => {
        setCurrentIndex((prev) => (direction === "next"
            ? (prev + 1) % images.length
            : (prev - 1 + images.length) % images.length));
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (touchSwipe) {
            setIsTouching(true);
            touchStartRef.current = e.touches[0].clientX;
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isTouching && touchSwipe) {
            const touchEnd = e.touches[0].clientX;
            if (touchStartRef.current - touchEnd > 50) {
                changeSlide("next");
                setIsTouching(false);
            } else if (touchEnd - touchStartRef.current > 50) {
                changeSlide("prev");
                setIsTouching(false);
            }
        }
    };

    const handleTouchEnd = () => {
        setIsTouching(false);
    };

    return (
        <div
            className={`relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg ${classNames}`}
            onMouseEnter={() => pauseOnHover && setIsHovered(true)}
            onMouseLeave={() => pauseOnHover && setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="relative w-full">
                {images.length > 0 && (
                    <div className={`transition-all duration-500 ${transitionEffect === "fade" ? "opacity-0" : ""}`}>
                        <img
                            key={currentIndex}
                            src={lazyLoad ? `${images[currentIndex].imageSrc}?lazy` : images[currentIndex].imageSrc}
                            alt="carousel"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>

            {arrowStyle !== "none" && (
                <>
                    <button
                        onClick={() => changeSlide("prev")}
                        className={`absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-neutral-200/80 ${arrowStyle === "custom" ? "custom-arrow" : ""} ${currentIndex === 0 ? "hidden" : ""}`}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={() => changeSlide("next")}
                        className={`absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-neutral-200/80 ${arrowStyle === "custom" ? "custom-arrow" : ""} ${currentIndex === images.length - 1 ? "hidden" : ""}`}
                    >
                        <FaChevronRight />
                    </button>
                </>
            )}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onImageChange(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-white scale-105" : indicatorStyle === "custom" ? "bg-neutral-500" : "bg-neutral-200/80"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
