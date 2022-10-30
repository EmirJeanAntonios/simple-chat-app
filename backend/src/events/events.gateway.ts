import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { WebSocketServer } from '@nestjs/websockets/decorators';

import { Socket, Server } from 'socket.io';
@WebSocketGateway(3001, { transports: ['websocket'] })
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  afterInit(server: Server) {
    console.log('Server Started ');
  }
  handleConnection(client: Socket, ...args: any[]) {
    console.log('Connection from ID : ' + client.id);
  }
  handleDisconnect(client: Socket) {
    console.log('Disconnect from ID : ' + client.id);
  }
  @SubscribeMessage('send_message')
  handleMessage(client: Socket, payload: any) {
    console.log('payload', payload);
    this.server.emit('recMessage', payload);
  }
}
