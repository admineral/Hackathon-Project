import React from 'react';

const authors = [
    { name: 'EXCAVO', score: 92044, followers: 392074, image: 'https://placehold.co/50x50', premium: true },
    { name: 'tntsunrise', score: 86454, followers: 335143, image: 'https://placehold.co/50x50', premium: true },
    { name: 'DLavrov', score: 79894, followers: 323685, image: 'https://placehold.co/50x50', premium: true },
    { name: 'alanmasters', score: 84502, followers: 276624, image: 'https://placehold.co/50x50', premium: true },
    { name: 'MagicPoopCannon', score: 72348, followers: 244949, image: 'https://placehold.co/50x50', premium: true },
    { name: 'TomHall', score: 38443, followers: 238606, image: 'https://placehold.co/50x50', premium: true },
];

function App() {
    return (
        <div className="bg-gray-800 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Krone insights</h2>
            <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Top authors</h3>
                <div className="text-blue-400 mb-4">
                    <span className="mr-2">Today</span>
                    <span className="mr-2">Week</span>
                    <span className="mr-2">Month</span>
                    <span className="font-semibold">All time</span>
                </div>
                {authors.map((author, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-700 p-3 mb-2 rounded-lg">
                        <div className="flex items-center">
                            <img src={author.image} alt={`Profile picture of ${author.name}`} className="rounded-full w-10 h-10 mr-3" />
                            <div>
                                <div className="font-semibold">{author.name} {author.premium && <span className="bg-yellow-400 text-gray-900 text-xs px-0.5 py-0 rounded-full ml-2">PREMIUM</span>}</div>
                                <div className="text-gray-400 text-sm">
                                    <i className="fas fa-user mr-1"></i> {author.score.toLocaleString()} <i className="fas fa-users ml-3 mr-1"></i> {author.followers.toLocaleString()}
                                </div>
                            </div>
                        </div>
                        <button className="text-blue-400 border border-blue-400 rounded-lg px-4 py-1 hover:bg-blue-400 hover:text-white transition-colors duration-200">Follow</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;