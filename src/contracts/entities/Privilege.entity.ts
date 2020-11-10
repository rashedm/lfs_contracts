import { UUIDBase } from './UUIDBase';


export interface Privilege extends UUIDBase{
  name: string;
  internalName: string;
  description: string;
}