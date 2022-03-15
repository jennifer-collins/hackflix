import './App.css';

// import 2 pieces from the Router library which will allow us to configure the routes within this app
import {Routes, Route} from 'react-router-dom';

import Header from './Header';
import MovieCatalogue from './MovieCatalogue';
import MovieInfo from './MovieInfo';

function App() {
  return (
    <div className="wrapper">
      {/* this app consists of 3 components: */}
      {/* a header */}
      <Header />
      
      {/* Now we need to define our routing configuration (this is often done within the App component) */}

      {/* Step #1: we use the Routes component to act as a parent container to all of the subsequently defined Routes AKA defined URL paths */}
      <Routes>
        {/* Step #2: Define the individual routes/URL paths which are available within your app, as well as the components which are visible at those paths */}

        {/* here is where you will define which component is visible at what path - curlies get opened because we're passing the component that is rendered */}
        {/* this is known as an exact route/path */}
        {/* home page is always defined as / (forward slash) */}
        <Route path="/" element={ <MovieCatalogue /> } />

        {/* the MovieInfo component should be shown when the route looks like: */}
        {/* "www.homepage.com/movieIdHere"  */}
        <Route path="/:movieId" element={ <MovieInfo /> }/>


      </Routes>

      {/* a movie catalogue */}
      {/* this component is only visible on the homepage */}
      {/* a movie details component (which is rendered when the user selects a movie) */}
    </div>
  );
}

export default App;
