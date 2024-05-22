/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const BarsOutline = ({ color = "white", className }) => {
  return (
    <svg
      className={`bars-outline ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19.0588 7H4.94118C4.69156 7 4.45217 6.89464 4.27566 6.70711C4.09916 6.51957 4 6.26522 4 6C4 5.73478 4.09916 5.48043 4.27566 5.29289C4.45217 5.10536 4.69156 5 4.94118 5H19.0588C19.3084 5 19.5478 5.10536 19.7243 5.29289C19.9008 5.48043 20 5.73478 20 6C20 6.26522 19.9008 6.51957 19.7243 6.70711C19.5478 6.89464 19.3084 7 19.0588 7Z"
        fill={color}
      />
      <path
        className="path"
        d="M19.0588 13H4.94118C4.69156 13 4.45217 12.8946 4.27566 12.7071C4.09916 12.5196 4 12.2652 4 12C4 11.7348 4.09916 11.4804 4.27566 11.2929C4.45217 11.1054 4.69156 11 4.94118 11H19.0588C19.3084 11 19.5478 11.1054 19.7243 11.2929C19.9008 11.4804 20 11.7348 20 12C20 12.2652 19.9008 12.5196 19.7243 12.7071C19.5478 12.8946 19.3084 13 19.0588 13Z"
        fill={color}
      />
      <path
        className="path"
        d="M19.0588 19H4.94118C4.69156 19 4.45217 18.8946 4.27566 18.7071C4.09916 18.5196 4 18.2652 4 18C4 17.7348 4.09916 17.4804 4.27566 17.2929C4.45217 17.1054 4.69156 17 4.94118 17H19.0588C19.3084 17 19.5478 17.1054 19.7243 17.2929C19.9008 17.4804 20 17.7348 20 18C20 18.2652 19.9008 18.5196 19.7243 18.7071C19.5478 18.8946 19.3084 19 19.0588 19Z"
        fill={color}
      />
    </svg>
  );
};

BarsOutline.propTypes = {
  color: PropTypes.string,
};
