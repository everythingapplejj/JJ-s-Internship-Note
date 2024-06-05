/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Plus = ({ className }) => {
  return (
    <svg
      className={`plus ${className}`}
      fill="none"
      height="31"
      viewBox="0 0 30 31"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M15 15.5H6.25H15Z" fill="white" />
      <path
        className="path"
        d="M15 6.75V15.5M15 15.5V24.25M15 15.5H23.75M15 15.5H6.25"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
