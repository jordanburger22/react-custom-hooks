


const TvForm = () => {

    const initState = {
        title: '',
        release_date: '',
        end_date: '',
        seasons: '',
        genre: '',
        director: '',
        writer: '',
        description: ''
    }

    return (
        <form >
            <h3>Add TV Show</h3>
            <input
                name="title"
                placeholder="Title"
            />
            <input
                name="release_date"
                placeholder="Release Date"
            />
            <input
                name="end_date"
                placeholder="End Date"
            />
            <input
                name="seasons"
                placeholder="Seasons"
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
            <button>Add Tv Show</button>
        </form>
    );
}

export default TvForm;