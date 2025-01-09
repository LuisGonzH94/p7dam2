import React, { useState, useEffect } from 'react';

const SearchDialog = ({ onClose }) => {
    const [query, setQuery] = useState('');
    const [articles, setArticles] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    // First, I need to charge the API with all related articles to my search.
    useEffect(() => {
        fetch('https://news-foniuhqsba-uc.a.run.app')
            .then((response) => response.json())
            .then((data) => {
                setArticles(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching articles:', error);
                setLoading(false);
            });
    }, []);

    // Interested way to filter results locally while the user is typing
    useEffect(() => {
        if (!query.trim()) {
            setResults([]); // Limpiar resultados si no hay búsqueda
            return;
        }

        const lowerCaseQuery = query.toLowerCase();
        const filtered = articles.filter(
            (article) =>
                article.headline.toLowerCase().includes(lowerCaseQuery) || // Coincidencia parcial en headline
                article.abstract.toLowerCase().includes(lowerCaseQuery)   // Coincidencia parcial en abstract
        );
        setResults(filtered);
    }, [query, articles]); // Se ejecuta cuando el usuario escribe o cambian los artículos

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
                onChange={(e) => setQuery(e.target.value)} // Actualizar término de búsqueda
            />
            {loading && <p>Loading articles...</p>}

            <div className="results">
                {results.length === 0 && !loading && <p>No results found</p>}
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
