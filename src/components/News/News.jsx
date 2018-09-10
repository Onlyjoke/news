import React from 'react';
import PropTypes from 'prop-types';

import css from './News.styl';

const NewsList = (props) => {
    if (!props.oneNews) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.root}>
            <div className={css.title}>
                {props.oneNews.title}
            </div>
            <div className={css.img}>
                <img
                    className={css.oneNewsImage}
                    src={props.oneNews.img_url}
                    alt={props.oneNews.title}
                />
            </div>
            <div className={css.text}>{props.oneNews.text}</div>
            {
                !props.isDelete ?
                    <div
                        className={css.btnDelete}
                        onClick={() => props.deleteNews(props.oneNews.id)}
                    >
                        DELETE
                    </div>
                    :
                    <div className={css.isDelete}>
                        DELETED
                    </div>
            }
        </div>
    );
};

NewsList.propTypes = {
    oneNews: PropTypes.object,
    deleteNews: PropTypes.func,
    isDelete: PropTypes.bool
};

export default NewsList;
