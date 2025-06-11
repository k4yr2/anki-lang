"use client";
import style from "@/style/Header.module.css";
import { Settings as SettingsIcon } from "@deemlol/next-icons";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    return (
        <header className={style.header}>
            <Settings />
        </header>
    )
};

export default Header;

const Settings = () => {
    const pathName = usePathname();
    const href = pathName.startsWith('/settings') ? '/' : '/settings';

    return (
        <Link href={href} className={clsx(style.settings, "flat-button", "scale32")}>
            <SettingsIcon size={24} color="#FFFFFF" />
        </Link>
    )
}