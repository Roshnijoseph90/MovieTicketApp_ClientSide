import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Button } from "antd"; // Import Button from Ant Design

export const MoviesDetails = () => {
  const { movieId } = useParams();  // Use movieId from useParams
  console.log("Received movie ID:", movieId); // Debug log to check if we are getting the correct movieId

  // Check if movieId is available, if not return an error message
  if (!movieId) {
    return <div>Error: Movie ID is missing!</div>;
  }

  // Fetch movie details using the movieId from the URL
  const [moviesDetails, isLoading, error] = useFetch(`/movie/moviesDetails/${movieId}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movie details.</div>;
  }

  return (
    <div>
      <h1>Movie Details page</h1>
      <div>
        <h2>{moviesDetails?.title}</h2>
        <p>{moviesDetails?.description}</p>
      </div>
      <div>
        <img src={moviesDetails?.poster} alt="movie poster" />
      </div>
      <Button type="primary" className="btn-success">Book Now</Button>
    </div>
  );
};

export default MoviesDetails;
