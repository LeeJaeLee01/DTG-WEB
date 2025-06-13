import React from 'react';

type Props = {
  rotate?: number;
};

export default function RightArrowIcon({ rotate = 0 }: Props) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transition: 'transform 0.3s',
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <path
        d="M8.25 5.5L13.75 11L8.25 16.5"
        stroke="#2F2B3D"
        strokeOpacity="0.9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
