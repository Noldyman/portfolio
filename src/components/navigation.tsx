import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const navigationItems = [
    { label: "/Profile", path: "/" },
    { label: "/Portfolio", path: "/portfolio" },
    { label: "/Contact", path: "/contact" },
  ];

  return (
    <div className="navigation">
      {navigationItems.map((item) => {
        const isActive = Boolean(pathname === item.path);
        return (
          <Link
            key={item.path}
            className={`navigation-item ${isActive && "active"}`}
            href={item.path}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
