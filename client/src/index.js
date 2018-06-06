import React from 'react';
import ReactDOM from 'react-dom';
import {LoginPage} from '../components/pages/loginpage'
import {RegularPage} from '../components/pages/regularpage';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

class AppMainPage extends React.Component {
    constructor(props) {
        super(props);
        const params = this.getHashParams();
        this.state = {
            loggedIn: !!params.access_token,
            nowPlaying: {
                name: 'Click the button to check Now Playing Music!',
                image: ''
            }
        };
        if(params.access_token) {
            spotifyWebApi.setAccessToken(params.access_token)
        }
    }

    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    getNowPlaying() {
        spotifyWebApi.getMyCurrentPlaybackState()
            .then((response) => {
                this.setState({
                    nowPlaying: {
                        name: response.item.name,
                        image: response.item.album.images[0].url
                    }
                })
            })
    }

    render() {
        return (
            <div>
                <LoginPage active={this.state.loggedIn} />
                <RegularPage active={this.state.loggedIn}
                             nowPlaying={this.state.nowPlaying}
                             getNowPlaying={() => this.getNowPlaying()} />
            </div>
        )
    }
}

ReactDOM.render(<AppMainPage />, document.getElementById("index"));