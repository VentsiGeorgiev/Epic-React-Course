import { useState } from "react";

import { cards } from "./data";

type MatchingPostsProps = {
  query: string;
};

export default function MatchingPosts({ query }: MatchingPostsProps) {
  const [posts, setPosts] = useState(cards);

  function toggleFavourite(id: string) {
    setPosts((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isFavorite: !card.isFavorite } : card,
      ),
    );
  }

  const normalizedQuery = query.toLowerCase();
  const matchingPosts = posts
    .filter((card) => card.title.toLowerCase().includes(normalizedQuery))
    .sort((a, b) => Number(b.isFavorite) - Number(a.isFavorite));

  return (
    <div className="cards-grid">
      {matchingPosts.map((card) => (
        <article key={card.id} className="card">
          <div className="card__cover" style={{ background: card.background }}>
            <button
              type="button"
              className={`card__heart ${
                card.isFavorite ? "card__heart--highlight" : ""
              }`}
              onClick={() => toggleFavourite(card.id)}
            >
              &#9829;
            </button>
          </div>

          <div className="card__content">
            <h3 className="card__title">{card.title}</h3>
            <p className="card__description">{card.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
