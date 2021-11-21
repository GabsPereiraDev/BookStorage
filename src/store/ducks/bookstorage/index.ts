import { Reducer } from "redux";
import { StateBookStorage, BookStorageTypes } from "./types";

const INITIAL_STATE: StateBookStorage = {
  data: [
    {
      id: "",
      author: "",
      book: "",
    },
  ],
  error: false,
  loading: false,
};

const reducer: Reducer<StateBookStorage> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookStorageTypes.LOAD_REQUEST:
      return { ...state, loading: true, error: false };
    case BookStorageTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case BookStorageTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
