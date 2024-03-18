import NavBar from "./navBar";
import ProfileButton from "@/components/profileButton";
import ToggleTheme from "@/components/toggleTheme";
import Link from "next/link";

const Header = () => {
    return (
        <header className="p-8 border-b">
            <div className="mx-auto w-full max-w-7xl
            flex items-center justify-between
            ">
                <Link href="/">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-blue-700"
                >NextGame</h1>
                </Link>

                {/* Navigation */}
                <NavBar/>

                {/* Button */}
                <div className="flex items-center space-x-5">
                    <ToggleTheme/>
                    <ProfileButton/>
                </div>
            </div>

        </header>
    );
};

export default Header;