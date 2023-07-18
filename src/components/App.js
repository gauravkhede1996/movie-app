import React from 'react';
import Navbar from '../components/Navbar';
import { data } from '../data';
import MovieCard  from './MovieCard';
import { addMovies, addFavourites, removeFromFavourites, setShowFavourites} from '../actions/index';
import { connect } from '../index';

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(addMovies(data));
    // console.log(store.getState()," is the state");
  }
  handleFavouriteClick = (movie) => {
    this.props.dispatch(addFavourites(movie)); 
  }
  handleUnFavouriteClick = (movie) => {
    console.log("UnFavourite Button Clicked!")
    this.props.dispatch(removeFromFavourites(movie));
  }
  isFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);
    if (index!==-1) {
      return true;
    }
    return false;
  }
  onChangeTab= (val) => {
    this.props.dispatch(setShowFavourites(val));
  }
  render() {
    const {movies, search} = this.props;
    const {list,favourites,showFavourites} = movies;
    const displayMovies = showFavourites?favourites:list;
    console.log(this.props," is the state");
    return (
      <div className="App">
      <Navbar  search={search}/>
      <div className='main'>
        <div className='tabs'>
          <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=> this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=> this.onChangeTab(true)}>Favourites</div>
        </div>
        <div className='list'>
          {displayMovies.map((movie,index)=>{
            return <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.dispatch} onClickFavourites={this.handleFavouriteClick} isFavourite={this.isFavourite(movie)} onClickUnFavourites={this.handleUnFavouriteClick}/>
          })}
        </div>
      </div>
    </div>
    )
  }
}
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         { (store)=> <App store={store} />}
//       </StoreContext.Consumer>
//     )
//   }
// }
function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  }
}
//  connect function me state se kya lena wo callback aur konse component ko connect krna uske liye App 
const connectedComponent = connect(mapStateToProps)(App);

export default connectedComponent;
