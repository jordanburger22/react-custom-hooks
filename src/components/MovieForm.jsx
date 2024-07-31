

const MovieForm = () => {

    const initState = {
        title: '',
        release_date: '',
        runtime: '',
        genre: '',
        director: '',
        writer: '',
        description: ''
    }

    return (
        <form className="movie-form">
            <h3>Add New Movie</h3>
            <input
                name="title"
                placeholder="Title"
            />
            <input
                name="release_date"
                placeholder="Release Date"
            />
            <input
                name="runtime"
                placeholder="Runtime"
            />
            <input
                name="genre"
                placeholder="Genre"
            />
            <input
                name="director"
                placeholder="Director"
            />
            <input
                name="writer"
                placeholder="Writer"
            />
            <input
                name="description"
                placeholder="Description"
            />

            <button>Add Movie</button>
        </form>
    );
}

export default MovieForm;