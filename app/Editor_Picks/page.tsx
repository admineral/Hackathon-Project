/* eslint-disable react/no-unescaped-entities */
"use client"

    import Head from 'next/head';
    import Image from "next/image";
    import { FaComment, FaHeart } from 'react-icons/fa';
 
    

const articles = [
    {
      id: 1,
      title: 'KOMMT NEUE US-HILFE?',
      description: summarize('US-Präsident Joe Biden hat den ukrainischen Präsidenten Wolodymyr Selenskyj für kommenden Dienstag zu einem Besuch ins Weiße Haus eingeladen. Biden wolle damit das unerschütterliche Engagement der USA für die Unterstützung der Ukraine unterstreichen, teilte das Weiße Haus mit. Weitere Militärhilfe wird derzeit aber vom Kongress blockiert.', 100),
      author: 'Krone.at',
      date: '10.12.2023 21:43',
      comments: 2,
      likes: 20,
      image: '/Bild1.png' // Replace with your image path
    },
    {
      id: 2,
      title: 'PLANT „SCHOCKTHERAPIE“',
      description: summarize('Inmitten einer schweren Wirtschaftskrise ist der ultraliberale Ökonom Javier Milei am Sonntag vor dem Parlament in Buenos Aires als argentinischer Präsident vereidigt worden. In seiner Antrittsrede stimmte der 53-Jährige die Bevölkerung auf eine wirtschaftliche Rosskur ein. Es gebe keine Alternative zu einer finanzpolitischen Schocktherapie, so Milei.', 100),
      author: 'Krone.at',
      date: '10.12.2023 19:21',
      comments: 2,
      likes: 20,
      image: '/Bild2.png' // Replace with your image path
    },
    {
        id: 3,
        title: 'FORUM',
        description: summarize('Korruption, der Missbrauch von Macht zum privaten Nutzen oder Vorteil, ist ein globales Phänomen. Österreich ist da leider keine Ausnahme. Am 9. Dezember wird daher der Welt-Antikorruptionstag begangen. Dabei geht es darum, das Bewusstsein für Korruption zu schärfen und Maßnahmen zu ergreifen, um sie zu bekämpfen. Schon Anfang dieses Jahres stand Österreich im Korruptionsindex nicht mehr so gut da.', 100),
        author: 'Christoph Matznetter',
        date: '09.12.2023 08:00',
        comments: 2,
        likes: 20,
        image: '/Bild5.png' // Replace with your image path
      },
      {
        id: 4,
        title: 'KRONE-GASTKOMMENTAR',
        description: summarize('Österreich zählt zu Europas Spitzenreitern, was Lebensqualität und Einkommen betrifft. Leider spielen wir auch bei der Geldentwertung in einer eigenen Liga. Im November haben wir 5,4 Prozent an Kaufkraft verloren, während sich das restliche Europa stabilisiert. Deutschland kam auf 3,2 Prozent Inflation, der Euro-Raum kratzt mit 2,4 Prozent bereits an der angepeilten Zielmarke von maximal 2 Prozent. Wo also liegt das Problem unserer Wohlstandsnation?', 100),
        author: 'Christian Baha',
        date: '10.12.2023 11:00',
        comments: 2,
        likes: 20,
        image: '/Bild6.png' // Replace with your image path
      },
    // ... more articles
  ];
  function summarize(text: string, limit: number = 100) {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    } else {
      return text;
    }
}
    
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