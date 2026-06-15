import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({ href, children, variant = "primary", className, type = "button", disabled }: ButtonProps) {
  const classes = cn("btn", variant === "secondary" && "btn-secondary", className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
