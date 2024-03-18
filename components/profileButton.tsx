import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";

const ProfileButton = () => {
    return (
        <div>
            <Link href="/login">
                <Button variant="outline" size="default">Se connecter</Button>
            </Link>
        </div>
    );
};

export default ProfileButton;