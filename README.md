# Simple broadcasting websocket server

This project serves as an example on how to build a server that can be used by a Decentraland scene to handle secure Websockets communication between players.

It opens a websocket server on port 8080 which can then be proxied via nginx to add TLS certificate.


## Behavior

This server shares all messages sent by all players to all other players in the same room, without filtering or applying any logic of its own.

When a player establishes a connection with this server, it groups the player into a room depending on the last parameter of the URL.

<server-ip>/broadcast/<room-name>
  
The following scene is an example of a scene that uses a server like this:

https://github.com/decentraland-scenes/ws-example

This scene adds the player's realm at the end of the URL when establishing the connection, so that all players in a same realm in the scene are in sync with each other.


## Running locally

You can run this server locally under localhost.

To do this, simply cd to the server directory and run:

```
npm run start
```
You can then run a Decentraland scene on a separate command line window and interact with this server. If you open the scene preview on multiple tabs, the preview on each of the tabs will communicate with each other. 

To reach the server when running locally from your scene's code, do:

```
const socket = new WebSocket(`ws://localhost:8080`)
```

## Installation via Docker

For easier installation on the server where you want to ultimately run this, this project is packaged into a Docker container. The server then just needs to have TLS certificates and nginx installed.

To install it as a docker container, run the following from the server:

```
docker docker run -d -p 13370:13370 hprivakos/ws-broadcast
```


Learn more about how to build your own scenes in our [documentation](https://docs.decentraland.org/) site.

If something doesn’t work, please [file an issue](https://github.com/decentraland-scenes/Awesome-Repository/issues/new).

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.

