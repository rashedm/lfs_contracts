import { UUIDBase } from './UUIDBase';
import {User} from './User.entity';


export interface RefreshToken extends UUIDBase{
  token: string;
  activeUntil: Date;
  user:User;
}