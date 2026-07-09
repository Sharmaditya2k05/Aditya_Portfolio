import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionLabel({ children, className, centered = false }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4",
        centered && "justify-center",
        className
      )}
    >
      <span className="h-px w-8 bg-accent flex-shrink-0" />
      {children}
    </div>
  );
}
