"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";
import LogoIcon from "public/logo.png";
import CartIcon from "public/cart.png";

// hydration => make interactive (HTML --> React Component)

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image className={styles.logo} src={LogoIcon} alt="logo" />
      </Link>
      <Link href="/">
        <Image className={styles.cart} src={CartIcon} alt="cart" />
      </Link>
      {/* <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul> */}
    </nav>
  );
}
