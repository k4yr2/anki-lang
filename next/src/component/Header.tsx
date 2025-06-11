import style from "@/style/Header.module.css";
import { Settings as SettingsIcon } from "@deemlol/next-icons";
import Link from "next/link";

const Header = () => {
    return (
        <header className={style.header}>
            <Settings />
        </header>
    )
};

export default Header;

const Settings = () => {
    return (
        <Link href={"/settings"} className={style.settings}>
            <SettingsIcon size={24} color="#FFFFFF" />
        </Link>
    )
}