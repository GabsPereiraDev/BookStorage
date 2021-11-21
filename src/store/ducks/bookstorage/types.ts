export enum BookStorageTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCCES = "@repositories/LOAD_SUCCCES",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}


export interface BookStorage {
  id: string;
  book: string;
  author: string;
}



export interface DataBookStorage {
  data: BookStorage[];
}

export interface DataRespositoryRepository{
  response:DataBookStorage[]
}

export interface StateBookStorage {
  readonly data: BookStorage[];
  readonly loading: boolean;
  readonly error: boolean;
}
