import { UUIDBase } from './UUIDBase';
import {OrganizationClient} from './OrganizationClient.entity';

export interface OrganizationClientDelegate extends UUIDBase{
  name: string;
  nationalIqamaId: string;
  email: string;
  mobile: string;
  billingAddress: string;
  nationalAddress: string;
  phone: string;
  fax: string;
  preferedLanguage: string;
  client:OrganizationClient;
}