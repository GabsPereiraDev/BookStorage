import axios from "axios";
import { DataBookStorage } from "../store/ducks/bookstorage/types";

const api = axios.create({
    baseURL:'http://localhost:4000/'
})

export default api