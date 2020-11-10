import { UUIDBase } from './UUIDBase';


export interface File extends UUIDBase{
  name: string;
  mimeType: string;
  fileBase64: string;
}