import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, CSSProperties } from "react";

interface Props {
  id: string;
  title: string;
  children: ReactNode;
  gradientPosition?: "left" | "right" | "bottom";
}

export const SectionWrapper = ({
  id,
  title,
  children,
  gradientPosition,
}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const gradientStyle: CSSProperties = gradientPosition
    ? {
        background: `radial-gradient(circle at -20% 50%, #051d32, #051d33, #071f36, #0e2340, #14254a, #16264e, #17264e);`,
        height: "70%",
        top: "15%",
        opacity: 0.03,
        pointerEvents: "none",
      }
    : {};

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center py-16 relative overflow-hidden"
    >
      <div
        className="absolute inset-x-0"
        style={gradientStyle}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">{title}</h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
};
