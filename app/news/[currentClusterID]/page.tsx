/*
** ****************************************************************************
** This file is part of the cluster-specific page within the news section.
** It renders the page for a specific news cluster identified by its unique ID.
** ****************************************************************************
*/

import { Gist } from "@/components/News/gist";
import { Synthesis } from "@/components/News/synthesis";

// Define the functional component for the cluster-specific page
export default function ClusterPage({
  params,
}: {
  params: { currentClusterID: string };
}) {
  // Render the page layout with the Gist component, passing the current cluster ID
  return (
    <div className="flex flex-col justify-center w-full items-center">
      <Gist currentClusterID={params.currentClusterID} />
    </div>
  );
}