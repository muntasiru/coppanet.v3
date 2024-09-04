// components/Preloader.js
"use client";

import { Router } from "next/router";
import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let time = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearInterval(time);
  }, []);
  console.log(isLoading);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          {/* Your loading animation or image here */}
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default Preloader;
