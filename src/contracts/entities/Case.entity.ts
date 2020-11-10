import { UUIDBase } from './UUIDBase';
import {Matter} from './Matter.entity';


export interface Case extends UUIDBase{
  name: string;
  matter: Matter;
}