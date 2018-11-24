# spotifyLover

In order to run the application:

go to Spotify for Developers -> My Dashboard

-> Create an app -> ... -> edit settings:

Redirect URLs: http://localhost:8888/callback

In auth-server/web-api-auth-examples/authorization_code/app.js:
paste your client_id and client_secret

In console navigate to auth-server/web-api-auth-examples/authorization_code and run: node app.js (listening on localhost:8888)
In second console tab navigate to client and run: npm start (listening on localhost:8080)