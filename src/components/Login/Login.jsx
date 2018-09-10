import React from 'react';
import PropTypes from 'prop-types';

import css from './Login.styl';

const Login = (props) => {
    return (
        <div className={css.root}>
            <div className={css.fieldLogin}>
                <div className={css.label}>Login</div>
                <input
                    type='text'
                    value={props.fieldLogin}
                    onChange={(e) => props.handleLoginChange(e)}
                    className={css.input}
                />
            </div>
            <div className={css.fieldPassword}>
                <div className={css.label}>Password</div>
                <input
                    type='password'
                    value={props.fieldPassword}
                    onChange={(e) => props.handlePasswordChange(e)}
                    onKeyPress={(e) => props.handleKeyPress(e)}
                    className={css.input}
                />
            </div>
            <div
                className={css.btnLogin}
                onClick={props.login}
            >
                LOGIN
            </div>
        </div>
    );
};

Login.propTypes = {
    logout: PropTypes.func,
    login: PropTypes.func,
    fieldLogin: PropTypes.string,
    fieldPassword: PropTypes.string,
    handleLoginChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    handleKeyPress: PropTypes.func

};

export default Login;
