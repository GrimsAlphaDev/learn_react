export default function Anime({anime, handleSelectedAnime}) {
    return (
        <li
            onClick={() => handleSelectedAnime(anime.mal_id)}
        >
            <img src={anime.image} alt={`${anime.title} cover`} />
            <h3>{anime.title}</h3>
            <div>
                <p>
                    <span>{anime.year}</span>
                </p>
            </div>
        </li>
    );
}
