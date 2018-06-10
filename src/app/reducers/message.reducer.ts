import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Message } from '../models/message.model';
import { MessageActionTypes, MessageActions } from '../actions/message.actions';

export interface State extends EntityState<Message> {
  selectedId: string | number;
  editing: boolean;
}

export const adapter: EntityAdapter<Message> = createEntityAdapter<Message>({
});

export const initialState: State = adapter.getInitialState({
  selectedId: null,
  editing: false
});

export function reducer(state = initialState, action: MessageActions): State {
  switch (action.type) {
    case MessageActionTypes.GET_COMPLETE:
      return adapter.addMany(action.payload, state);

    case MessageActionTypes.PUT_COMPLETE:
      const changes = {
        id: action.payload.id,
        changes: action.payload
      };
      return adapter.updateOne(changes, {
        ...state,
        editing: false
      });

    default:
      return state;
  }
}

export const {
  selectIds: selectMessageIds,
  selectEntities: selectMessageEntities
} = adapter.getSelectors();

export const selectedId = (state: State) => state.selectedId;
export const editing = (state: State) => state.editing;
