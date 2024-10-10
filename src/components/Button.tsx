import Link from "next/link";
import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  // Define base classes common to all buttons
  const baseClasses =
    "py-3 px-6 rounded-md shadow-lg font-bold border-2 tracking-wide transition-colors duration-300 transform transition-transform duration-100 ease-out focus:outline-none focus:ring-2 focus:ring-offset";

  // Define variant-specific classes
  const variantClasses = {
    primary: classNames(
      "border-tertiary",
      "text-tertiary",
      "focus:ring-tertiary",
      "active:translate-y-0.5 active:shadow-md"
    ),
    secondary: classNames(
      "border-primary",
      "text-primary",
      "bg-[rgba(255,251,245,0.1)]",
      "focus:ring-primary",
      "active:translate-y-0.5 active:shadow-md"
    ),
  };

  // Combine all classes
  const buttonClasses = classNames(
    baseClasses,
    variantClasses[variant],
    {
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  if (href && !disabled) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a className={buttonClasses}>{children}</a>
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}
