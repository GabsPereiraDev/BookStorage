export enum AuthorsStorageTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCCES = "@repositories/LOAD_SUCCCES",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}


export interface AuthorsStorage {
  _id: string;
  name:string
}


export interface StateAuthorsStorage {
  readonly data: AuthorsStorage[];
  readonly loading: boolean;
  readonly error: boolean;
}
