import * as actions from './actions';

const initialState = {
  adventures: []
};

export const journeyReducer = (state=initialState, action) => {
  if(action.type === action.SAVE_DATA) {
    return action.saveData;
  }
  return state;
}
