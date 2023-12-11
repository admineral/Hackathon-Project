export const roadmapItemsData = [
    {
        id: 1,
        title: 'MIT 166 KM/H AUF A12: Polizei zog aggressiven Raser aus dem Verkehr',
        description: 'Am Sonntag entdeckte eine Zivilstreife einen Raser auf der Inntalautobahn, der mit 166 km/h unterwegs war. Der Fahrer, ein 39-jähriger Thailänder, wurde angehalten und sein Führerschein wurde sofort eingezogen.',
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
        description: 'US-Präsident Joe Biden hat den ukrainischen Präsidenten Wolodymyr Selenskyj für kommenden Dienstag zu einem Besuch ins Weiße Haus eingeladen. Biden wolle damit das unerschütterliche Engagement der USA für die Unterstützung der Ukraine unterstreichen, teilte das Weiße Haus mit. Weitere Militärhilfe wird derzeit aber vom Kongress blockiert.',
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
      // ... add more items as needed
  ];