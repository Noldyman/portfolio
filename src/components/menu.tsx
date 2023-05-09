import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  const menuItems = [
    { label: "/Profile", path: "/" },
    { label: "/Portfolio", path: "/portfolio" },
    { label: "/Contact", path: "/contact" },
  ];

  return (
    <div className="menu">
      {menuItems.map((item) => {
        const isActive = Boolean(router.pathname === item.path);
        return (
          <Link key={item.path} className={`menu-item ${isActive && "active"}`} href={item.path}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
