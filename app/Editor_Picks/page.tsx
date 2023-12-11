/* eslint-disable react/no-unescaped-entities */
"use client"

    import Head from 'next/head';
    import Image from "next/image";
    import { FaComment, FaHeart } from 'react-icons/fa';
    import { articles } from './articlesData';
 
    



    
export default function EditorPicks() {
  return (
    <div className="w-full mx-auto"> {/* Add this line */}
      <Head>
        <title>Editor's Picks</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
      </Head>
      <div className="text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold my-4">
            Editor's Picks &gt;
          </h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {articles.map((article, index) => (
              <div key={article.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-80 rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white border border-gray-500 mx-2 my-2">
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
                  <div className="flex items-center mt-2">
                    <button className="text-gray-400 mr-2">
                      <FaComment /> {article.comments}
                    </button>
                    <button className="text-gray-400">
                      <FaHeart/> {article.likes}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div> 
  );
}