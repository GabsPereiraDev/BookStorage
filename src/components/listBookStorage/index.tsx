import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import { BookStorageTypes } from "../../store/ducks/bookstorage/types";

export const RepositoryList = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(
    (state: ApplicationState) => state.data.data
  );
  setTimeout(() => {
    dispatch({
      type: BookStorageTypes.LOAD_REQUEST,
    });
  }, 50);

  return (
    <div>
      <ul>
        {repositories.map((repository) => (
          <li key={repository._id}>
            autor:{repository.author}
            livros:{repository.book}
          </li>
        ))}
      </ul>
    </div>
  );
};
