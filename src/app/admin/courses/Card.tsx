import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  duration: string;
  status: string;
  visibility: string;
  enrollments: number;
  price: string;
  createdOn: string;
}

const Card: React.FC<CardProps> = ({
  title,
  duration,
  status,
  visibility,
  enrollments,
  price,
  createdOn,

}) => {
  return (
    <div
      data-aos="fade-up"
      className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl m-4 bg-white dark:bg-gray-800"
    >
     
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {duration}
        </p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
            {status}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {visibility}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {enrollments} Enrollments
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{createdOn}</p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-800 dark:text-gray-200 text-lg font-semibold">
            {price}
          </span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;