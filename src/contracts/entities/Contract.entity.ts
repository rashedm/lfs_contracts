import { UUIDBase } from './UUIDBase';
import {Matter} from './Matter.entity';


export interface Contract extends UUIDBase{
  name: string;
  matter: Matter;
}