import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Tag } from '../models/tag.model';
import { TagActionTypes, TagActions } from '../actions/tag.actions';

export interface State extends EntityState<Tag> {
  selectedId: string | number;
  editing: boolean;
}

export const adapter: EntityAdapter<Tag> = createEntityAdapter<Tag>({
});

export const initialState: State = adapter.getInitialState({
  selectedId: null,
  editing: false
});

export function reducer(state = initialState, action: TagActions): State {
  switch (action.type) {
    case TagActionTypes.GET_COMPLETE:
      return adapter.addMany(action.payload, state);

    case TagActionTypes.PUT_COMPLETE:
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
  selectIds: selectTagIds,
  selectEntities: selectTagEntities
} = adapter.getSelectors();

export const selectedId = (state: State) => state.selectedId;
export const editing = (state: State) => state.editing;
