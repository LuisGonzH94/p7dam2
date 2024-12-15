//Using the Hook 'useState' to implement interactive and dinamics components.
"QUE ES ES USESTATE: https://github.com/LuisGonzH94/desarrollo-interfaces/blob/main/02%20-%20React/05%20-%20useState.md"

"QUE SON LOS HOOKS: https://github.com/LuisGonzH94/desarrollo-interfaces/blob/main/02%20-%20React/06%20-%20Ciclo%20de%20vida.md"

import React, { useState, useEffect } from 'react';

//Building up the main page where the main news will be displayed.
const Home = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://news-foniuhqsba-uc.a.run.app')
            .then(response => response.json())
            .then(data => setArticles(data));
    }, []);

    return (
        <div>
            <div className="grid">
                {articles.map(article => (
                    <div key={article.id} className="card">
                        <img src={article.image_url} alt={article.headline} /> 
                        <h3>{article.headline}</h3>
                        <p>{article.abstract}</p>
                        <a href={`/news/${article.id}`}>Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;