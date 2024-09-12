"use client"
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbarMenu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-md mx-auto z-50 ", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home" href="#home"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="About" href="#about"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Skills" href="#skills"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Projects" href="#my-work"></MenuItem>
                {/* <MenuItem setActive={setActive} active={active} item="Blogs" href="#blogs"></MenuItem> */}
                <MenuItem setActive={setActive} active={active} item="Contact" href="#contact"></MenuItem>
            </Menu>
        </div>
    );
}
