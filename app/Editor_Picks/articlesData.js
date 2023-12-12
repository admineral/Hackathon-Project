function summarize(text, limit = 100) {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    } else {
      return text;
    }
}
export const articles = [
    {
        id: 1,
        title: 'KOMMT NEUE US-HILFE?',
        description: summarize('US-Präsident Joe Biden hat den ukrainischen Präsidenten Wolodymyr Selenskyj für kommenden Dienstag zu einem Besuch ins Weiße Haus eingeladen. Biden wolle damit das unerschütterliche Engagement der USA für die Unterstützung der Ukraine unterstreichen, teilte das Weiße Haus mit. Weitere Militärhilfe wird derzeit aber vom Kongress blockiert.', 100),
        author: 'Krone.at',
        date: '10.12.2023 21:43',
        comments: 8,
        likes: 42,
        image: '/Bild1.png' // Replace with your image path
      },
      {
        id: 2,
        title: 'PLANT „SCHOCKTHERAPIE“',
        description: summarize('Inmitten einer schweren Wirtschaftskrise ist der ultraliberale Ökonom Javier Milei am Sonntag vor dem Parlament in Buenos Aires als argentinischer Präsident vereidigt worden. In seiner Antrittsrede stimmte der 53-Jährige die Bevölkerung auf eine wirtschaftliche Rosskur ein. Es gebe keine Alternative zu einer finanzpolitischen Schocktherapie, so Milei.', 100),
        author: 'Krone.at',
        date: '10.12.2023 19:21',
        comments: 4,
        likes: 23,
        image: '/Bild2.png' // Replace with your image path
      },
      {
          id: 3,
          title: 'FORUM',
          description: summarize('Korruption, der Missbrauch von Macht zum privaten Nutzen oder Vorteil, ist ein globales Phänomen. Österreich ist da leider keine Ausnahme. Am 9. Dezember wird daher der Welt-Antikorruptionstag begangen. Dabei geht es darum, das Bewusstsein für Korruption zu schärfen und Maßnahmen zu ergreifen, um sie zu bekämpfen. Schon Anfang dieses Jahres stand Österreich im Korruptionsindex nicht mehr so gut da.', 100),
          author: 'Christoph Matznetter',
          date: '09.12.2023 08:00',
          comments: 20,
          likes: 75,
          image: '/Bild5.png' // Replace with your image path
        },
        {
          id: 4,
          title: 'KRONE-GASTKOMMENTAR',
          description: summarize('Österreich zählt zu Europas Spitzenreitern, was Lebensqualität und Einkommen betrifft. Leider spielen wir auch bei der Geldentwertung in einer eigenen Liga. Im November haben wir 5,4 Prozent an Kaufkraft verloren, während sich das restliche Europa stabilisiert. Deutschland kam auf 3,2 Prozent Inflation, der Euro-Raum kratzt mit 2,4 Prozent bereits an der angepeilten Zielmarke von maximal 2 Prozent. Wo also liegt das Problem unserer Wohlstandsnation?', 100),
          author: 'Christian Baha',
          date: '10.12.2023 11:00',
          comments: 38,
          likes: 112,
          image: '/Bild6.png' // Replace with your image path
        },
];