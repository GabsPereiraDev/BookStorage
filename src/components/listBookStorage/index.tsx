import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApllicationState } from "../../store";
import { bindActionCreators } from "redux";
import * as RepositoriesActions from "../../store/ducks/bookstorage/types";

export const RepositoryList = () => {
  const repositories = useSelector(
    (state: ApllicationState) => state.bookStorage.data
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
