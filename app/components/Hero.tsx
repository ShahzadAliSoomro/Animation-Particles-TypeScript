import React from "react";
import Image from "next/image";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="w-full mx-auto container p-10">
      <div className="flex justify-between pt-20 flex-wrap gap-6 lg:flex-nowrap lg:gap-0">
        <div className="flex flex-col gap-9">
          <h2 className="text-4xl">Hi There!</h2>
          <h1 className="text-6xl">I'M SHAHZAD ALI</h1>
          <h2 className="text-4xl pt-10">Web Developer</h2>
          <div className="flex gap-5 cursor-pointer">
            <Link href="https://github.com/ShahzadAliSoomro">
              <TiSocialGithubCircular className="w-8 h-8 hover:bg-green-500 rounded-full" />
            </Link>
            <Link href="https://www.linkedin.com/in/shahzad-ali-51748122b/">
              <TiSocialLinkedinCircular className="w-8 h-8 hover:bg-green-500 rounded-full" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100067543970671&mibextid=ZbWKwL">
              <TiSocialFacebookCircular className="w-8 h-8 hover:bg-green-500 rounded-full" />
            </Link>
            <Link href="https://twitter.com/Shahzad67656720?t=VTYdy-uo4cClxdvEI_4DiA&s=08">
              <TiSocialTwitterCircular className="w-8 h-8 hover:bg-green-500 rounded-full" />
            </Link>
            <Link href="https://instagram.com/shahzadhussain1731043?igshid=MzNlNGNkZWQ4Mg==">
                <TiSocialInstagramCircular className="w-8 h-8 hover:bg-green-500 rounded-full" />
            </Link>
          </div>
        </div>
        <div className="bg-transparent">
          <Image src="/hero3.avif" alt="hero" width={500} height={500} className=""/>
        </div>
      </div>
    </div>
  );
}
