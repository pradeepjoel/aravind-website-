import * as React from "react";

export function Section({
  id,
  title,
  icon,
  children,
  className,
}: React.PropsWithChildren<{
  id: string;
  title: string;
  icon?: React.ReactNode;
  className?: string;
}>) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <div className="flex items-center gap-2 text-[13px] font-medium text-[color:var(--muted-foreground)]">
          {icon ? <span className="text-[color:var(--accent)]">{icon}</span> : null}
          <span className="text-[22px] font-semibold tracking-tight text-foreground">
            {title}
          </span>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

