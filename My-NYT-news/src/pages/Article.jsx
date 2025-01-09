import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Article = () => {
    const { id } = useParams();
    const { language } = useLanguage();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetch(`https://news-foniuhqsba-uc.a.run.app/news/${id}`)
            .then((response) => response.json())
            .then((data) => setArticle(data));
    }, [id]);

    if (!article) return <div>Loading...</div>;

    const translation = article.translations[language] || {};

    return (
        <div>
            <h1>{translation.headline || article.headline}</h1>
            <img style={{maxWidth:'100%', height:'auto'}} src={article.image_url} alt={translation.headline || article.headline} />
            <p>{translation.body || article.body}</p>
        </div>
    );
};

export default Article;