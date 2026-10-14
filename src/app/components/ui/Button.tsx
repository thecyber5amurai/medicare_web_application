import Link from 'next/link';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 cursor-pointer';
  
  const variants = {
    primary: 'border border-blue-100 bg-blue-50/80 text-sky-400 focus:ring-50/80',
    secondary: 'bg-sky-700 hover:bg-sky-800 text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const styles = [baseStyles, variants[variant], sizes[size], className].filter(Boolean).join(' ');

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type}
      className={styles}
      {...props}
    >
      {children}
    </button>
  );
}