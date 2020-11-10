import { UUIDBase } from './UUIDBase';
import {Firm} from './Firm.entity';


export interface Calendar extends UUIDBase{
  name: string;
  description: string;
  dateStart: Date;
  dateEnd: Date;
  firm: Firm;
}