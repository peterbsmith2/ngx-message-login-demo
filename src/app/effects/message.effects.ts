import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ApiService } from '../services/api.service';
import { MessageActionTypes, Get, GetComplete, Put, PutComplete } from '../actions/message.actions';

import {
  map,
  switchMap,
} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class MessageEffects {
  @Effect()
  getMessage$: Observable<Action> = this.actions$.pipe(
    ofType<Get>(MessageActionTypes.GET),
    switchMap(() => {
      return this.api.getMessages()
        .pipe(
          map(data => new GetComplete(data))
        );
    })
  );

  @Effect()
  putMessage$: Observable<Action> = this.actions$.pipe(
    ofType<Put>(MessageActionTypes.PUT),
    switchMap((action) => {
      return this.api.putOneMessage(action.payload)
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
