import React from "react";
import PropType from "prop-types";
const Card = ({ movie }) => {
	return (
		<div className="col-md-4">
			<div className="card">
				<img
					className="card-img-top"
					src={movie.Poster}
					alt={movie.Title}
					width="100"
				></img>
				<div className="card-body">
					<h4>
						{movie.Title} {movie.Year}{" "}
					</h4>
					<p>{movie.Type}</p>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	movie: PropType.shape({
		Title: PropType.string,
		Year: PropType.string,
		Poster: PropType.string,
		Type: PropType.string,
	}).isRequired
}
export default Card;
