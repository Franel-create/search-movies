import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";


const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }


    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=star%20wars`)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        movies: result.Search,
                        loading: false
                    })
                })
            .catch((err) => {
                console.error(err);
                this.setState({
                    loading: false})
            })
    }

    searchMovie = (value, type = 'all') => {
            this.setState({
                loading: true
            })
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${type !== 'all' ? `&type=${type}` : ''}`)
                .then(response => response.json())
                .then(
                    (result) => {
                        this.setState({
                            movies: result.Search,
                            loading: false
                        })
                    })
                .catch((err) => {
                    console.error(err);
                    this.setState({
                        loading: false})
                })
    }

    render() {
        const { movies, loading } = this.state;

        return (
            <main className='container content' >
                <Search searchMovie={this.searchMovie} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        )
    }
}

export default Main