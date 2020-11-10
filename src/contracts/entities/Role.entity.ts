import { UUIDBase } from './UUIDBase';
import {Privilege} from './Privilege.entity';
import {Firm} from './Firm.entity';


export interface Role extends UUIDBase{
  name: string;
  description: string;
  firm:Firm;
  privileges: Privilege[]
}