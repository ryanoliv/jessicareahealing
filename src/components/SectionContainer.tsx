import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
}
export default function SectionContainer({ children }: SectionContainerProps) {
  return <div className="px-4 py-10 max-w-screen-2xl mx-auto">{children}</div>;
}
