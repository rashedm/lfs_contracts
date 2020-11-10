import { UUIDBase } from './UUIDBase';
import {User} from './User.entity';
import {Client} from './Client.entity';
import {Folder} from './Folder.entity';
import {Role} from './Role.entity';
import {Calendar} from './Calendar.entity';
 


export interface Firm extends UUIDBase {
  name: string;
  logoUrl: string;
  isActive: boolean;
  users: User[];
  roles: Role[];
  clients: Client[];
  folders: Folder[];
  calendars: Calendar[]
}