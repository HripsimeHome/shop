 
import clsx from "clsx";
import { ReactNode } from 'react';

type SectionTitleProps = {
  children: ReactNode;
  className?: string; 
}
 
export default function SectionTitle({
  children, 
  className = '',
} : SectionTitleProps) {
  return (

  <h1 className={clsx(
    "font-heading text-xl font-bold text-text-primary md:text-3xl", className
  )}>       
    {children}
  </h1>     
  );
}