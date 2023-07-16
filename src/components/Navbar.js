import React from 'react';
import { StoreContext } from '..';
import { addMovieToList, handleMovieSearch } from '../actions/index';
class Navbar extends React.Component{
    constructor(){
        super();
        this.state={
            searchText:'',
        }
    }
    handleChange= (e) => {
        this.setState({
            searchText:e.target.value
        })
    }
    handleSearch = () => {
        const { searchText } = this.state;
        console.log(searchText);
        this.props.dispatch(handleMovieSearch(searchText));
    }
    handleAddToMovies= (movie) => {
        this.props.dispatch(addMovieToList(movie));
    }
    render(){
        const { result, showSearchResult }= this.props.search;
        return(
            <div className='nav'>
                <div className='search-container'>
                    <input onChange={this.handleChange}></input>
                    <button id='search-btn' onClick={this.handleSearch}>Search</button>
                    {showSearchResult && 
                        <div className='search-results'>
                            <div className='search-result'>
                                <img alt='search-pic' src={result.Poster}/>
                                { console.log(typeof result) }
                                <div className='movie-info'>
                                    <span>{result.Title}</span>
                                    <button onClick={() => this.handleAddToMovies(result)} >Add To Movies </button> 
                                    </div>
                                 </div>
                        </div>
                            }
                </div>
            </div>
        )
    }
}
class NavbarWrapper extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {(store) => <Navbar dispatch={store.dispatch} search={this.props.search}/>}
            </StoreContext.Consumer>
        )
    }
}
export default NavbarWrapper;