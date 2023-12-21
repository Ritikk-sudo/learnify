"use client";

import Link from "next/link";
import React from "react";
import { data } from "../../../src/utils/data";


function Card() {
     
      
  return (

    <div className="md:flex md:gap-6 md:mx-36 mb-14 mt-4">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="mt-9 mx-7 md:mx-0  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`/course/${item.courseName}`}>
              <img
                className="rounded-t-lg"
                src={item.courseImg}
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link href={`/course/${item.courseName}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.courseName}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.courseDesc.split("").splice(0, 10)}...
              </p>
              <Link
                href={`/course/${item.courseName}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
