import "./style/global.css";
import { Provider } from "react-redux";
import store from "./store";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Conteiner } from "../src/style/style";
import { Router } from "./router/routers";
import { Nav } from "./components/Navegation";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Conteiner>
          <Nav />
          <Router />
        </Conteiner>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
