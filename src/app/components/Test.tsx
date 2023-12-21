"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { data } from "@/utils/data";
import dynamic from "next/dynamic";

function Test({ params }: any) {
  // const [video, setVideo] = useState(null);
  // useEffect(() => {
  //   setVideo({ da });
  // }, []);

  return (
    <div>
      <div></div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            {params.id === item.courseName ? (
              <div className="md:flex md:justify-between">
                <div className="md:ml-28 ml-5 mr-11">
                  <h1 className="md:text-3xl text-2xl font-semibold text-blue-900">
                    Course Name : {item.courseName}
                  </h1>
                  <h4 className="my-7 ml-4">{item.courseDesc}</h4>
                </div>
                <div className="flex md:block justify-center">
                  <ReactPlayer
                    className="md:mr-9"
                    url={item?.courseVideo}
                    controls={true}
                    width="70%"
                    height="70%"
                  />
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

// export default Test;
export default dynamic(() => Promise.resolve(Test), { ssr: false });
