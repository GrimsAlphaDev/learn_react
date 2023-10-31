// import NumResult from "./NumResult";

export default function Search({query, setQuery, children}) {
    return (
        <div className="search-container">
            <input
                className="search"
                type="text"
                placeholder="Search anime..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {/* <NumResult animes={animes} /> */}
            {children}
        </div>
    );
}
