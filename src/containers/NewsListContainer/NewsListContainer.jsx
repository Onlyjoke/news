import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewsList from '../../components/NewsList/NewsList';
import {
    getNews,
    getOneNews
} from '../../actions/news';

class NewsListContainer extends React.Component {
    static propTypes = {
        login: PropTypes.bool,
        news: PropTypes.array,
        getNews: PropTypes.func,
        getOneNews: PropTypes.func
    };

    componentDidMount() {
        this.props.getNews();
    }

    getOneNews = (newsId) => {
        this.props.getOneNews(newsId);
    };

    render() {
        const {
            login,
            news
        } = this.props;

        return (
            <NewsList
                login={login}
                news={news}
                getOneNews={this.getOneNews}
            />
        );
    }
}

const mapStateToProps = ({ auth, news }) => {
    return {
        login: auth.login,
        news: news.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNews: () => {
            dispatch(getNews());
        },
        getOneNews: (newsId) => {
            dispatch(getOneNews(newsId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsListContainer);
