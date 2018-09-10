import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { authInit, auth } from '../../actions/auth';
import App from '../../components/App/App';


class AppContainer extends React.Component {
    static propTypes = {
        authInit: PropTypes.func,
        auth: PropTypes.func
    };

    componentDidMount() {
        this.props.authInit();

        if (
            localStorage.getItem('login') === 'test' &&
            localStorage.getItem('password') === 'password'
        ) {
            this.props.auth(true);
        }
    }

    render() {
        return (
            <App />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authInit: () => {
            dispatch(authInit());
        },
        auth: (isAuth) => {
            dispatch(auth(isAuth));
        }
    };
};

export default connect(null, mapDispatchToProps)(AppContainer);
