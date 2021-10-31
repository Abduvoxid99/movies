import Error from "./Error";
import Movie from "./Movie";

export default function Movies(props) {
    const {movies} = props
    return (
        <div className="movies">
            {
                movies && movies.length > 0 ? movies.map(movie=>(
                    <Movie key={movie.imdbID} {...movie}/>
                )) : <Error/>
            }
        </div>
    );
}

