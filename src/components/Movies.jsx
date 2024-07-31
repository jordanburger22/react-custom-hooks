import MovieForm from "./MovieForm";
import MovieList from "./MovieList";



const Movies = () => {
    return (
        <div className="container">
            <MovieForm />
            <MovieList />
        </div>
    );
}

export default Movies;