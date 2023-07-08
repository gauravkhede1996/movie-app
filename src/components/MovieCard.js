import React from 'react';
class MovieCard extends React.Component{
    render(){
        const {movie, isFavourite} =this.props;
        return(
            <div className='movie-card'>
                <div className='left'>
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.imdbRating}</div>
                        {isFavourite?
                        <button className="unfavourite-btn" onClick={()=>this.props.onClickUnFavourites(movie)}>Un-Favourite</button>:
                        <button className="favourite-btn" onClick={()=>this.props.onClickFavourites(movie)}>Add To Favourite</button>}
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieCard;