import { UUIDBase } from './UUIDBase';
import {Firm} from './Firm.entity';
import {Role} from './Role.entity';
import {RefreshToken} from './RefreshToken.entity';
import {UserProfileImage} from './UserProfileImage.entity';

export interface User extends UUIDBase{
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  passwordResetToken: string;
  passwordResetTokenActiveUntil: Date;
  activationToken: string;
  activationTokenUntil: Date;
  firm:Firm;
  roles:Role[];
  refreshTokens:RefreshToken[];
  profileImage?: UserProfileImage;
  tempPassword:string;
  privileges:string[];
}