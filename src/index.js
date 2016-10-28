import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDYPoq_IckqRwDKfxdrP9HOSvdOaSq0aI4';

const App = () =>  {
	return (
	<div>
		<SearchBar />
	</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));