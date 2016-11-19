import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY= "AIzaSyBn8TlKFd-NZwADMhhHE6Lrw2zZ0-6cHFc";

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));