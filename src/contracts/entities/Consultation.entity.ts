import { UUIDBase } from './UUIDBase';
import {Matter} from './Matter.entity';


export interface Consultation extends UUIDBase{
  name: string;
  matter: Matter;
}