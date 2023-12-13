"use client"

import React, { useEffect, useRef, useState } from 'react';
import { badges, authors_gesamt, authors_heute, authors_woche, authors_monat } from './data';
import Link from 'next/link';
//<Link href={String(author.link)} key={index}></Link>

function App() {
    const [selectedTime, setSelectedTime] = useState('Gesamt');
    const [displayedAuthors, setDisplayedAuthors] = useState(authors_gesamt);
    const [maxWidth, setMaxWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleTimeSelect = (option: string) => {
        setSelectedTime(option);
        switch (option) {
            case 'Heute':
                setDisplayedAuthors(authors_heute);
                break;
            case 'Woche':
                setDisplayedAuthors(authors_woche);
                break;
            case 'Monat':
                setDisplayedAuthors(authors_monat);
                break;
            default:
                setDisplayedAuthors(authors_gesamt);
        }
    };

    useEffect(() => {
        if (containerRef.current !== null) {
            setMaxWidth(containerRef.current.offsetWidth);
        }
    }, [selectedTime]);

    const timeOptions = ['Heute', 'Woche', 'Monat', 'Gesamt'];

    return (
        <div className="bg-gray-800 text-white p-2 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Krone insights</h2>
            <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Top Autoren</h3>
                <div className="text-blue-400 mb-4">
                    {timeOptions.map(option => (
                        <span
                            key={option}
                            className={`mr-2 cursor-pointer px-2 py-1 rounded ${selectedTime === option ? 'bg-blue-400 text-white border-transparent' : 'border border-blue-400 text-blue-400'} hover:bg-blue-400 hover:text-white hover:border-transparent`}
                            onClick={() => handleTimeSelect(option)}
                        >
                            {option}
                        </span>
                    ))}
                </div>
                <div ref={containerRef} style={{minWidth: `${maxWidth}px`}}>
                {displayedAuthors.map((author, index) => {
    const badge = badges.find(badge => badge.id === author.badgeId);
    return (
        <Link href="/Profile" key={index}>
            <div className="flex items-center justify-between bg-gray-700 p-4 mb-2 rounded-lg">
                <div className="flex items-center">
                    <img src={author.image} alt={`Profile picture of ${author.name}`} className="rounded-full w-10 h-10 mr-3" />
                    <div className="flex flex-col flex-grow">
                        <div className="flex items-center justify-between">
                            <div className="font-semibold truncate">{author.name}</div>
                            {badge && <span className={`font-sans ${badge.color} text-gray-900 text-xs px-1.5 py-0.5 rounded-full ml-1 mr-3 flex-shrink-0`}>{badge.name}</span>}
                        </div>
                        <div className="text-gray-400 text-sm truncate">
                            <i className="fas fa-user mr-1"></i> {author.score.toLocaleString()} <i className="fas fa-users ml-3 mr-1"></i> {author.followers.toLocaleString()}
                        </div>
                    </div>
                </div>
                <button onClick={(e) => e.stopPropagation()} className="text-blue-400 border border-blue-400 rounded-lg px-4 py-1 hover:bg-blue-400 hover:text-white transition-colors duration-200 flex-shrink-0">Follow</button>
            </div>
        </Link>
    );
})}
                </div>
            </div>
        </div>
    );
}

export default App;