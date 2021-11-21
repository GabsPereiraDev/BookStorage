import { action } from "typesafe-actions";
import { BookStorage, BookStorageTypes } from "./types";

export const loadRequest = () => action(BookStorageTypes.LOAD_REQUEST);

export const loadSuccces = (data: BookStorage) =>
  action(BookStorageTypes.LOAD_SUCCCES, {data});

export const loadFailure = () => action(BookStorageTypes.LOAD_FAILURE);
