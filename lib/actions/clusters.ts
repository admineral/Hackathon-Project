/**
 * ****************************************************************************
 * *                              Clusters Actions                            *
 * ****************************************************************************
 * 
 * This file contains a collection of asynchronous functions designed to interact
 * with the Supabase backend, specifically for operations related to "clusters"
 * of articles. These clusters are groups of articles that are related or 
 * categorized together for recommendation purposes. The actions include 
 * fetching clusters by ID, updating user preferences (likes, dislikes, views, 
 * reads), and retrieving articles by cluster ID. Additionally, it implements a 
 * naive recommendation algorithm to suggest clusters to users based on their 
 * viewing history and preferences.
 * 
 * Key Functions:
 * - naiveRecAlgo: A naive recommendation algorithm that fetches clusters not 
 *   viewed by the user and sorts them by the number of articles.
 * - getClusterById: Fetches a single cluster by its ID.
 * - updateUserArrayColumn: Updates array columns (likes, dislikes, views, reads) 
 *   in the user's profile with a given cluster ID.
 * - getArticleById: Fetches a single article by its ID.
 * - getArticlesByClusterId: Fetches all articles belonging to a given cluster ID.
 * - likeCluster, dislikeCluster, viewCluster, readCluster: Wrapper functions 
 *   for updateUserArrayColumn to update specific user preferences.
 * - calculateBiasScores: A placeholder function for future implementation of 
 *   bias score calculation.
 * 
 * Implementation Details:
 * - Utilizes Supabase for backend operations, including authentication and 
 *   database queries.
 * - Employs async/await syntax for asynchronous operations.
 * - Uses JavaScript's Promise API for concurrent fetching of multiple items.
 * - Incorporates error handling to manage and log potential issues during 
 *   execution.
 * 
 * Usage:
 * These actions are intended to be imported and used in various parts of the 
 * frontend application where interaction with clusters and articles is required, 
 * such as in components for displaying articles, managing user preferences, and 
 * generating recommendations.
 * 
 * Dependencies:
 * - Supabase client from "@/utils/supabase/server" for backend communication.
 * - Next.js' headers and navigation utilities for managing cookies and redirects.
 * 
 * Author: CursorBot
 * ****************************************************************************
 */



"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

const cookieStore = cookies();
const supabase = createClient(cookieStore);


// Definieren Sie eine Schnittstelle, die die Struktur von `data` beschreibt.
interface ProfileData {
  likes?: string[];
  dislikes?: string[];
  views?: string[];
  reads?: string[];
  // Fügen Sie hier weitere Felder hinzu, falls notwendig.
}

export async function naiveRecAlgo(currentClusters: any[], n: number) {
  //const cluster_ids = ['3916e1de-38d4-4155-8a61-056e889b6d6c']
  //const clusters = await Promise.all(cluster_ids.map(id => getClusterById(id)))
  //return clusters;

  // Retrieve the user's id
  const { data: userdat, error: usererr } = await supabase.auth.getUser();
  if (usererr || !userdat?.user?.id) {
    console.error("User not found or error fetching user data", usererr);
    return [];
  }
  // Retrieve the user's viewed clusters
  const { data: userData, error: userError } = await supabase
    .from("profiles")
    .select("views")
    .eq("id", userdat?.user?.id)
    .single();

  console.log(usererr, userData);

  if (userError != null) {
    console.error("User not found or error fetching user data");
    return [];
  }

  // const viewedClusters = userData.views || [];

  // // Query for clusters not viewed by the user and not in the currentClusters list
  // const { data: clustersData, error: clustersError } = await supabase
  //   .from("clusters")
  //   .select("*, cardinality(article_ids) as article_count") // Use cardinality to get the length of article_ids array
  //   .not("id", "in", `(${viewedClusters.join(",")})`) // Exclude clusters the user has viewed
  //   .not(
  //     "id",
  //     "in",
  //     `(${
  //       currentClusters.length > 0
  //         ? currentClusters.map((cluster) => cluster.id).join(",")
  //         : ""
  //     })`
  //   ) // Exclude clusters already in currentClusters
  //   .order("article_count", { ascending: false }) // Order by the length of article_ids
  //   .limit(n);

  // if (clustersError) {
  //   console.error(clustersError);
  //   return [];
  // }

  // return clustersData;
  const viewedClusters = userData.views || [];

  // Query for clusters not viewed by the user and not in the currentClusters list
  const { data: clustersData, error: clustersError } = await supabase
    .from("clusters")
    .select("*") // Removed cardinality operation
    .not("id", "in", `(${viewedClusters.join(",")})`) // Exclude clusters the user has viewed
    .not(
      "id",
      "in",
      `(${
        currentClusters.length > 0
          ? currentClusters.map((cluster) => cluster.id).join(",")
          : ""
      })`
    ) // Exclude clusters already in currentClusters
    .limit(n);

  if (clustersError || !clustersData) {
    console.error("Error fetching clusters", clustersError);
    return [];
  }

  // Assuming article_ids is an array, calculate article_count here
  const enhancedClustersData = clustersData
    .map((cluster) => ({
      ...cluster,
      article_count: cluster.article_ids ? cluster.article_ids.length : 0,
    }))
    .sort((a, b) => b.article_count - a.article_count); // Sort by article_count descending

  return enhancedClustersData;
}

