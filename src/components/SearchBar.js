import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }
    
    render() {
        return (
            <div className="query">
                <div className="search">
                    <h1>Bing Web Search</h1>   
                    <input onChange={event => this.onInputChange(event.target.value)}/>
                </div>
            </div>               
        );
    }
}
 
export default SearchBar;