import { useEffect, useState } from "react";
import "./styles.css";
import Form from "./Form";
import MatchingPosts from "./MatchingPosts";
import { getQueryParam, syncQueryParam } from "./utils";

export default function Feature01() {
  const [query, setQuery] = useState(getQueryParam);

  useEffect(() => {
    const handlePopState = () => {
      setQuery(getQueryParam());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    syncQueryParam(query);
  }, [query]);

  function handleSetQuery(nextQuery: string) {
    setQuery(nextQuery);
  }

  function handleToggleTag(tag: "dog" | "cat", checked: boolean) {
    setQuery((currentQuery) => {
      const currentWords = currentQuery.split(" ").filter(Boolean);

      if (checked) {
        if (currentWords.includes(tag)) {
          return currentQuery;
        }

        return [...currentWords, tag].join(" ");
      }

      return currentWords.filter((word) => word !== tag).join(" ");
    });
  }

  return (
    <main className="page">
      <Form
        query={query}
        onQueryChange={handleSetQuery}
        onTagToggle={handleToggleTag}
      />
      <MatchingPosts query={query} />
    </main>
  );
}
