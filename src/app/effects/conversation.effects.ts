import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ApiService } from '../services/api.service';
import { ConversationActionTypes, Get, GetComplete, Put, PutComplete } from '../actions/conversation.actions';

import {
  map,
  switchMap,
} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ConversationEffects {
  @Effect()
  getConversation$: Observable<Action> = this.actions$.pipe(
    ofType<Get>(ConversationActionTypes.GET),
    switchMap(() => {
      return this.api.getConversations()
        .pipe(
          map(data => new GetComplete(data))
        );
    })
  );

  @Effect()
  putConversation$: Observable<Action> = this.actions$.pipe(
    ofType<Put>(ConversationActionTypes.PUT),
    switchMap((action) => {
      return this.api.putOneConversation(action.payload)
        .pipe(
          map(data => new PutComplete(data))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) { }
}
