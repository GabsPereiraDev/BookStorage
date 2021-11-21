import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import { bindActionCreators } from "redux";
import * as RepositoriesActions from "../../store/ducks/bookstorage/types";

export const RepositoryList = () => {
  const repositories = useSelector(
    (state: ApplicationState) => state.bookStorage.data
  );

  return (
    <div>
      <ul>
        {repositories.map((repository) => (
          <li> {repository.author}</li>
        ))}
      </ul>
    </div>
  );
};
