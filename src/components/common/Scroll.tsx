import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({ offset = 0, smoothScroll = true, rememberPosition = false, dynamicOffset = false, scrollSpeed = 'normal' }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (rememberPosition) {
        localStorage.setItem(`scroll-position-${pathname}`, String(window.scrollY));
      }
    };

    if (rememberPosition) {
      const savedPosition = localStorage.getItem(`scroll-position-${pathname}`);
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
        return;
      }
    }

    const calculatedOffset = dynamicOffset ? (window.innerWidth > 768 ? 100 : 50) : offset;

    if (smoothScroll) {
      scrollTo(calculatedOffset, true, scrollSpeed);
    } else {
      window.scrollTo(0, calculatedOffset);
    }

    if (rememberPosition) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      if (rememberPosition) {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      }
    };
  }, [pathname, offset, smoothScroll, rememberPosition, dynamicOffset, scrollSpeed]);

  return null
}

export function scrollTo(top = 0, smooth = true, speed = 'normal') {
  const behavior = smooth ? 'smooth' : 'auto';

  let duration = 0;
  if (speed === 'fast') {
    duration = 200;
  } else if (speed === 'slow') {
    duration = 1000;
  }

  if (smooth) {
    const start = window.scrollY;
    const distance = top - start;
    const startTime = performance.now();

    function animateScroll(currentTime: DOMHighResTimeStamp) {
      const timeElapsed = currentTime - startTime;
      const scrollProgress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, start + distance * scrollProgress);

      if (scrollProgress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  } else {
    window.scrollTo(0, top);
  }
}