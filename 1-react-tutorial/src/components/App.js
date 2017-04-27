import _ from 'lodash'
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyBqoJq_tZYMfGHXdJRx70gF34u-fhnm0wQ';

YTSearch({key: API_KEY, term:'surfboards'}, function (data) {
    console.log(data);
});

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term:term},  (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    }


    render() {

        //using lodash this local videoSearch function with a timeout that can only be called every 300 ms
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    //passing the onVideoSelect() to the child component
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

export default App;