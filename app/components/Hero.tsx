import React from "react";
import Image from "next/image";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="w-full mx-auto container p-10">
      <div className="flex justify-between pt-20">
        <div className="flex flex-col gap-9">
          <h2 className="text-4xl">Hi There!</h2>
          <h1 className="text-6xl">I'M SHAHZAD ALI</h1>
          <h2 className="text-4xl pt-10">Web Developer</h2>
          <div className="flex gap-5 cursor-pointer">
            <Link href="">
              <TiSocialGithubCircular className="w-8 h-8" />
            </Link>
            <Link href="">
              <TiSocialLinkedinCircular className="w-8 h-8" />
            </Link>
            <Link href="">
              <TiSocialFacebookCircular className="w-8 h-8" />
            </Link>
            <Link href="">
              <TiSocialTwitterCircular className="w-8 h-8" />
            </Link>
          </div>
        </div>
        <div className="bg-transparent bg-opacity-0">
          <Image src="/hero3.avif" alt="hero" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
