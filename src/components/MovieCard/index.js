import './styles.css';

const imagesURL = "https://image.tmdb.org/t/p/w300";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
    </div>
  );
};

export default MovieCard;