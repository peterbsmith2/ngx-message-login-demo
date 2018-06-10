import { Action } from '@ngrx/store';

export enum ConversationActionTypes {
  GET = '[Conversation] Get',
  GET_COMPLETE = '[Conversation] Get Complete',
  PUT = '[Conversation] Put',
  PUT_COMPLETE = '[Conversation] Put Complete',
}

export class Get implements Action {
  readonly type = ConversationActionTypes.GET;
}

export class GetComplete implements Action {
  readonly type = ConversationActionTypes.GET_COMPLETE;

  constructor(public payload: any) {}
}

export class Put implements Action {
  readonly type = ConversationActionTypes.PUT;

  constructor(public payload: any) {}
}

export class PutComplete implements Action {
  readonly type = ConversationActionTypes.PUT_COMPLETE;

  constructor(public payload: any) {}
}

export type ConversationActions
  = Get
  | GetComplete
  | Put
  | PutComplete;
