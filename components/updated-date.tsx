"use client";

import { useState, useEffect } from "react";
import { getLastUpdated } from "@/actions/get-last-updated";

// Helper function to format the timestamp to a more human-readable format
const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};


export default function UpdatedDate() {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const result = await getLastUpdated();
        setLastUpdated(result);
      } catch (error) {
        console.error("Failed to fetch the last updated date:", error);
      }
    }

    getData();
  }, []);

  return (
    <p className="text-slate-400 italic lg:text-base text-xs">
      {lastUpdated ? `Updated ${formatDate(lastUpdated)}` : "Loading..."}
    </p>
  );
}
