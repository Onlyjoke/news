export const getNews = () => (dispatch) => {
    dispatch({
        type: 'FETCH_NEWS_LIST_SUCCESS',
        payload: {
            news: [
                {
                    id: 131,
                    title: 'Jack Ma to Step Down as Executive Chairman',
                    img_url: 'https://www.w3schools.com/w3css/img_lights.jpg',
                    text: 'Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy. Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy. Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy. Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy.'
                },
                {
                    id: 132,
                    title: 'Jack Ma to Step Down as Executive Chairman',
                    img_url: 'https://www.w3schools.com/w3css/img_lights.jpg',
                    text: 'Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy. Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy. Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy. Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy.'
                },
                {
                    id: 133,
                    title: 'Jack Ma to Step Down as Executive Chairman',
                    img_url: 'https://www.w3schools.com/w3css/img_lights.jpg',
                    text: 'Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy. Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy. Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy. Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy.'
                },
                {
                    id: 134,
                    title: 'Jack Ma to Step Down as Executive Chairman',
                    img_url: 'https://www.w3schools.com/w3css/img_lights.jpg',
                    text: 'Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy. Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy. Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy. Jack Ma, the billionaire tycoon who rode the currents of China’s rising affluence to build one of the world’s biggest e-commerce companies, says he is retiring from business to focus on philanthropy.'
                }
            ]
        }
    });
};

export const getOneNews = (newsId) => (dispatch) => {
    dispatch({
        type: 'FETCH_ONE_NEWS_SUCCESS',
        payload: newsId
    });
};

export const deleteNews = (newsId) => (dispatch) => {
    dispatch({
        type: 'FETCH_DELETE_NEWS_SUCCESS',
        payload: newsId
    });
};
