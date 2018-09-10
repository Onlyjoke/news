import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import News from '../../components/News/News';
import { deleteNews } from '../../actions/news';

class NewsListContainer extends React.Component {
    static propTypes = {
        login: PropTypes.bool,
        oneNews: PropTypes.object,
        deleteNews: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            isDelete: false
        };
    }

    deleteNews = (newsId) => {
        this.props.deleteNews(newsId);

        this.setState({
            isDelete: !this.state.isDelete
        });
    };

    render() {
        const { isDelete } = this.state;
        const { oneNews } = this.props;

        return (
            <News
                oneNews={oneNews}
                deleteNews={this.deleteNews}
                isDelete={isDelete}
            />
        );
    }
}

const mapStateToProps = ({ auth, news }) => {
    return {
        login: auth.login,
        oneNews: news.one_news,
        isDelete: news.isDelete
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNews: (newsId) => {
            dispatch(deleteNews(newsId));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsListContainer));
