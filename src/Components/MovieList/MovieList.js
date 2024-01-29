import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import movieData from "../MovieData/MovieData";
import './MovieListStyles.css';

import Hook from "../SearchBox/Hookfile";

function MovieList(){
    
    let {input, setInput} = Hook();
    console.log(input);
    let movie_array = movieData["results"];
    let filtered_movies = movie_array.filter((movie) => {
        return movie["original_title"].toLowerCase().startsWith(input);
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
        <div className="MovieContainer">          
            
            {moviesArr}
        
        </div>
        
    )
}

export default MovieList;