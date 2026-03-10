"use client";

import { motion, type MotionProps } from "framer-motion";
import * as React from "react";

type RevealProps = React.PropsWithChildren<
  {
    className?: string;
    delay?: number;
    once?: boolean;
  } & MotionProps
>;

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -120px 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

