export function summarize(text, limit = 100) {
  if (text.length > limit) {
    return text.substring(0, limit) + '...';
  } else {
    return text;
  }
}

export const roadmapItemsData = [
  {
    id: 1,
    title: 'Polizei zog aggressiven Raser aus dem Verkehr',
    description: summarize('Am Sonntag entdeckte eine Zivilstreife einen Raser auf der Inntalautobahn, der mit 166 km/h unterwegs war. Der Fahrer, ein 39-jähriger Thailänder, wurde angehalten und sein Führerschein wurde sofort eingezogen.', 80),
    votes: 257,
    status: ['Krone'], // Status set to 'Community'
    comments: [ // Add comments here
        {
            id: 1,
            text: 'Das ist viel zu schnell! Gut, dass die Polizei eingegriffen hat.',
            author: 'Anna'
        },
        {
            id: 2,
            text: 'Bei solchen Geschwindigkeiten ist ein Führerscheinentzug gerechtfertigt.',
            author: 'Tom'
        },
        {
            id: 3,
            text: 'Ich bin froh, dass niemand verletzt wurde.',
            author: 'Lisa'
        },
        {
            id: 4,
            text: 'Hoffentlich wird er seine Lektion lernen.',
            author: 'Markus'
        },
        {
            id: 5,
            text: 'Solche Fahrer sollten härter bestraft werden.',
            author: 'Julia'
        },
        // ... add more comments as needed
    ],
},
      {
        id: 2,
        title: 'Mehr Fahrradwege in Wien!',
        description: 'Hallo zusammen, ich finde, wir brauchen mehr Fahrradwege in unserer schönen Stadt. Es ist nicht nur umweltfreundlich, sondern auch gesund und macht Spaß. Was denkt ihr? Lasst uns diese Diskussion starten und vielleicht können wir gemeinsam etwas bewegen!',
        votes: 200,
        status: ['Community', 'Hot'], // Status set to 'Community' and 'Hot'
        comments: [
          {
            id: 1,
            text: 'Ich stimme zu! Mehr Fahrradwege wären großartig.',
            author: 'Peter'
          },
          {
            id: 2,
            text: 'Nicht sicher, ob das die beste Idee ist...',
            author: 'Sabine'
          },
          // ... add more comments as needed
        ],
      },
      {
        id: 3,
        title: 'Selenskyj zu Besuch im Weißen Haus ein',
        description: summarize('US-Präsident Joe Biden hat den ukrainischen Präsidenten Wolodymyr Selenskyj für kommenden Dienstag zu einem Besuch ins Weiße Haus eingeladen. Biden wolle damit das unerschütterliche Engagement der USA für die Unterstützung der Ukraine unterstreichen, teilte das Weiße Haus mit. Weitere Militärhilfe wird derzeit aber vom Kongress blockiert.', 80),
        votes: 150,
        status: ['Krone'], // Status set to 'Ausland'
        comments: [ // Add comments here
          {
            id: 1,
            text: 'Es ist wichtig, dass die USA ihre Unterstützung für die Ukraine zeigen.',
            author: 'Michael'
          },
          {
            id: 2,
            text: 'Ich hoffe, dass der Kongress die Blockade der Militärhilfe aufhebt.',
            author: 'Julia'
          },
          // ... add more comments as needed
        ],
      },
      {
        id: 4,
        title: 'Erneuerbare Energien: Die Zukunft unserer Energieversorgung?',
        description: 'Erneuerbare Energien sind in aller Munde. Sie gelten als sauber, nachhaltig und zukunftssicher. Doch wie sieht es wirklich aus? Sind erneuerbare Energien tatsächlich die Lösung für unsere Energieprobleme? Und welche Herausforderungen gibt es auf dem Weg zu einer vollständig erneuerbaren Energieversorgung? Diskutieren Sie mit uns!',
        votes: 180,
        status: ['Community'], // Status set to 'Community'
        comments: [ // Add comments here
          {
            id: 1,
            text: 'Ich denke, erneuerbare Energien sind definitiv der Weg in die Zukunft.',
            author: 'Laura'
          },
          {
            id: 2,
            text: 'Es gibt noch viele Herausforderungen, aber wir müssen jetzt handeln.',
            author: 'Max'
          },
          // ... add more comments as needed
        ],
      },
      {
        id: 5,
        title: 'Digitalisierung in der Bildung: Chancen und Herausforderungen',
        description: 'Die Digitalisierung hat das Potenzial, unsere Bildungssysteme grundlegend zu verändern. Sie bietet neue Möglichkeiten für individuelles Lernen und kann den Zugang zu Bildungsressourcen erweitern. Gleichzeitig stellt sie uns vor Herausforderungen in Bezug auf Datenschutz, digitale Kompetenzen und die digitale Kluft. Was sind Ihre Gedanken dazu?',
        votes: 220,
        status: ['Community'], // Status set to 'Community'
        comments: [ // Add comments here
          {
            id: 1,
            text: 'Ich denke, die Digitalisierung bietet großartige Möglichkeiten für das Bildungssystem.',
            author: 'Sophie'
          },
          {
            id: 2,
            text: 'Wir müssen sicherstellen, dass alle Schüler Zugang zu digitalen Ressourcen haben.',
            author: 'Max'
          },
          {
            id: 3,
            text: 'Datenschutz ist ein großes Anliegen, insbesondere wenn es um Kinder geht.',
            author: 'Anna'
          },
          {
            id: 4,
            text: 'Lehrer müssen in digitalen Kompetenzen geschult werden, um effektiv unterrichten zu können.',
            author: 'Markus'
          },
          {
            id: 5,
            text: 'Wir müssen auch die digitale Kluft überwinden, die in weniger wohlhabenden Gebieten besteht.',
            author: 'Julia'
          },
          // ... add more comments as needed
        ],
      },
      // ... add more items as needed
  ];