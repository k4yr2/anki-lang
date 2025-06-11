"use client";
import style from "@/style/Header.module.css";
import { Settings as SettingsIcon } from "@deemlol/next-icons";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    return (
        <header className={style.header}>
            <HeaderSettings />
        </header>
    )
};

export default Header;

const HeaderSettings = () => {
    const pathName = usePathname();
    const active = pathName.startsWith('/settings')
    const href = active ? '/' : '/settings';

    return (
        <Link href={href} className={clsx(style.settings, "flat-button", "scale32", active && "active")}>
            <SettingsIcon size={24} color="#FFFFFF" />
        </Link>
    )
}