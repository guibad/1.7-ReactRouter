import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const CategoriesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const skip = parseInt(query.get("skip")) || 0;
  const limit = parseInt(query.get("limit")) || 15;
  console.log(limit, skip);

  const handleNext = () => {
    query.set("skip", skip + limit);
    //query.set("limit", 200);
    navigate({ search: query.toString() });
  };
  return (
    <div>
      <h1>CategoriesPage</h1>
      <h2>Skip: {skip}</h2>
      <h2>Limit: {limit}</h2>

      <button onClick={handleNext}>Next</button>
    </div>
  );
};
