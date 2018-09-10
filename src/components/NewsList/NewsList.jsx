import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './NewsList.styl';

const NewsList = (props) => {
    if (!props.login) {
        return <div>Login please</div>;
    }

    if (!props.news) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.root}>
            {
                props.news.map((item, index) => {
                    return (
                        <div
                            className={css.newsItem}
                            key={index}
                        >
                            <div
                                className={css.newsImageLink}
                                onClick={() => props.getOneNews(item.id)}
                            >
                                <Link
                                    className={css.linkItem}
                                    to={`/news/${item.id}`}
                                >
                                    <img
                                        className={css.newsImage}
                                        src={item.img_url}
                                        alt={item.title}
                                    />
                                </Link>
                            </div>
                            <div
                                className={css.newsTitle}
                                onClick={() => props.getOneNews(item.id)}
                            >
                                <Link
                                    className={css.linkItem}
                                    to={`/news/${item.id}`}
                                >
                                    {item.title}
                                </Link>
                            </div>
                            <div className={css.newsDescription}>
                                {item.text.slice(0, 500)}...
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

NewsList.propTypes = {
    news: PropTypes.array,
    login: PropTypes.bool,
    getOneNews: PropTypes.func
};

export default NewsList;
