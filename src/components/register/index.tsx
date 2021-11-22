import { Container } from "./style";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { BookStorageTypes } from "../../store/ducks/books/types";


interface CreateBooks {
  author: string;
  book: string;
}

export const RegisterBook = () => {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch({
      type: BookStorageTypes.LOAD_REQUEST,
    });
  }, 50);

  return (
    <Container>
      <h1>Cadastrar Livro</h1>
      <Formik
        initialValues={{
          author: "",
          book: "",
        }}
        onSubmit={async (values: CreateBooks) => {
          try {
            const { data } = await api.post<CreateBooks>(`/books`, values);
          } catch (error) {}
          
        }}
      >
        <Form>
          <section>
            <label htmlFor="">Autor</label>
            <Field name="author" />
          </section>
          <section>
            <label htmlFor="">Livro</label>
            <Field name="book" />
          </section>

          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </Container>
  );
};
