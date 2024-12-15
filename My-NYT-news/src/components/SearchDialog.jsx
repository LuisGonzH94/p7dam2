import React, { useState } from 'react';

const SearchDialog = ({ onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        if (!query.trim()) return;
        fetch(`https://news-foniuhqsba-uc.a.run.app/search?query=${query}`)
            .then((response) => response.json())
            .then((data) => setResults(data))
            .catch((error) => console.error('Error fetching search results:', error));
    };

    return (
        <div className="search-dialog-content">
            <button className="close-btn" onClick={onClose}>
                X
            </button>
            <h2>Search Articles</h2>
            <input
                type="text"
                value={query}
                placeholder="Type a keyword..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch}>Search</button>
            <div className="results">
                {results.length === 0 && <p>No results found</p>}
                {results.map((article) => (
                    <div key={article.id} className="result-item">
                        <h4>{article.headline}</h4>
                        <p>{article.abstract}</p>
                        <a href={`/news/${article.id}`}>Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchDialog;
