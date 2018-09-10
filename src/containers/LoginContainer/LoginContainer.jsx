import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from '../../components/Login/Login';
import { auth } from '../../actions/auth';

class LoginContainer extends React.Component {
    static propTypes = {
        auth: PropTypes.func,
        login: PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.state = {
            fieldLogin: '',
            fieldPassword: ''
        };
    }

    handleLoginChange = (e) => {
        const { value } = e.target;

        this.setState({
            fieldLogin: value
        });
    };

    handlePasswordChange = (e) => {
        const { value } = e.target;

        this.setState({
            fieldPassword: value
        });
    };

    login = () => {
        const {
            fieldLogin,
            fieldPassword
        } = this.state;

        if (fieldLogin === 'test' && fieldPassword === 'password') {
            this.props.auth(true);

            localStorage.setItem('login', fieldLogin);
            localStorage.setItem('password', fieldPassword);
        }

        this.setState({
            fieldLogin: '',
            fieldPassword: ''
        });
    };

    handleKeyPress = (e) => {
        const {
            fieldLogin,
            fieldPassword
        } = this.state;

        if (e.key === 'Enter') {
            if (fieldLogin === 'test' && fieldPassword === 'password') {
                this.props.auth(true);

                localStorage.setItem('login', fieldLogin);
                localStorage.setItem('password', fieldPassword);
            }

            this.setState({
                fieldLogin: '',
                fieldPassword: ''
            });
        }
    };

    render() {
        const {
            fieldLogin,
            fieldPassword
        } = this.state;

        const {
            login
        } = this.props;

        if (login) {
            return <Redirect to='/news' />;
        }

        return (
            <Login
                fieldLogin={fieldLogin}
                fieldPassword={fieldPassword}
                handleLoginChange={this.handleLoginChange}
                handlePasswordChange={this.handlePasswordChange}
                login={this.login}
                handleKeyPress={this.handleKeyPress}
            />
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        login: auth.login
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        auth: (isAuth) => {
            dispatch(auth(isAuth));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
