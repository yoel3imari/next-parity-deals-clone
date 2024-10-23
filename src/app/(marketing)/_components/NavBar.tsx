import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <header className="flex py-6 shadow-lg fixed top-0 w-full z-10 bg-background/95">
      <nav className="container flex items-center gap-10 font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>

        <Link href="#" className="text-lg">
          Features
        </Link>
        <Link href="#pricing" className="text-lg">
          Pricing
        </Link>
        <Link href="#" className="text-lg">
          About
        </Link>
        <span className="text-lg">
          <SignedIn>
            <Link href="/dashboard" className="text-lg">
              Dashboard
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
}

export default NavBar;
