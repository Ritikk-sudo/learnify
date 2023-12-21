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
      <div>

      </div>
      {data.map((item, index) => {
        return (
          
          <div key={index}>
            {params.id === item.courseName ? (
              <div className="flex justify-between">
                <div className="ml-28">
                  <h1 className="text-3xl font-semibold text-blue-900">
                  Course Name : {item.courseName}
                  </h1>
                  <h4 className="my-7 ml-4">
                    {item.courseDesc}
                  </h4>
                </div>
                <ReactPlayer
                className="mr-14"
                  url={item?.courseVideo}
                  controls={true}
                  width="50%"
                  height="50%"
                />
               
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

// export default Test;
export default dynamic (() => Promise.resolve(Test), {ssr: false})
