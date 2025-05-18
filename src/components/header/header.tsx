import { Logo } from "@/components/logo/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center my-5 mx-3">
                <div className="flex items-center gap-3">
                    <Logo />
                    <ThemeToggle />
                </div>
                <div className="flex items-center gap-3">
                    ...
                </div>

            </div>
        </>

    );
};