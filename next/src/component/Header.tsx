"use client";
import style from "@/style/Header.module.css";
import { Settings as SettingsIcon } from "@deemlol/next-icons";
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
        <Link href={href} className={style.settings}>
            <SettingsIcon size={24} color="#FFFFFF" />
        </Link>
    )
}