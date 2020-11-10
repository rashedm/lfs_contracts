import { UUIDBase } from './UUIDBase';
import {Firm} from './Firm.entity';
import {Matter} from './Matter.entity';
import {Document} from './Document.entity';
import {ClientType} from './lookups/ClientTypes.lookup';
import {IndividualClient} from './IndividualClient.entity';
import {OrganizationClient} from './OrganizationClient.entity';
import {Tag} from './Tag.entity';

export interface Client extends UUIDBase{
  clientType:ClientType;
  firm: Firm;
  matters: Matter[];
  documents: Document[];
  individual:IndividualClient[];
  organization: OrganizationClient[];
  tags: Tag[];
}