import { type RoleMessage } from '@/enums';

export interface Message {
  role: RoleMessage;
  content: string;
}
