import { Action } from '@ngrx/store';

export enum MessageActionTypes {
  GET = '[Message] Get',
  GET_COMPLETE = '[Message] Get Complete',
  PUT = '[Message] Put',
  PUT_COMPLETE = '[Message] Put Complete',
}

export class Get implements Action {
  readonly type = MessageActionTypes.GET;
}

export class GetComplete implements Action {
  readonly type = MessageActionTypes.GET_COMPLETE;

  constructor(public payload: any) {}
}

export class Put implements Action {
  readonly type = MessageActionTypes.PUT;

  constructor(public payload: any) {}
}

export class PutComplete implements Action {
  readonly type = MessageActionTypes.PUT_COMPLETE;

  constructor(public payload: any) {}
}

export type MessageActions
  = Get
  | GetComplete
  | Put
  | PutComplete;
