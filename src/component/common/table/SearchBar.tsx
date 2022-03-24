const SearchBar = ({ onSubmit }: any) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(e.target.elements.filter.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="filter" />
            <button>Search</button>
        </form>
    );
};

export default SearchBar;
