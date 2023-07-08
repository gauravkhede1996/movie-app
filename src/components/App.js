import React from 'react';
import Navbar from '../components/Navbar';
import { data } from '../data';
import MovieCard  from './MovieCard';
import { addMovies, addFavourites, removeFromFavourites} from '../actions/index';

class App extends React.Component {
  componentDidMount(){
    const { store } = this.props;
    store.subscribe(()=>{
      console.log("Updated state");
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
    console.log(store.getState()," is the state");
  }
  handleFavouriteClick = (movie) => {
    console.log("Add to Favourites clicked!")
    const {store} = this.props;
    store.dispatch(addFavourites(movie)); 
  }
  handleUnFavouriteClick = (movie) => {
    console.log("UnFavourite Button Clicked!")
    const { store } = this.props;
    store.dispatch(removeFromFavourites(movie));
  }
  isFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if (index!==-1) {
      return true;
    }
    return false;
  }
  render() {
    const {list} = this.props.store.getState();
    console.log(this.props.store.getState()," is the state");
    return (
      <div className="App">
      <Navbar />
      <div className='main'>
        <div className='tabs'>
          <div className='tab'>Movies</div>
          <div className='tab'>Favourites</div>
        </div>
        <div className='list'>
          {list.map((movie,index)=>{
            return <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch} onClickFavourites={this.handleFavouriteClick} isFavourite={this.isFavourite(movie)} onClickUnFavourites={this.handleUnFavouriteClick}/>
          })}
        </div>
      </div>
    </div>
    )
  }
}

export default App;
