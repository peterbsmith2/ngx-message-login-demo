import {
  ActionReducerMap,
  createSelector,
} from '@ngrx/store';
import * as fromConversation from './conversation.reducer';
import * as fromMessage from './message.reducer';
import * as fromTag from './tag.reducer';


export interface State {
  conversation: fromConversation.State;
  message: fromMessage.State;
  tag: fromTag.State;
}

export const reducers: ActionReducerMap<State> = {
  conversation: fromConversation.reducer,
  message: fromMessage.reducer,
  tag: fromTag.reducer,
};

// conversation
export const selectConversation = (state: State) => state.conversation;

export const selectConversationIds = createSelector(
  selectConversation,
  fromConversation.selectConversationIds
);

export const selectConversationEntities = createSelector(
  selectConversation,
  fromConversation.selectConversationEntities
);

export const selectConversationSelectedId = createSelector(
  selectConversation,
  fromConversation.selectedId
);

export const selectConversationEditing = createSelector(
  selectConversation,
  fromConversation.editing
);

export const getSelectedConversation = createSelector(
  selectConversationEntities,
  selectConversationSelectedId,
  (entities, id) => entities[id]
);

// message
export const selectMessage = (state: State) => state.message;

export const selectMessageIds = createSelector(
  selectMessage,
  fromMessage.selectMessageIds
);

export const selectMessageEntities = createSelector(
  selectMessage,
  fromMessage.selectMessageEntities
);

export const selectMessageSelectedId = createSelector(
  selectMessage,
  fromMessage.selectedId
);

export const selectMessageEditing = createSelector(
  selectMessage,
  fromMessage.editing
);

export const getSelectedMessage = createSelector(
  selectMessageEntities,
  selectMessageSelectedId,
  (entities, id) => entities[id]
);

// tag
export const selectTag = (state: State) => state.tag;

export const selectTagIds = createSelector(
  selectTag,
  fromTag.selectTagIds
);

export const selectTagEntities = createSelector(
  selectTag,
  fromTag.selectTagEntities
);

export const selectTagSelectedId = createSelector(
  selectTag,
  fromTag.selectedId
);

export const selectTagEditing = createSelector(
  selectTag,
  fromTag.editing
);

export const getSelectedTag = createSelector(
  selectTagEntities,
  selectTagSelectedId,
  (entities, id) => entities[id]
);
