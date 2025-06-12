import useSettings from "@/hooks/useSettings";

export const SettingsProvider = ({ children } : { children : React.ReactNode}) => {
    useSettings();

    return (
        <>
          {children}
        </>
    );
}

export default SettingsProvider;