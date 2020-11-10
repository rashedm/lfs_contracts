import { UUIDBase } from './UUIDBase';
import {Client} from './Client.entity';

export interface IndividualClient extends UUIDBase{
  name: string;
  nationalIqamaId: string;
  email: string;
  mobile: string;
  billingAddress: string;
  nationalAddress: string;
  phone: string;
  fax: string;
  preferedLanguage: string;
  client:Client;
}