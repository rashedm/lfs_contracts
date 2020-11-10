import { UUIDBase } from './UUIDBase';
import {Client} from './Client.entity';
import {OrganizationType} from './lookups/OrganizationTypes.lookup';
import {OrganizationClientDelegate} from './OrganizationClientDelegate.entity';

export interface OrganizationClient extends UUIDBase{
  type:OrganizationType;
  name: string;
  commercialRecord: string;
  client:Client;
  delegates:OrganizationClientDelegate[];
}