// import * as React from 'react';
// import { cva, type VariantProps } from "class-variance-authority";
// import { cn } from "../../lib/utils";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
//         destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
//         outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
//         secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
// size:{
//   default:"h-9 px-4 py-2",
//   sm: "h-8 rounded-md text-xs",
//   lg: "h-10 rounded-md px-8",
//   icons:"h-9 w-9"
// },

//     },

//     defaultVariants:{
//       variant :"default",
//       size: "default"

//     }
//   }
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
//   size?: "default" | "sm" | "lg" | "icons";
//   asChild?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
//     const Comp = asChild ? "span" : "button";
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );


// Button.displayName = "Button";
// export {Button,buttonVariants}

import React from 'react';
// Remove unused import
// import { VariantProps } from 'class-variance-authority';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};