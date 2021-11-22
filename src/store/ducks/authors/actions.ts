import { action } from "typesafe-actions";
import { AuthorsStorage, AuthorsStorageTypes } from "./types";

export const loadRequest = () => action(AuthorsStorageTypes.LOAD_REQUEST);

export const loadSuccces = (data: AuthorsStorage) =>
  action(AuthorsStorageTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(AuthorsStorageTypes.LOAD_FAILURE);
