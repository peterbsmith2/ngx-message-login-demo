import { Message } from './message.model';
import { Tag } from './tag.model';

export interface Conversation {
  createdAt: number;
  updatedAt: number;
  id?: string;
  name: string;
  messages: Message[];
  tag: Tag;
}
