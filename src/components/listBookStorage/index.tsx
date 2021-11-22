import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import { BookStorageTypes } from "../../store/ducks/books/types";
import { AuthorsStorageTypes } from "../../store/ducks/authors/types";
import { Conteiner } from "./style";
import { useEffect } from "react";

export const RepositoryList = () => {
  const dispatch = useDispatch();
  const booksList = useSelector((state: ApplicationState) => state.data.data);


  useEffect(() => {
    dispatch({
      type: BookStorageTypes.LOAD_REQUEST,
    });
  }, []);

  

  return (
    <Conteiner>
      <h3>Lista de Livros</h3>
      <ul>
        {booksList.map((book) => (
          <li key={book._id}>
            <div>
              <span>Livro</span>: {book.title}
            </div>
          </li>
        ))}
        autor:
      
      </ul>
    </Conteiner>
  );
};
