# hangman-server

## Summary

- [WebRTC intro](#WebRTC-Web-Real-Time-Communication)
  - [WebRTC APIs](#WebRTC-APIs)
- [Peer-to-peer](#Peer-to-Peer)
  - [Signaling server](#Signaling-server)
    - [EC2 AWS TURN-server](#TURN-server-build-with-EC2-AWS)

## WebRTC (Web Real-Time Communication)

WebRTC is an open-source project maintained by companies like Google, Apple, Amazon, etc. that lets you add real-time communication capabilities to web and mobile applications. It supports video, voice, and generic data to be sent between peers. It's available on all modern browsers as well as on native clients for all major platforms.

The two organizations that control the standards for WebRTC are **The World Wide Web Consortium (W3C)** and the **Internet Engineering Task Force (IETC).**

Real-Time communications need low-latency (time it takes for data to travel from a device to a server and back), under 50ms for smooth, real-time activities, while over 100ms causes noticeable lag.

### WebRTC APIs

The WebRTC standard covers, on a high level, two different technologies: media capture devices (it can include video cameras, microphones and screen capturing devices) and peer-to-peer connectivity.

- Video cameras and microphones use `navigator.mediaDevices.getUserMedia()` to capture `MediaStreams`
- Screen recording uses `navigator.mediaDevices.getDisplayMedia()`

Peer-to-peer connectivity is handled by the `RTCPeerConnection` interface. This is the central point for establishing and controlling the connection between two peers in WebRTC.

[WebRTC](https://webrtc.org/)

## Peer-to-peer

It's a distributed computing architecture in which participants share part of their own resources, such as processing power, storage, or network capacity.

Each computer can act as a server for the others, allowing shared access to files and peripherals without the need for a central server.

Differently from WebSockets that use a server as the center of communication, where the server has the responsibility to exchange data between clients, peer-to-peer can use a server only to establish connection. This server helps clients to find each other, called signaling server.

Peer connections in WebRTC specifications use peer-to-peer protocol to connect two applications on different computers to communicate with each other.

In order to discover how two peers can connect, both clients need to provide an **ICE Server configuration**. This is either a STUN or a TURN-server, and their role is to provide ICE candidates to each client which is then transferred to the remote peer. This transferring of ICE candidates is commonly called signaling.

[WebRTC - peer connections](https://webrtc.org/getting-started/peer-connections)

### Signaling server

![Explanation of Peer-to-Peer connection with signaling server](/docs/assets/peer-to-peer-signaling.png)

#### TURN-server build with EC2 AWS
