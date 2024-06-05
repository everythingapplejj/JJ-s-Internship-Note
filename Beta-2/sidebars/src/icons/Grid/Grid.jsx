/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Grid = ({ color = "white", className }) => {
  return (
    <svg
      className={`grid ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.143 3H4.857C3.83141 3 3 3.83141 3 4.857V9.143C3 10.1686 3.83141 11 4.857 11H9.143C10.1686 11 11 10.1686 11 9.143V4.857C11 3.83141 10.1686 3 9.143 3Z"
        fill={color}
      />
      <path
        className="path"
        d="M19.143 3H14.857C13.8314 3 13 3.83141 13 4.857V9.143C13 10.1686 13.8314 11 14.857 11H19.143C20.1686 11 21 10.1686 21 9.143V4.857C21 3.83141 20.1686 3 19.143 3Z"
        fill={color}
      />
      <path
        className="path"
        d="M9.143 13H4.857C3.83141 13 3 13.8314 3 14.857V19.143C3 20.1686 3.83141 21 4.857 21H9.143C10.1686 21 11 20.1686 11 19.143V14.857C11 13.8314 10.1686 13 9.143 13Z"
        fill={color}
      />
      <path
        className="path"
        d="M19.143 13H14.857C13.8314 13 13 13.8314 13 14.857V19.143C13 20.1686 13.8314 21 14.857 21H19.143C20.1686 21 21 20.1686 21 19.143V14.857C21 13.8314 20.1686 13 19.143 13Z"
        fill={color}
      />
    </svg>
  );
};

Grid.propTypes = {
  color: PropTypes.string,
};
