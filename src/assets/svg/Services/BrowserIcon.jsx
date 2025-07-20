import * as React from "react";

function CodeEditorIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 64 64" {...props}>
      <g fill="none" stroke="#0b093b" strokeWidth={2}>
        <rect x="6" y="10" width="52" height="44" rx="4" fill="#7620ff" />
        <path d="M6 18h52" stroke="#fff" />
        <circle cx="14" cy="14" r="2" fill="#ff5ca8" />
        <circle cx="20" cy="14" r="2" fill="#ffe066" />
        <circle cx="26" cy="14" r="2" fill="#4cd5c5" />
        <path d="M20 30l-6 6 6 6" stroke="#fff" />
        <path d="M44 30l6 6-6 6" stroke="#fff" />
      </g>
    </svg>
  );
}

export default CodeEditorIcon;
