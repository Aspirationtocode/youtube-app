import host from './host';
import io from 'socket.io-client';
export default (socket = io(host, {
	transports: ['websocket'], // you need to explicitly tell it to use websockets
}));
