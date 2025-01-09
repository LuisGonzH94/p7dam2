import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Category = () => {
  const { category } = useParams();
  const { language } = useLanguage();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
      fetch(`https://news-foniuhqsba-uc.a.run.app/${category}`)
          .then((response) => response.json())
          .then((data) => setArticles(data));
  }, [category]);

  return (
      <div>
          <h1>{category.endsWith('News') ? category : `${category} News`}</h1>
          <div className="grid">
              {articles.map((article) => {
                  const translation = article.translations[language] || {};
                  return (
                      <div key={article.id} className="card">
                          <img src={article.image_url} alt={translation.headline || article.headline} />
                          <h3>{translation.headline || article.headline}</h3>
                          <p>{translation.abstract || article.abstract}</p>
                          <a href={`/news/${article.id}`}>Read More</a>
                      </div>
                  );
              })}
          </div>
      </div>
  );
};

export default Category;
