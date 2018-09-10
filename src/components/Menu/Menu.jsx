import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './Menu.styl';
import NewsListContainer from '../../containers/NewsListContainer/NewsListContainer';
import NewsContainer from '../../containers/NewsContainer/NewsContainer';
import LoginContainer from '../../containers/LoginContainer/LoginContainer';

const Menu = (props) => {
    return (
        <Router>
            <div className={css.root}>
                <div className={css.logo}>
                    <Link className={css.linkItem} to='/'>
                        <img src='http://omnic.net/sites/default/files/logo2.png' alt='omnic_logo' />
                    </Link>
                </div>
                <div className={css.links}>
                    <Link className={css.linkItem} to='/news'>News</Link>
                    <Link className={css.linkItem} to='/login'>
                        <span onClick={props.logout}>
                            {
                                props.login ? 'Logout' : 'Login'
                            }
                        </span>
                    </Link>
                </div>
                <Route exact path='/news' component={NewsListContainer} />
                <Route path='/login' component={LoginContainer} />
                <Route path='/news/:id' component={NewsContainer} />
            </div>
        </Router>
    );
};

Menu.propTypes = {
    logout: PropTypes.func,
    login: PropTypes.bool
};

export default Menu;
