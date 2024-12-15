import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    fetch(`https://news-foniuhqsba-uc.a.run.app/news/${id}`)
      .then(response => response.json())
      .then(data => {
        setArticle(data);
        fetch(`https://news-foniuhqsba-uc.a.run.app/${data.section}`)
          .then(response => response.json())
          .then(related => setRelatedArticles(related));
      });
  }, [id]);

  if (!article) return <div>Loading...</div>;
  return (
    <div>
      <div className="article-container">
        <h1>{article.headline}</h1>
        <img src={article.image_url} alt={article.headline} />
        <p className='body'>{article.body}</p>
        <h3>Related Articles</h3>
        <div className="related-articles">
          {relatedArticles.map(related => (
            <div key={related.id} className="related-card">
              <h4>{related.headline}</h4>
              <p className='abstract'>{related.abstract}</p>
              <a href={`/news/${related.id}`}>Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;