// export async function naiveRecAlgo(
//   userId: string,
//   currentClusters: any,
//   n: number
// ) {
//   // make an array of n clusters: { cluster: string, title: string, summary: string}
//   var arr = [];
//   for (var i = 0; i < n; i++) {
//     arr.push({
//       cluster: i.toString(),
//       title: `title${i}`,
//       summary: `summary${i}`,
//     });
//   }

//   return arr;
// }

// const { data, error } = await supabase.auth.getUser();
// if (error || !data?.user) {
//   redirect("/");
// }

// return <p>Hello {data.user.email}</p>;

export async function getClusterById(id: string) {
  const { data, error } = await supabase
    .from("clusters")
    .select("*")
    .eq("id", id)
    .single();

  console.log(data);

  if (error) throw new Error(error.message);
  return data;
}

async function updateUserArrayColumn(columnName: keyof ProfileData, id: string): Promise<{ [key: string]: boolean }> {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData?.user) {
    console.error("User not found");
    return { [columnName]: false };
  }
  const userId = userData.user.id;

  // Entfernen des generischen Typs <ProfileData> von der from-Methode
  const { data, error } = await supabase
    .from("profiles")
    .select(columnName)
    .eq("id", userId)
    .single();

  if (error || !data) {
    console.error(error?.message || "No data returned");
    return { [columnName]: false };
  }

  // Sicherstellen, dass data tatsächlich ProfileData entspricht und columnName korrekt behandelt wird.
  const profileData = data as ProfileData;
  let columnData: string[] = profileData[columnName] || [];

  if (!columnData.includes(id)) {
    columnData = [...columnData, id];
    const { error: updateError } = await supabase
      .from("profiles")
      .update({ [columnName]: columnData })
      .eq("id", userId);

    if (updateError) {
      console.error(updateError.message);
      return { [columnName]: false };
    }
  }

  return { [columnName]: true };
}

export async function getArticleById(id: string) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function getArticlesByClusterId(id: string) {
  const cluster = await getClusterById(id);
  const article_ids = cluster.article_ids || [];
  const articles = await Promise.all(
    article_ids.map((id: string) => getArticleById(id))
  );
  return articles;
}

export async function likeCluster(id: string) {
  return updateUserArrayColumn("likes", id);
}

export async function dislikeCluster(id: string) {
  return updateUserArrayColumn("dislikes", id);
}

export async function viewCluster(id: string) {
  return updateUserArrayColumn("views", id);
}

export async function readCluster(id: string) {
  return updateUserArrayColumn("reads", id);
}

export async function calculateBiasScores(id: string) {
  return { left: 0.5, right: 0.4, neutral: 0.1 };
}
