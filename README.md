# spotifyLover

Node.js need to be installed!

In order to run the application:

go to Spotify for Developers -> My Dashboard

-> Create an app -> ... -> edit settings:

Redirect URLs: http://localhost:8888/callback

In auth-server/web-api-auth-examples/authorization_code/app.js:
paste your client_id and client_secret

Run npm install in spotifyLover/auth-server/web-api-auth-examples, than in spotifyLover/client.

Run node auth-server/web-api-auth-examples/authorization_code/app.js (listening on localhost:8888).

In second console tab navigate to client and run: npm run (listening on localhost:8080)

Play some song on Spotify and refresh the page :)
