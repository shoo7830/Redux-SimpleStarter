/**
 * Created by shoo7830 on 2016. 10. 29..
 */
import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>

        );
    }
}

export default SearchBar;
