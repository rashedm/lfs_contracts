import {User} from "./User.entity";
import { UUIDBase } from "./UUIDBase";

export interface UserProfileImage extends UUIDBase{
  base64: string;
  extension: string;
  mimeType: string;
  user?: User;

}