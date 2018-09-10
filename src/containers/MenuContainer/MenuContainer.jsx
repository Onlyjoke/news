import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Menu from '../../components/Menu/Menu';
import { auth } from '../../actions/auth';

class MenuContainer extends React.Component {
    static propTypes = {
        auth: PropTypes.func,
        login: PropTypes.bool
    };

    logout = () => {
        this.props.auth(false);

        localStorage.removeItem('login');
        localStorage.removeItem('password');
    };

    render() {
        const { login } = this.props;

        return (
            <Menu
                login={login}
                logout={this.logout}
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
