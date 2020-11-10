import { UUIDBase } from './UUIDBase';
import {Client} from './Client.entity';
import {MatterType} from './MatterType.entity';
import {Case} from './Case.entity';
import {Contract} from './Contract.entity';
import {Consultation} from './Consultation.entity';
import {Tag} from './Tag.entity';


export interface Matter extends UUIDBase{
  client: Client;
  matterType: MatterType;
  cases: Case[];
  contracts: Contract[];
  consultations: Consultation[];
  tags: Tag[];
}