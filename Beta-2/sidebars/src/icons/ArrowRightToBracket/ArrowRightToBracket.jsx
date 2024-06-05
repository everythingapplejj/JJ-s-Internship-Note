/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowRightToBracket = ({ color = "white", className }) => {
  return (
    <svg
      className={`arrow-right-to-bracket ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19.923 11.618C19.872 11.495 19.799 11.385 19.706 11.292L15.707 7.293C15.316 6.902 14.684 6.902 14.293 7.293C13.902 7.684 13.902 8.316 14.293 8.707L16.586 11H8C7.447 11 7 11.448 7 12C7 12.552 7.447 13 8 13H16.586L14.293 15.293C13.902 15.684 13.902 16.316 14.293 16.707C14.488 16.902 14.744 17 15 17C15.256 17 15.512 16.902 15.707 16.707L19.706 12.708C19.799 12.616 19.872 12.505 19.923 12.382C20.024 12.138 20.024 11.862 19.923 11.618Z"
        fill={color}
      />
      <path
        className="path"
        d="M10 18H7C6.448 18 6 17.551 6 17V7C6 6.449 6.448 6 7 6H10C10.553 6 11 5.552 11 5C11 4.448 10.553 4 10 4H7C5.346 4 4 5.346 4 7V17C4 18.654 5.346 20 7 20H10C10.553 20 11 19.552 11 19C11 18.448 10.553 18 10 18Z"
        fill={color}
      />
    </svg>
  );
};

ArrowRightToBracket.propTypes = {
  color: PropTypes.string,
};
