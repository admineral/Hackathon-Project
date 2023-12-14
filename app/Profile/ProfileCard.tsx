// app/Profile/ProfileCard.tsx
import React from 'react';
import { IoRocketOutline } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";

interface ProfileCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  comments: number;
  likes: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, description, author, date, comments, likes }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-80 rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white border border-gray-500 mx-2 my-2">
      <div className="p-4">
        <h2 className="text-yellow-500 mt-2">{title}</h2>
        <p className="text-gray-400 text-sm mt-4">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-400 text-xs">{author}</p>
          <p className="text-gray-400 text-xs">{date}</p>
        </div>
        <div className="flex justify-between mt-4">
          <button className="text-gray-400 flex items-center">
            <BiCommentDetail />
            <span className="ml-2">{comments}</span>
          </button>
          <button className="text-gray-400 flex items-center">
            <IoRocketOutline/>
            <span className="ml-2">{likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;