import React from "react";

const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 15l7-7 7 7"
    />
  </svg>
);

const DashboardCard = ({
  title,
  value,
  detail,
  borderColor,
  showArrow = false,
}) => {
  return (
    <div
      className={`
        bg-white p-6 rounded-lg shadow-md border-l-4 ${borderColor}
        transition-transform duration-800 ease-in-out 
        hover:scale-105 hover:shadow-xl cursor-pointer
      `}
    >
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <div className="text-sm mt-1 flex items-center">
        {showArrow ? (
          <div className="text-green-500 flex items-center">
            <ArrowUpIcon />
            {detail}
          </div>
        ) : (
          <p className="text-gray-500">{detail}</p>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
