
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useGsapTextReveal = (deps = []) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const chars = ref.current.children;
      gsap.fromTo(
        chars,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, [ref, ...deps]);

  return ref;
};

export const useGsapShutterReveal = (deps = []) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            gsap.fromTo(ref.current, 
                { scaleX: 0 }, 
                { 
                    scaleX: 1, 
                    duration: 1.2, 
                    ease: 'power4.inOut',
                    transformOrigin: 'left',
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 90%',
                    }
                }
            );
        }
    }, [ref, ...deps]);

    return ref;
};
