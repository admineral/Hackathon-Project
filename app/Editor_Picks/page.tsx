/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from 'react';
import Head from 'next/head';
import Image from "next/image";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { articles } from './articlesData';
import { BiCommentDetail } from "react-icons/bi";

type RocketState = {
  [key: string]: {
    isClicked: boolean;
    likes: number;
  };
};

export default function EditorPicks() {
  const [rocketStates, setRocketStates] = useState<RocketState>(
    articles.reduce(
      (acc, article) => ({
        ...acc,
        [article.id.toString()]: { isClicked: false, likes: article.likes },
      }),
      {}
    )
  );

  const handleRocketClick = (id: string) => {
    setRocketStates({
      ...rocketStates,
      [id]: {
        isClicked: !rocketStates[id].isClicked,
        likes: rocketStates[id].likes + 1,
      },
    });
  };

  return (
    <div className="w-full mx-auto">
      <Head>
        <title>Editor's Picks</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
      </Head>
      <div className="text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold my-4 text-black">
            Editor's Picks &gt;
          </h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {articles.map((article, index) => {
              const isRocketClicked = rocketStates[article.id.toString()].isClicked;
              const likes = rocketStates[article.id.toString()].likes;
  
              return (
<motion.div 
  key={article.id} 
  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-80 rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white border border-gray-500 mx-2 my-2"
  style={{ height: 'auto' }}
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
                  <div className="relative">
                    <Image
                      alt="Article image"
                      className="rounded-t-lg"
                      src={article.image}
                      width={320}
                      height={180}
                      priority
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto"
                      }} />
                  </div>
                  <div className="p-4">
                    <h3 className="text-yellow-500 mt-2">{article.title}</h3>
                    <p className="text-gray-400 text-sm">{article.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-gray-400 text-xs">{article.author}</p>
                      <p className="text-gray-400 text-xs">{article.date}</p>
                    </div>
                    {!article.isAd && (
                      <div className="flex justify-between mt-4">
                        <button className="text-gray-400 flex items-center">
                          <BiCommentDetail />
                          <span className="ml-2">{article.comments}</span>
                        </button>
                        <motion.button 
                          className={`border border-gray-400 rounded-lg px-3 py-1 flex items-center ${isRocketClicked ? 'bg-blue-300 text-black' : 'text-gray-400'}`}
                          onClick={() => handleRocketClick(article.id.toString())}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div 
                            animate={isRocketClicked ? { x: [0, 15, -15, 0], y: [0, -15, 15, 0], opacity: [1, 0, 0, 1] } : {}}
                            transition={{ duration: 1, times: [0, 0.2, 0.8, 1], loop: Infinity }}
                          >
                            <IoRocketOutline/>
                          </motion.div>
                          <span className="ml-2">{likes}</span>
                        </motion.button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div> 
  );
}