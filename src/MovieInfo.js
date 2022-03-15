// import axios so that we can make some async requests
import axios from "axios";

// import useState AND useEffect Hooks
import { useEffect, useState } from 'react';

// we want to use the movie id which is currently in the URL (at which this component renders) within our axios call
// in order to grab information from a URL (when using Router) we can use the useParams Hook
import { useParams } from 'react-router-dom';

function MovieInfo(props) {

    console.log(props);
    //lets call the useParams hook and see what it returns:
    // console.log( useParams() );

    // call the useParams hook and extract the movieId property from within the params object it returns
    const {movieId: movie_id } = useParams();

    // initialize state to represent the movie details will be returned to us from the API
    const [ details, setDetails] = useState({});
    
    // define a side effect which will fetch data about the movie after the component has first rendered
        // use axios to make a request to the movie ID endpoint
    useEffect( function() {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movie_id}`,
            params: {
                api_key: 'ad656cafb317eed8319805890f9d26f3' 
            }
        }).then( function(movieInfo) {
            console.log(movieInfo);

            // use the API data and update state
            setDetails(movieInfo.data)
        } )
    
    
    // specify that this side effect should only run one time after the component has first rendered    
    }, [movie_id])

    
    return(
            <section className="poster">
                <div className="description">
                    {/* render the movie tagline, summary, and title */}
                    <h3>{details.tagline}</h3>
                    <h2>{details.title}</h2>
                    <p>{details.overview}</p>
                </div>
                
                <div className="poster-image">
                    {/* render the movie poster */}
                {/* <img
                // add a truthy/falsy ternary operator here to fix the image 404 error
                    src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                    alt={`A movie poster for ${details.original_title}`}
                /> */}

                {/* {
                    details.poster_path
                        ?
                        <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={`a movie poster for ${details.original_title}`} />
                        : null
                } */}
                <img
                    src={details.poster_path ? `https://image.tmdb.org/t/p/w500${details.poster_path}` : ""}
                    alt={`a movie poster for ${details.original_title}`}
                />

                </div>
            </section>

    )
}

export default MovieInfo;