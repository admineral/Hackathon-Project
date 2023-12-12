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
          title: 'GELUNGENER AUFTAKT',
          description: summarize('Am Montag ist der „Hackathon - The Crown“ gestartet. Hier arbeiten Jugendliche und Young Professionals aus verschiedenen Fachdisziplinen an den kommenden Tagen zusammen, um die „Krone“ und die Medienwelt der Zukunft zu gestalten. Im Square One Co-Working-Space im Norden von Wien sitzen von heute bis einschließlich Mittwoch mehrere Dutzend junge und talentierte Menschen zusammen, um Ideen für die Transformation der „Krone“ mitzugestalten.', 100),
          author: 'Krone',
          date: '11.12.2023 16:18',
          comments: 42,
          likes: 42,
          image: '/Bild8.png' 
        },
        {
          id: 2,
          title: 'Vermeide diese 6 Fehler beim Kekse Backen!',
          description: 'Anzeige',
          author: 'Ja-Natürlich',
          date: '',
          comments: 0,
          likes: 0,
          image: '/Bild11.png',
          isAd: true 
        },
    

      {
          id: 3,
          title: 'FORUM',
          description: summarize('Korruption, der Missbrauch von Macht zum privaten Nutzen oder Vorteil, ist ein globales Phänomen. Österreich ist da leider keine Ausnahme. Am 9. Dezember wird daher der Welt-Antikorruptionstag begangen. Dabei geht es darum, das Bewusstsein für Korruption zu schärfen und Maßnahmen zu ergreifen, um sie zu bekämpfen. Schon Anfang dieses Jahres stand Österreich im Korruptionsindex nicht mehr so gut da.', 100),
          author: 'Christoph Matznetter',
          date: '09.12.2023 08:00',
          comments: 20,
          likes: 75,
          image: '/Bild5.png' 
        },
        {
          id: 4,
          title: 'KRONE-GASTKOMMENTAR',
          description: summarize('Österreich zählt zu Europas Spitzenreitern, was Lebensqualität und Einkommen betrifft. Leider spielen wir auch bei der Geldentwertung in einer eigenen Liga. Im November haben wir 5,4 Prozent an Kaufkraft verloren, während sich das restliche Europa stabilisiert. Deutschland kam auf 3,2 Prozent Inflation, der Euro-Raum kratzt mit 2,4 Prozent bereits an der angepeilten Zielmarke von maximal 2 Prozent. Wo also liegt das Problem unserer Wohlstandsnation?', 100),
          author: 'Christian Baha',
          date: '10.12.2023 11:00',
          comments: 38,
          likes: 112,
          image: '/Bild6.png' 
        },
        {
          id: 5,
          title: 'Ja, diese Yacht gibt es wirklich und sie gehört dieser Berühmtheit',
          description: 'Anzeige',
          author: 'INVESTING.COM',
          date: '',
          comments: 0,
          likes: 0,
          image: '/Bild10.png',
          isAd: true
      },

        {
          id: 6,
          title: 'MARODER BENKO-KONZERN',
          description: summarize('Im Firmengeflecht von Immobilienjongleur René Benko bleibt kein Stein auf dem anderen. Am Montag wurde Timo Herzberg als CEO der Signa Prime Selection AG und der Signa Development Selection AG „fristlos gekündigt“. Sanierer Erhard Grossnig wird Sprecher des Vorstandes in beiden Immobiliengesellschaften.', 100),
          author: 'Wirtschaft',
          date: '11.12.2023 21:28',
          comments: 99,
          likes: 114,
          image: '/Bild9.png' 
      },
        {
          id: 7,
          title: 'KOMMT NEUE US-HILFE?',
          description: summarize('US-Präsident Joe Biden hat den ukrainischen Präsidenten Wolodymyr Selenskyj für kommenden Dienstag zu einem Besuch ins Weiße Haus eingeladen. Biden wolle damit das unerschütterliche Engagement der USA für die Unterstützung der Ukraine unterstreichen, teilte das Weiße Haus mit. Weitere Militärhilfe wird derzeit aber vom Kongress blockiert.', 100),
          author: 'Krone.at',
          date: '10.12.2023 21:43',
          comments: 8,
          likes: 42,
          image: '/Bild1.png' 
        },
        {
          id: 8,
          title: '4 Gründe für eine Wärmepumpe von STIEBEL ELTRON',
          description: 'Anzeige',
          author: 'STIEBEL ELTRON',
          date: '',
          comments: 0,
          likes: 0,
          image: '/Bild14.png',
          isAd: true
      },

        {
          id: 9,
          title: 'PLANT „SCHOCKTHERAPIE“',
          description: summarize('Inmitten einer schweren Wirtschaftskrise ist der ultraliberale Ökonom Javier Milei am Sonntag vor dem Parlament in Buenos Aires als argentinischer Präsident vereidigt worden. In seiner Antrittsrede stimmte der 53-Jährige die Bevölkerung auf eine wirtschaftliche Rosskur ein. Es gebe keine Alternative zu einer finanzpolitischen Schocktherapie, so Milei.', 100),
          author: 'Krone.at',
          date: '10.12.2023 19:21',
          comments: 4,
          likes: 23,
          image: '/Bild2.png' 
        },
        {
          id: 10,
          title: 'BEI LOTTERIEN GEMELDET',
          description: summarize('240 Millionen Euro hat ein Glückspilz aus Österreich am Freitag gewonnen. Erst am Sonntag hat er sich bei den Lotterien gemeldet: Er bittet um „Betreuung“. Er erfuhr wohl noch in der Nacht auf Samstag davon, dass er plötzlich Multimillionär ist.', 100),
          author: 'Österreich',
          date: '10.12.2023 17:59',
          comments: 14,
          likes: 48,
          image: '/Bild12.png' 
      },
        {
          id: 11,
          title: 'Der BMW i5 mit 2,99%* Fixzinssatz.',
          description: 'Anzeige',
          author: 'BMW AUSTRIA',
          date: '',
          comments: 0,
          likes: 0,
          image: '/Bild13.png',
          isAd: true
      },
      {
        id: 14,
        title: 'OBWOHL VERBRAUCH SINKT',
        description: summarize('Wie die „Krone“ berichtet hat, bezog Österreich im Oktober erstmals 90 Prozent des importierten Erdgases aus Reich von Wladimir Putin. Ein Rekordwert, seit E-Control die Daten erhebt. Das Klimaschutzministerium begründet diese Entwicklung mit dem niedrigeren Konsum.', 100),
        author: 'Österreich',
        date: '11.12.2023 20:00',
        comments: 0,
        likes: 0,
        image: '/Bild15.png' 
    },
    {
      id: 15,
      title: 'NÄCHSTER NACKENSCHLAG',
      description: summarize('Kaum hat man beim FC Bayern die böse 1:5-Schlappe gegen Eintracht Frankfurt am Wochenende verdaut, gibt’s mit einem angedrohten Fan-Ausschluss den nächsten argen Nackenschlag für die Münchner! Wegen des Einsatzes verbotener Pyrotechnik sowie des Werfens von Gegenständen aus dem Bayern-Fan-Block im Auswärtsspiel beim FC Kopenhagen setzte es für die Bayern eine Geldstrafe in Höhe von 40.000 Euro.', 100),
      author: 'Fußball International',
      date: '11.12.2023 18:31',
      comments: 0,
      likes: 0,
      image: '/Bild16.png' 
  },
  {
    id: 16,
    title: 'Die häufigsten Fehler beim Fahren mit Automatikgetriebe',
    description: 'Anzeige',
    author: 'FREENET.DE',
    date: '',
    comments: 0,
    likes: 0,
    image: '/public/Bild17.png',
    isAd: true
}




];