import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ApiService } from '../services/api.service';
import { TagActionTypes, Get, GetComplete, Put, PutComplete } from '../actions/tag.actions';

import {
  map,
  switchMap,
} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TagEffects {
  @Effect()
  getTag$: Observable<Action> = this.actions$.pipe(
    ofType<Get>(TagActionTypes.GET),
    switchMap(() => {
      return this.api.getTags()
        .pipe(
          map(data => new GetComplete(data))
        );
    })
  );

  @Effect()
  putTag$: Observable<Action> = this.actions$.pipe(
    ofType<Put>(TagActionTypes.PUT),
    switchMap((action) => {
      return this.api.putOneTag(action.payload)
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
