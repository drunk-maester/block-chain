const Websocket=require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
//checks if peer enviormnetal varibale has been declared or not
//string that contain weeb socket address
//that the web socket should connect to as peer.
const peers= process.env.PEERS ? process.env.PEERS.split(',') : [];

class P2P_server
{
	constructor(blockchain)
	{
		this.blockchain=blockchain;
		this.sockets=[];

	}



	listen() {
		

		const server = new Websocket.Server({ port: P2P_PORT });
   	   server.on('connection', socket => this.connectSocket(socket));

        this.connect2Peers();

		
	console.log(`Listening for peer-to-peer connections on port: ${P2P_PORT}`);
	
	}
	connect2Peers()
	{
		peers.forEach(peer => {
			const socket = new Websocket(peer);
			socket.on('open', () => this.connectSocket(socket));

		});
	}
	connectSocket(socket)
	{
		this.sockets.push(socket);
		console.log(`socket connected `);
		this.messageHandler(socket);
		socket.send(JSON.stringify(this.blockchain.chain));
	}

	messageHandler(socket)
	{
		socket.on('message',message => 
		{
			const data=JSON.parse(message);
			console.log('data ->',data);
		});
	}
}
module.exports=P2P_server;