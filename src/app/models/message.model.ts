import { Conversation } from './conversation.model';

export interface Message {
  createdAt: number;
  updatedAt: number;
  id?: string;
  text: string;
  conversation: Conversation | number;
}
