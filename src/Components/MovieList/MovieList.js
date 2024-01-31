import MovieCard from "../MovieCard/MovieCard";
import movieData from "../MovieData/MovieData";
import './MovieListStyles.css';
import SearchBox from "../SearchBox/SearchBox";
import React, { useState } from "react";

function MovieList(){

    let [input, setInput] =  useState("");  
    
    let movie_array = movieData["results"];
    let filtered_movies = movie_array.filter((movie) => {
        return movie["original_title"].toLowerCase().startsWith(input.toLowerCase());
    });
  
    
    let moviesArr = filtered_movies.map((movie) => {
        return (
        <div key={movie["id"]} className="Movie">
        <MovieCard 
            image = {"https://image.tmdb.org/t/p/w500" + movie["poster_path"]}
            title = {movie["original_title"]} 
            text = {movie["overview"]} 
            releaseDate = {movie["release_date"]} 
            rating = {movie["vote_average"]}
        />

        </div>
        );        
    });   
 
    return (
        <div> 
            <SearchBox onInputChange={setInput}/>
            <div className="MovieContainer">        
                {moviesArr}            
            </div>
        </div>

        
    )
}

export default MovieList;