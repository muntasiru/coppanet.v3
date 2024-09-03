// components/NavLink.tsx
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  activeClassName: string;
}

export default function NavLink({
  href,
  children,
  activeClassName,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} {...props}>
      <p className={isActive ? activeClassName : ""}>{children}</p>
    </Link>
  );
}
