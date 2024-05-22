/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CalendarDay = ({ className }) => {
  return (
    <svg
      className={`calendar-day ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21 6.6C21 6.12261 20.8104 5.66477 20.4728 5.32721C20.1352 4.98964 19.6774 4.8 19.2 4.8H17.4V3.9C17.4 3.66131 17.3052 3.43239 17.1364 3.2636C16.9676 3.09482 16.7387 3 16.5 3C16.2613 3 16.0324 3.09482 15.8636 3.2636C15.6948 3.43239 15.6 3.66131 15.6 3.9V4.8H12.9V3.9C12.9 3.66131 12.8052 3.43239 12.6364 3.2636C12.4676 3.09482 12.2387 3 12 3C11.7613 3 11.5324 3.09482 11.3636 3.2636C11.1948 3.43239 11.1 3.66131 11.1 3.9V4.8H8.4V3.9C8.4 3.66131 8.30518 3.43239 8.1364 3.2636C7.96761 3.09482 7.73869 3 7.5 3C7.26131 3 7.03239 3.09482 6.8636 3.2636C6.69482 3.43239 6.6 3.66131 6.6 3.9V4.8H4.8C4.32261 4.8 3.86477 4.98964 3.52721 5.32721C3.18964 5.66477 3 6.12261 3 6.6V8.4H21V6.6Z"
        fill="#1F2A37"
      />
      <path
        className="path"
        d="M3 19.2C3 19.6774 3.18964 20.1352 3.52721 20.4728C3.86477 20.8104 4.32261 21 4.8 21H19.2C19.6774 21 20.1352 20.8104 20.4728 20.4728C20.8104 20.1352 21 19.6774 21 19.2V10.2H3V19.2ZM7.5 12H16.5C16.7387 12 16.9676 12.0948 17.1364 12.2636C17.3052 12.4324 17.4 12.6613 17.4 12.9C17.4 13.1387 17.3052 13.3676 17.1364 13.5364C16.9676 13.7052 16.7387 13.8 16.5 13.8H7.5C7.26131 13.8 7.03239 13.7052 6.8636 13.5364C6.69482 13.3676 6.6 13.1387 6.6 12.9C6.6 12.6613 6.69482 12.4324 6.8636 12.2636C7.03239 12.0948 7.26131 12 7.5 12Z"
        fill="#1F2A37"
      />
    </svg>
  );
};
