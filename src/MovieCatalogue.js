// 1. import the axios library
import axios from "axios";
// 2. import the useState hook AND useEffect hook
import { useState, useEffect} from 'react';

// in order to recreate the behaviour of an anchor with the added benefit/logic of React Router, we can use the Link component
import {Link} from 'react-router-dom';

function MovieCatalogue() {

    console.log('catalogue has rendered');

    // 3. initialize state to keep track of the movie data which will be returned from the API
    const [movies, setMovies] = useState([]);

    // 4. initialize a useEffect to run the side effect of fetching data from the movie API (this side effect is running a single time on page load)
    useEffect( () => {
        console.log('side effect is running');

        // 5. make an asynchronous request to the TMDB API using axios
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'ad656cafb317eed8319805890f9d26f3',
                include_adult: false
            }
        }).then(function(showMeTheMovies) {
            console.log(showMeTheMovies);
            // 6. save the returned data within state
            setMovies(showMeTheMovies.data.results)
        }); 
        
    }, [])
    

    
    return (
        <section>
            <h2>Here is your viewing options</h2>
    
            <ul className="catalogue">
            {/* // 7. map through state and return a movie for each movie present in the returned API data */}
                {
                    movies.map( (movie) => {
                        return(
                            <Link to={`/${movie.id}`} key={movie.id} >

                            <li>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={`A poster for the movie ${movie.title}`}
                                />
                            </li>
                        
                        </Link>
                        )
                    })
                }
            </ul>

        </section>
    )
}

export default MovieCatalogue;