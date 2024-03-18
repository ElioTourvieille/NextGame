import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mx-auto w-full p-8 bg-gray-700">
            <div className="mx-auto w-1/3 flex flex-col justify-center text-center">
                <div className="space-y-1">
                    <p className="text-sm text-gray-400">
                        &copy; {currentYear} NextGame. Tous droits réservés.
                        Conceptualisé et conçu par Eric Tourvieille
                    </p>
                </div>
                <Separator className="my-4"/>
                <div className="flex h-5 justify-center whitespace-nowrap items-center space-x-4 text-sm text-white">
                    <div>A propos de NextGame</div>
                    <Separator orientation="vertical"/>
                    <div>Carrières</div>
                    <Separator orientation="vertical"/>
                    <div>Support</div>
                    <Separator orientation="vertical"/>
                    <div>Instagram</div>
                    <Separator orientation="vertical"/>
                    <div>Facebook</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;