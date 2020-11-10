import { UUIDBase } from './UUIDBase';
import {Client} from './Client.entity';
import {Folder} from './Folder.entity';
import {File} from './File.entity';
import {Tag} from './Tag.entity';


export interface Document extends UUIDBase{
  name: string;
  description: string;
  tags: Tag[];
  client: Client;
  file: File;
  folder: Folder;
}