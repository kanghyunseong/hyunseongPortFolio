import React, { useRef, useEffect, useState } from "react";

/**
 * 스크롤 시 뷰포트에 들어오면 .in-view를 붙여 CSS 애니메이션 트리거
 * delay: 0~5 (stagger용, delay-1 ~ delay-5 클래스)
 * once: true면 한 번만 애니메이션 (기본 true)
 */
const AnimateOnScroll = ({
  children,
  delay = 0,
  once = true,
  className = "",
  as: Wrapper = "div",
  ...props
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once && el) observer.unobserve(el);
          }
        });
      },
      {
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const delayClass = delay >= 1 ? `delay-${delay}` : "";
  const classes = [
    "animate-on-scroll",
    inView ? "in-view" : "",
    delayClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Wrapper ref={ref} className={classes} {...props}>
      {children}
    </Wrapper>
  );
};

export default AnimateOnScroll;
