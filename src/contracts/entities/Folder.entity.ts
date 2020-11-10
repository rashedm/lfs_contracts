import { UUIDBase } from './UUIDBase';
import {Firm} from './Firm.entity';


export interface Folder extends UUIDBase{
  name: string;
  isRoot: boolean;
  firm: Firm;
  parent: Folder;
  children: Folder[];
}