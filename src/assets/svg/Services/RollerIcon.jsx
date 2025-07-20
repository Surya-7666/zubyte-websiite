import * as React from "react";

function MarketingIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 64 64"
      {...props}
    >
      <g fill="none" stroke="#0b093b" strokeWidth={2}>
        <rect x="8" y="8" width="48" height="48" rx="6" fill="#ffd700" />
        <path
          d="M20 26h24M20 32h24M20 38h12"
          stroke="#0b093b"
          strokeLinecap="round"
        />
        <circle cx="48" cy="38" r="4" fill="#4cd5c5" />
        <path d="M52 38h4v8h-4" stroke="#0b093b" />
      </g>
    </svg>
  );
}

export default MarketingIcon;
