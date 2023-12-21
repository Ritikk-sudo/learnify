import Link from "next/link";
import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import dynamic from "next/dynamic";
function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div>
          <Link
            href="#"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <div>
              <Link href="/">
                <MdOutlineCastForEducation size={50} color={"blue"} />
              </Link>
            </div>

            <span className="ml-3 text-xl">Learnify</span>
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href="#" className="mr-5 hover:text-gray-900">
              Courses
            </Link>
            <Link href="#" className="mr-5 hover:text-gray-900">
              Demo
            </Link>
            <Link href="#" className="mr-5 hover:text-gray-900">
              ContactUs
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

// export default Header;
export default dynamic(() => Promise.resolve(Header), { ssr: false });
