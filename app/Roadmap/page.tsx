"use client"
import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown, FaHotjar,FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { LuUserCircle2 } from "react-icons/lu";
import { roadmapItemsData } from './roadmapData';
import { PiUsersThreeBold } from "react-icons/pi";

interface Item {
    id: number;
    title: string;
    description: string;
    status: string[];
    votes: number;
    comments?: Comment[];
}

interface Comment {
    id: number;
    author: string;
    text: string;
}

// RoadmapItem component
const RoadmapItem = ({ item }: { item: Item }) => {
    const [votes, setVotes] = useState(item.votes);

    const handleVote = (increment: number) => {
      setVotes(votes + increment);
      // TODO: Add your backend call here
    };

    const statusColorClasses: { [key: string]: string } = {
        'Community': 'bg-purple-500', // 'Community' status with purple color
        'Ausland': 'bg-green-500', // 'Ausland' status with green color
        'Krone': 'bg-red-500', // 'Krone' status with red color
        // Add other status colors here
    };

    const [showComments, setShowComments] = useState(false);
    const Comments = ({ item }: { item: Item }) => {
      return (
        <div className="mt-4 bg-gray-800 p-4 rounded-lg w-full overflow-y-auto max-h-[22rem]">
          {item.comments && item.comments.map((comment, index) => (
            <div key={comment.id} className={`${index !== 0 ? 'my-2' : ''} flex items-center bg-gray-900 rounded-lg`}>
              <div className="flex-grow p-4 flex items-center">
                <LuUserCircle2 className="text-gray-300 mr-8" size="40px" />
                <div>
                  <p className="text-gray-300 font-semibold">{comment.author}</p>
                  <p className="text-gray-400">{comment.text}</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <FaArrowUp className="text-gray-400 hover:text-gray-200 cursor-pointer" />
                <span className="text-gray-400 text-sm">12</span>
                <FaArrowDown className="text-gray-400 hover:text-gray-200 cursor-pointer" />
              </div>
              <div className="flex items-center text-gray-500 text-sm p-2">
                <span>Reply</span>
              </div>
            </div>
          ))}
        </div>
      );
    };

    return (
      <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-between md:w-3/4 md:h-auto mx-auto">
        <div className="flex-grow w-full">
          <div className="flex justify-between items-center">
            <div className="flex-grow">
            {item.status.map((status) => (
              <span key={status} className={`${statusColorClasses[status]} text-xs text-white font-semibold px-2 py-1 rounded mr-2`}>
                  {status === 'Community' && <><PiUsersThreeBold className="inline-block mr-1" size="1em"/>{status}</>}
                  {status === 'Hot' ? <FaHotjar className="inline-block ml-1" color="red" size="1.5em"/> : status !== 'Community' && status}
              </span>
              ))}
              <h2 className="text-white text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
            <div className="flex flex-col items-center">
              <button
                className="text-gray-400 hover:text-gray-200"
                onClick={() => handleVote(1)}
              >
                <FaChevronUp size={24} />
              </button>
              <span className="text-gray-400 text-sm my-1">{votes >= 0 ? `+${votes}` : votes}</span>
              <button
                className="text-gray-400 hover:text-gray-200"
                onClick={() => handleVote(-1)}
              >
                <FaChevronDown size={24} />
              </button>
            </div>
          </div>
        </div>
        {showComments ? (
          <IoIosArrowUp className="mt-4" color="white" size="2em" onClick={() => setShowComments(!showComments)} />
        ) : (
          <IoIosArrowDown className="mt-4" color="white" size="2em" onClick={() => setShowComments(!showComments)} />
        )}
        {showComments && <Comments item={item} />}
      </div>
    );
    };

// Parent component that renders a list of RoadmapItem components
const RoadmapList = () => {
    return (
      <div className="container mx-auto px-4 py-8 space-y-4">
        {roadmapItemsData.map((item) => (
          <RoadmapItem key={item.id} item={item} />
        ))}
      </div>
    );
  };

export default RoadmapList;