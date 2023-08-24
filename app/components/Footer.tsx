import React from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-slate-800">
      <div className="w-full container mx-auto bg-transparent ">
        <div className="flex justify-between text-white p-3 flex-wrap gap-4 lg:flex-nowrap lg:gap-0">
          <div className="text-lg">
            <p>Designed and Developed by Shahzad Ali</p>
          </div>
          <div className="text-lg">
            <p>Copyright © 2023 SZ</p>
          </div>
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
      </div>
    </div>
  );
}
