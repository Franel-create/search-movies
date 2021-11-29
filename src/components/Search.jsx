import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value,
        })
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovie(this.state.search, this.state.type)
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({
            type: event.target.dataset.type
        }), () => {
            this.props.searchMovie(this.state.search, this.state.type)
        })

    }

    render() {
        return (
            <div className="row">
                <div className="input-field search-row">
                    <input placeholder='Search'
                        id="email_inline"
                        type="search"
                        className="validate input-search"
                        value={this.state.search}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKey}
                    />
                    <button onClick={() => { this.props.searchMovie(this.state.search, this.state.type) }} className="waves-effect light-blue btn">search</button>
                </div>
                <div>
                    <label className='label-radio'>
                        <input className="with-gap light-blue"
                            name="type"
                            type="radio"
                            data-type='all'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'} />
                        <span>All</span>
                    </label>
                    <label className='label-radio'>
                        <input className="with-gap light-blue"
                            name="type"
                            type="radio"
                            data-type='movie'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'} />
                        <span>Movies only</span>
                    </label>
                    <label className='label-radio'>
                        <input className="with-gap light-blue"
                            name="type"
                            type="radio"
                            data-type='series'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'} />
                        <span>Series only</span>
                    </label>
                </div>
            </div >
        )
    }
}

// onKeyPress={this.props.searchMovie}

export default Search;