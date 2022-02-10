import React, { useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = ({ defaultCategory = [] }) => {
  const [categories, setCategories] = useState(defaultCategory);

  return (
    <>
      <h2>Gif App</h2>
      <AddCategory setCategory={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
