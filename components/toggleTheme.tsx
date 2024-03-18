"use client";

import {MoonIcon, SunIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

const ToggleTheme = () => {
    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
    };
    return (
        <Button className="flex justify-center"
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        >
            <MoonIcon className="h-6 w-6 scale-100 dark:scale-0" />
            <SunIcon className="h-6 w-6 scale-0 dark:scale-100"/>
        </Button>
    );
};

export default ToggleTheme;