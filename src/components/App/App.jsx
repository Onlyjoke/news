import React from 'react';

import css from './App.styl';
import MenuContainer from '../../containers/MenuContainer/MenuContainer';

const App = () => {
    return (
        <div className={css.root}>
            <div className={css.container}>
                <MenuContainer />
            </div>
        </div>
    );
};

export default App;
