// app/Reddit_Posts/page.tsx
"use client"
import React from 'react';
import Head from 'next/head';
import RoadmapList from '../../components/Roadmap/RoadmapList_Component';

export default function RedditPostsPage() {
  return (
    <div>
      <Head>
        <title>Reddit Posts</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
      </Head>
      <RoadmapList />
    </div>
  );
}