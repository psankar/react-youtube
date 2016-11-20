import React from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY= 'AIzaSyBn8TlKFd-NZwADMhhHE6Lrw2zZ0-6cHFc';

YTSearch({key: API_KEY, term: 'tamil'}, function(data) {
    console.log(data);
});

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));