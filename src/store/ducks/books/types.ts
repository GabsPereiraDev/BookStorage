export enum BookStorageTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCCES = "@repositories/LOAD_SUCCCES",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}


export interface BookStorage {
  _id: string;
  title: string;
  authorId: string;
}


export interface StateBookStorage {
  readonly data: BookStorage[];
  readonly loading: boolean;
  readonly error: boolean;
}
