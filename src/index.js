import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAD1cD-4WLSTqCB96cZa3nfy_bkx4x0bOc';



class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = { videos: [] };

	  YTSearch({key: API_KEY, term: '트와이스TT'}, (videos) => {
	  	this.setState({ videos });
		});
	}

	render() {
		return (
		<div>
			<SearchBar />
			<VideoList videos={this.state.videos} />
		</div>
		);
	}	
}

ReactDOM.render(<App />, document.querySelector('.container'));