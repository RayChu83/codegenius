import React from "react";

export default function Button({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <button className={className}>{children}</button>;
}
