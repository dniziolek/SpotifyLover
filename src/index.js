import React from 'react';
import ReactDOM from 'react-dom';
import {LoginPage} from '../components/pages/loginpage'
import {RegularPage} from "../components/pages/regularpage";

class AppMainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState(prevState => ({
            login: !prevState.login
        }));
    }

    render() {
        return (
            <div>
                <LoginPage toggleModal={this.toggleModal} active={this.state.login}/>
                <RegularPage active={this.state.login}/>
            </div>
        )
    }
}

ReactDOM.render(<AppMainPage />, document.getElementById("index"));