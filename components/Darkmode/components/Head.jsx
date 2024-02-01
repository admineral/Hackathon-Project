import React from 'react';

import Head from 'next/head'; // Import the Head component from next/head

function CustomHead() {
  return (
    <Head>
      <title>Kronews</title>
      <meta charSet="utf-8" />
      <link rel="icon" href="/static/favicon.png" />
      <link rel="stylesheet" href="../../../styles/Darkmode.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Kronews" />
      <meta name="twitter:card" content="summary_image" />
      <meta name="twitter:site" content="@Kronews" />
      <meta name="twitter:creator" content="@Kronews" />
      <meta name="twitter:title" content="Kronews" />
      <meta name="twitter:description" content="Social-MEDIA" />
      <meta name="twitter:image" content="/static/og/card.png" />
      <meta name="twitter:image:alt" content="Kroniversum" />
    </Head>
  );
}

export default CustomHead;


