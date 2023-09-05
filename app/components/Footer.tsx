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
      <div className="w-full container mx-auto bg-transparent px-2 md:px-12">
        <div className="flex justify-between text-white p-3 flex-wrap gap-4 lg:flex-nowrap lg:gap-0">
          <div className="text-lg">
            <p>Designed and Developed by Shahzad Ali</p>
          </div>
          <div className="text-lg">
            <p>Copyright © 2023 SZ</p>
          </div>
          <div className="flex gap-5 cursor-pointer text-gray-400 ">
            <Link href="https://github.com">
              <TiSocialGithubCircular
                className="w-9 h-9 hover:bg-green-500 hover:text-white rounded-full 
              hover:-translate-y-2 transition-all duration-500"
              />
            </Link>
            <Link href="https://www.linkedin.com">
              <TiSocialLinkedinCircular
                className="w-9 h-9 hover:bg-green-500 hover:text-white rounded-full
              hover:-translate-y-2 transition-all duration-500"
              />
            </Link>
            <Link href="https://www.facebook.com">
              <TiSocialFacebookCircular
                className="w-9 h-9 hover:bg-green-500 hover:text-white rounded-full
              hover:-translate-y-2 transition-all duration-500"
              />
            </Link>
            <Link href="https://twitter.com">
              <TiSocialTwitterCircular
                className="w-9 h-9 hover:bg-green-500 hover:text-white rounded-full
              hover:-translate-y-2 transition-all duration-500"
              />
            </Link>
            <Link href="https://instagram.com">
              <TiSocialInstagramCircular
                className="w-9 h-9 hover:bg-green-500 hover:text-white rounded-full
                hover:-translate-y-2 transition-all duration-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
