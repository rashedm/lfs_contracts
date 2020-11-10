import {Client} from './Client.entity';
import {Matter} from './Matter.entity';
import { UUIDBase } from './UUIDBase';
import {Document} from './Document.entity';


export interface Tag extends UUIDBase{
  name: string;
  client: Client;
  matter: Matter;
  document: Document;
}