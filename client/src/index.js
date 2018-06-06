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
                name: '',
                image: '',
                artist:''
            }
        };
        if(params.access_token) {
            spotifyWebApi.setAccessToken(params.access_token)
        }

        this.getNowPlaying = this.getNowPlaying.bind(this);
    }

    componentWillMount() {
        this.getNowPlaying();
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
                        image: response.item.album.images[0].url,
                        artist: response.item.artists[0].name
                    }
                })
                {console.log(response.item)}
            })
    }

    render() {
        return (
            <div>
                <LoginPage active={this.state.loggedIn} />
                <RegularPage active={this.state.loggedIn}
                             nowPlaying={this.state.nowPlaying}/>
            </div>
        )
    }
}

ReactDOM.render(<AppMainPage />, document.getElementById("index"));