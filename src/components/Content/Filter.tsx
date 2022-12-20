import React from "react";
import { useContentContext } from "../../context/ContentContext";

export const Filter = () => {
  const { filter, setFilter } = useContentContext();
  return (
    <div className="filter">
      <div
        className={filter === "bunny" ? "on" : ""}
        onClick={(ev) => setFilter("bunny")}
      >
        Bunnies
      </div>
      <div
        className={filter === "cat" ? "on" : ""}
        onClick={(ev) => setFilter("cat")}
      >
        Cats
      </div>
      <div
        className={filter === "dog" ? "on" : ""}
        onClick={(ev) => setFilter("dog")}
      >
        Dogs
      </div>
      <div
        className={filter === "toad" ? "on" : ""}
        onClick={(ev) => setFilter("toad")}
      >
        Toads
      </div>
    </div>
  );
};
