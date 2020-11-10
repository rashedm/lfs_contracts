import {Matter} from './Matter.entity';

export interface MatterType {
  id: number;
  name: string;
  matters: Matter[];
}