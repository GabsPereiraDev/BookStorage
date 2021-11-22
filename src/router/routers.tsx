import { Routes, Route } from "react-router-dom";
import { RepositoryList } from "../components/listBookStorage";
import { Register } from "../pages/register";
import Home from "../pages/home";
import { AuthorId } from "../pages/AuthorId";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="list" element={<RepositoryList />} />

      <Route path="register" element={<Register />} />

      <Route path='author/:id' element={<AuthorId/>}/>


    </Routes>
  );
};
