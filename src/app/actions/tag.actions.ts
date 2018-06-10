import { Action } from '@ngrx/store';

export enum TagActionTypes {
  GET = '[Tag] Get',
  GET_COMPLETE = '[Tag] Get Complete',
  PUT = '[Tag] Put',
  PUT_COMPLETE = '[Tag] Put Complete',
}

export class Get implements Action {
  readonly type = TagActionTypes.GET;
}

export class GetComplete implements Action {
  readonly type = TagActionTypes.GET_COMPLETE;

  constructor(public payload: any) {}
}

export class Put implements Action {
  readonly type = TagActionTypes.PUT;

  constructor(public payload: any) {}
}

export class PutComplete implements Action {
  readonly type = TagActionTypes.PUT_COMPLETE;

  constructor(public payload: any) {}
}

export type TagActions
  = Get
  | GetComplete
  | Put
  | PutComplete;
