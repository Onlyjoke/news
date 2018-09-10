import _ from 'lodash';

export default function news(state = {}, action) {
    if (action.type === 'FETCH_NEWS_LIST_SUCCESS') {
        const { news } = action.payload;
        const newsArr = state.list ? state.list.slice() : [];

        if (state.list) {
            return { list: newsArr };
        }

        return {
            list: news
        };
    }

    if (action.type === 'FETCH_ONE_NEWS_SUCCESS') {
        const newsId = action.payload;
        const newsArr = state.list ? state.list.slice() : [];
        const currentIndex = _.findIndex(newsArr, (obj) => obj.id === newsId);
        const oneNews = {
            one_news: newsArr[currentIndex]
        };

        return Object.assign({}, state, oneNews);
    }

    if (action.type === 'FETCH_DELETE_NEWS_SUCCESS') {
        const newsId = action.payload;
        const newsArr = state.list ? state.list.slice() : [];
        const currentIndex = _.findIndex(newsArr, (obj) => obj.id === newsId);

        if (currentIndex === -1) {
            return state;
        }

        newsArr.splice(currentIndex, 1);

        return Object.assign({}, state, { list: newsArr });
    }

    return state;
}
