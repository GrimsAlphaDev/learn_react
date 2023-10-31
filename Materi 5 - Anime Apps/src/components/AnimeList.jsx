import Anime from "./Anime";

export default function AnimeList({animes, handleSelectedAnime}) {
    return (
        <ul className="list list-anime">
            {animes?.map((anime) => (
                <Anime anime={anime} key={anime.mal_id} handleSelectedAnime={handleSelectedAnime} />
            ))}
        </ul>
    );
}
