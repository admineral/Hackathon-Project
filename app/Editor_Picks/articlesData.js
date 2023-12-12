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
        title: 'TEAMWORK BRINGT‘S',
        description: summarize('Hackathon macht die „Krone“ fit für die Zukunft. Spannender zweiter Tag beim „Hackathon - The Crown“. Für die einzelnen Teams bestehend aus Jugendlichen und Young Professionals aus verschiedenen Fachdisziplinen hieß es am Dienstag, ihre Ideen und Projekte zu gestalten, um damit die „Krone“ und vielleicht die Medienwelt der Zukunft revolutionieren zu können.', 100),
        author: 'Österreich',
        date: '12.12.2023 16:12',
        comments: 0,
        likes: 0,
        image: '/Bild30.png'
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
        id: 12,
        title: 'OBWOHL VERBRAUCH SINKT',
        description: summarize('Wie die „Krone“ berichtet hat, bezog Österreich im Oktober erstmals 90 Prozent des importierten Erdgases aus Reich von Wladimir Putin. Ein Rekordwert, seit E-Control die Daten erhebt. Das Klimaschutzministerium begründet diese Entwicklung mit dem niedrigeren Konsum.', 100),
        author: 'Österreich',
        date: '11.12.2023 20:00',
        comments: 78,
        likes: 187,
        image: '/Bild15.png' 
    },
    {
      id: 13,
      title: 'NÄCHSTER NACKENSCHLAG',
      description: summarize('Kaum hat man beim FC Bayern die böse 1:5-Schlappe gegen Eintracht Frankfurt am Wochenende verdaut, gibt’s mit einem angedrohten Fan-Ausschluss den nächsten argen Nackenschlag für die Münchner! Wegen des Einsatzes verbotener Pyrotechnik sowie des Werfens von Gegenständen aus dem Bayern-Fan-Block im Auswärtsspiel beim FC Kopenhagen setzte es für die Bayern eine Geldstrafe in Höhe von 40.000 Euro.', 100),
      author: 'Fußball International',
      date: '11.12.2023 18:31',
      comments: 187,
      likes: 255,
      image: '/Bild16.png' 
  },
  {
    id: 14,
    title: 'Die häufigsten Fehler beim Fahren mit Automatikgetriebe',
    description: 'Anzeige',
    author: 'FREENET.DE',
    date: '',
    comments: 0,
    likes: 0,
    image: '/Bild17.png',
    isAd: true
},
{
  id: 15,
  title: 'ÖVP ÜBER GRÜNE EMPÖRT',
  description: summarize('Aktivistin beschützt? Krach nach „Zadic-Weisung“. Eine Weisung des Justizministeriums zur Haftfrage im Ermittlungsverfahren gegen die deutsche Klimaaktivistin Anja Windl sorgt für koalitionäre Verstimmung. ÖVP-Generalsekretär Christian Stocker verlangt von der grünen Justizministerin Alma Zadić Aufklärung.', 100),
  author: 'Politik',
  date: '12.12.2023 16:28',
  comments: 0,
  likes: 0,
  image: '/Bild18.png'
},
{
  id: 16,
  title: 'SPIELTE MIT ŠIMIĆ',
  description: summarize('Mysteriös! Kroaten-Fußballer stirbt mit 34 Jahren. Eine Sportler-Tragödie erschüttert den Fußball in Kroatien: Plötzlich und unerwartet ist ausgerechnet wenige Tage vor Weihnachten der langjährige Erstliga-Kicker Ivan Čeliković verstorben! Der in der Saison 2020/21 beim NK Lokomotiva Zagreb mit dem jetzigen Salzburger Roko Šimić als Teamkamerad aufgelaufene Defensiv-Spezialist wurde nur 34 Jahre alt. Zur Todesursache wurden keine Angaben gemacht …', 100),
  author: 'Fußball International',
  date: '12.12.2023 17:42',
  comments: 0,
  likes: 0,
  image: '/Bild19.png'
},
{
  id: 17,
  title: 'RUMOREN IM BENKO-REICH',
  description: summarize('„Fragwürdige Geschäfte“ Grund für Signa-Abgang? Die Signa kommt nicht zur Ruhe: Offenkundig wurden die Ungereimtheiten innerhalb des Imperiums von Immobilienjongleur René Benko Montagabend, als der Konzern die fristlose Entlassung von Top-Manager Timo Herzberg bekannt gab. Hintergrund dürften fragwürdige Geschäfte sein.', 100),
  author: 'Wirtschaft',
  date: '12.12.2023 16:18',
  comments: 0,
  likes: 0,
  image: '/Bild20.png'
},
{
  id: 18,
  title: 'KLEINKIND ALS HELD',
  description: summarize('Vierjähriger bemerkte Brand und alarmierte Vater. Ein Vierjähriger machte auf einen Wohnungsbrand in St. Martin/T. (Pongau) in Salzburg aufmerksam, wodurch die Einsatzkräfte rasch alarmiert werden konnten.', 100),
  author: 'Salzburg',
  date: '12.12.2023 16:29',
  comments: 0,
  likes: 0,
  image: '/Bild21.png'
  },
  {
    id: 19,
    title: 'TRAGISCHER TODESFALL',
    description: summarize('Vater brach beim Schaufeln von Schnee tot zusammen. Ein Familienvater wollte vermutlich die Solarpaneele vom Schnee befreien - ein Vorhaben, dass ihm zum tödlichen Verhängnis wurde. Beim Abschaufeln der Photovoltaikanlage auf einem Dach seines Bauernhofs soll ein Familienvater in Herzogsdorf verstorben sein - allerdings nicht durch einen Absturz.', 100),
    author: 'Oberösterreich',
    date: '07.12.2023 06:00',
    comments: 0,
    likes: 0,
    image: '/Bild22.png'
  },
  {
    id: 20,
    title: 'KLIRRENDE KÄLTE',
    description: summarize('Nach Schneewalze kommt die Eispeitsche: -16 Grad! Nach dem Schneechaos am Samstag hat sich die Lage zwar beruhigt. Neuschnee blieb am Sonntag aus, dafür legt sich laut Meteorologen im Laufe der Abend- und Nachtstunden klirrende Kälte mit bis zu minus 16 Grad über das Land.', 100),
    author: 'Wien',
    date: '03.12.2023 16:40',
    comments: 0,
    likes: 0,
    image: '/Bild23.png'
  },
  {
    id: 21,
    title: 'FORGE OF EMPIRES',
    description: 'Wenn du Strategiespiele liebst, ist dieses Spiel ein Muss',
    author: 'Ad',
    date: '',
    comments: 0,
    likes: 0,
    image: '/Bild24.png',
    isAd: true
  },
  {
    id: 22,
    title: 'SCHIN-BET-VERHÖR',
    description: summarize('„Verrückte“: Ex-Minister rechnet nun mit Hamas ab. Der ehemalige Kommunikationsminister der Hamas hat in einem Verhör beim israelischen Inlandsgeheimdienst den jetzigen Terror-Chef Yahya al-Sinwar scharf kritisiert. Die Führung der Hamas sei eine Gruppe von „Verrückten“.', 100),
    author: 'Ausland',
    date: '12.12.2023 19:25',
    comments: 0,
    likes: 0,
    image: '/Bild25.png'
  },
  {
    id: 23,
    title: 'DROHUNG AN LETTLAND',
    description: summarize('Putin reitet mit Tirade gegen NATO-Land aus. Gerade vor dem Hintergrund des Überfalls auf die Ukraine lässt Russlands Präsident Wladimir Putin derzeit mit bemerkenswert bedrohlichen Aussagen aufhorchen. Sein Ziel diesmal: Lettland. Der Baltenstaat behandle seine russische Minderheit „schweinisch“, so der Kreml-Chef - und sprach zugleich eine Drohung aus.', 100),
    author: 'Ausland',
    date: '05.12.2023 06:41',
    comments: 0,
    likes: 0,
    image: '/Bild26.png'
  },
  {
    id: 24,
    title: 'PV-FIRMA INSOLVENT',
    description: summarize('Großpleite vor Weihnachten: 94 Jobs in Gefahr! Schon vor zwei Jahren ist der Kärntner Photovoltaik-Spezialist Energetica in die Pleite geschlittert. Kaum durch prominente Großinvestoren wie Raiffeisen gerettet, musste nun neuerlich Konkurs angemeldet werden - mit insgesamt 40 Millionen Euro! 94 Dienstnehmer bangen um ihre Jobs - und das vor Weihnachten.', 100),
    author: 'Kärnten',
    date: '07.12.2023 16:01',
    comments: 0,
    likes: 0,
    image: '/Bild27.png'
  },
  {
    id: 25,
    title: 'SALZBURGER MEDIZINER',
    description: summarize('Covid: „Die Leute sollten weniger Angst haben“. In gewissen Fällen hilft ein Medikament schon mit einer Infusion. Das fanden Mediziner in Salzburg heraus. Ein Arzt will die Angst vor Corona senken.', 100),
    author: 'Salzburg',
    date: '06.12.2023 09:00',
    comments: 0,
    likes: 0,
    image: '/Bild28.png'
  },
  {
    id: 26,
    title: '„SEHR GUTER AUFTRITT“',
    description: summarize('Neue Beweise, dass Schmid log? Kurz-Team blitzt ab. Thomas Schmid hat am Montag vor Gericht gegen Sebastian Kurz ausgesagt. Acht Stunden lang dauerte die Befragung. Die Verteidigung von Kurz versuchte, die Glaubwürdigkeit des Zeugen zu untergraben und wollte dazu neue Beweismittel vorlegen. Der Richter schmetterte aber all diese Versuche ab.', 100),
    author: 'Politik',
    date: '11.12.2023 19:17',
    comments: 0,
    likes: 0,
    image: '/Bild29.png'
    },
    {
      id: 27,
      title: 'PLANT „SCHOCKTHERAPIE“',
      description: summarize('Inmitten einer schweren Wirtschaftskrise ist der ultraliberale Ökonom Javier Milei am Sonntag vor dem Parlament in Buenos Aires als argentinischer Präsident vereidigt worden. In seiner Antrittsrede stimmte der 53-Jährige die Bevölkerung auf eine wirtschaftliche Rosskur ein. Es gebe keine Alternative zu einer finanzpolitischen Schocktherapie, so Milei.', 100),
      author: 'Krone.at',
      date: '10.12.2023 19:21',
      comments: 4,
      likes: 23,
      image: '/Bild2.png' 
    },
    {
      id: 28,
      title: '„KRONE“-ADVENTKALENDER',
      description: summarize('Die Gewinner vom 01.12.2023. Verlost wurden 4 x 1 Samsung Galaxy Z Flip5 Smartphone. Das Galaxy Z Flip5 flext mit Vielfalt: Einfach falten und in die Hosentasche stecken. Freihändige Selfies. Aufnahmen ohne Stativ. Wie einen Laptop abstellen und freihändig die coolsten Bilder und Aufnahmen damit machen.', 100),
      author: 'Nachrichten',
      date: '07.12.2023 07:44',
      comments: 0,
      likes: 0,
      image: '/Bild31.png'
      },
      {
        id: 29,
        title: 'BEEINDRUCKENDES VIDEO',
        description: summarize('Gewaltige Sprengung mitten im Rottauer Stausee. Die Bilder von der Sprengung mitten im Rottauer Stausee sind äußerst beeindruckend. Die „Krone“ sprach mit Sprengmeister Franz Schuster über die Explosion und die damit verbundenen Gefahren.', 100),
        author: 'Kärnten',
        date: '08.12.2023 08:01',
        comments: 0,
        likes: 0,
        image: '/Bild32.png'
        },
        {
          id: 30,
          title: 'RAID',
          description: 'Spiele das beste RPG Abenteuer 2024 jetzt gratis!',
          author: 'Anzeige',
          date: '',
          comments: 0,
          likes: 0,
          image: '/Bild33.png',
          isAd: true
          },
          {
            id: 31,
            title: '20 SEKUNDEN FALL',
            description: summarize('Bungee-Sprung aus 233 Metern Höhe: Mann tot. Trauer und Bestürzung herrschen derzeit in China. Dort ist nach einem Bungee-Sprung von einer der weltweit höchsten dafür vorgesehenen Plattformen ein Tourist verstorben.', 100),
            author: 'Ausland',
            date: '04.12.2023 15:44',
            comments: 0,
            likes: 0,
            image: '/Bild34.png'
            },
            {
              id: 32,
              title: 'VON AUTO GERAMMT',
              description: summarize('Todesdrama! Ski-WM-Bronzener stirbt mit 35 Jahren. Schockwellen der Bestürzung und der Trauer erfüllen die Welt der Freestyle-Skifahrer: Maxim Gustik ist im Alter von gerade einmal 35 Jahren gestorben! Der Weißrusse kam bei einem tragischen Unfall in seiner Heimatstadt Minsk ums Leben, er wurde von einem Auto erfasst und tödlich verletzt ...', 100),
              author: 'Wintersport',
              date: '11.12.2023 17:34',
              comments: 0,
              likes: 0,
              image: '/Bild35.png'
              },
              {
                id: 33,
                title: 'HACKER ÜBER KAMMER:',
                description: summarize('„Bei den Gehältern wird dir angst und bange“. Die Stadt Wien hat erst vorige Woche das 150 Millionen Euro schwere Personalpaket für die Mitarbeiter des Gesundheitsverbundes vorgestellt - der Ärztekammer ist das zu wenig, sie ruft zum Protestmarsch auf. Wir befragen den zuständigen Gesundheitsstadtrat: Peter Hacker (SPÖ) über den Ärzteprotest als Punschstand-Tour, die Skandale der Kammer und das Ende der Privatpraxen nebenbei.', 100),
                author: 'Wien',
                date: '29.11.2023 06:00',
                comments: 0,
                likes: 0,
                image: '/Bild37.png'
                },
                {
                  id: 34,
                  title: '„KEIN SCHERZPROBLEM“',
                  description: summarize('Van der Bellen rügt Klima-Zankereien der Regierung. Angesichts der Differenzen in der Regierung zum Klimaplan mahnt Bundespräsident Alexander Van der Bellen zu Tempo beim Klimaschutz. Den Regierungsstreit wolle der 79-Jährige aber nicht bewerten. Eines könne er aber mit Sicherheit sagen: Der Klimawandel sei kein „Scherzproblem“.', 100),
                  author: 'Politik',
                  date: '05.12.2023 15:07',
                  comments: 0,
                  likes: 0,
                  image: '/Bild38.png'
                  },
                  {
                    id: 35,
                    title: 'SCHNOPSN.COM',
                    description: 'Österreichs Kultspiel Schnapsen jetzt auch um echtes Geld!',
                    author: 'Anzeige',
                    date: '',
                    comments: 0,
                    likes: 0,
                    image: '/Bild39.png',
                    isAd: true
                    },
                    {
                      id: 36,
                      title: 'TIERE AN BORD',
                      description: summarize('Iran testete Raumkapsel für Astronauten. Der Iran hat am Mittwoch - laut eigenen Angaben erfolgreich - eine Raumkapsel zur künftigen Beförderung von Astronauten getestet. Wann die Islamische Republik mit der neuen Technologie Menschen ins Weltall befördern will, ist unklar.', 100),
                      author: 'Wissenschaft',
                      date: '07.12.2023 10:58',
                      comments: 0,
                      likes: 0,
                      image: '/Bild40.png'
                      }




];