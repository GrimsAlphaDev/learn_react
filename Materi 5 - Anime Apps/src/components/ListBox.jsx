import AnimeList from "./AnimeList";

export default function ListBox({setIsOpen1, isOpen1, animes, handleSelectedAnime}) {
    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen1((open) => !open)}
            >
                {isOpen1 ? "–" : "+"}
            </button>
            {isOpen1 && (
                <AnimeList animes={animes} handleSelectedAnime={handleSelectedAnime} />
            )}
        </div>
    );
}
