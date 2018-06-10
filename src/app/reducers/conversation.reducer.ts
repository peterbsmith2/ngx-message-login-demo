import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Conversation } from '../models/conversation.model';
import { ConversationActionTypes, ConversationActions } from '../actions/conversation.actions';

export interface State extends EntityState<Conversation> {
  selectedId: string | number;
  editing: boolean;
}

export const adapter: EntityAdapter<Conversation> = createEntityAdapter<Conversation>({
});

export const initialState: State = adapter.getInitialState({
  selectedId: null,
  editing: false
});

export function reducer(state = initialState, action: ConversationActions): State {
  switch (action.type) {
    case ConversationActionTypes.GET_COMPLETE:
      return adapter.addMany(action.payload, state);

    case ConversationActionTypes.PUT_COMPLETE:
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
  selectIds: selectConversationIds,
  selectEntities: selectConversationEntities
} = adapter.getSelectors();

export const selectedId = (state: State) => state.selectedId;
export const editing = (state: State) => state.editing;
