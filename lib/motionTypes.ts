import { motion, MotionProps } from "framer-motion";
import React from "react";

export const MotionSection = motion.section as React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLElement> & MotionProps & React.RefAttributes<HTMLElement>
>;

export const MotionDiv = motion.div as React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & MotionProps & React.RefAttributes<HTMLDivElement>
>;

export const MotionLi = motion.li as React.ForwardRefExoticComponent<
  React.LiHTMLAttributes<HTMLLIElement> & MotionProps & React.RefAttributes<HTMLLIElement>
>;

export const MotionSpan = motion.span as React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLSpanElement> & MotionProps & React.RefAttributes<HTMLSpanElement>
>;

export const MotionH1 = motion.h1 as React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLHeadingElement> & MotionProps & React.RefAttributes<HTMLHeadingElement>
>;