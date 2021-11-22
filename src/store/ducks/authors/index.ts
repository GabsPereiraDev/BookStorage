import { Reducer } from "redux";
import { StateAuthorsStorage, AuthorsStorageTypes } from "./types";

const INITIAL_STATE: StateAuthorsStorage = {
  data: [
    {
      _id: "",
      name: "",
    },
  ],
  error: false,
  loading: false,
};

const reducer: Reducer<StateAuthorsStorage> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case AuthorsStorageTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case AuthorsStorageTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case AuthorsStorageTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
