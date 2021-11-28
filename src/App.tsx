import { Route, Redirect } from "react-router-dom";
import SearchPage from "./pages/search";
import AssetPage from "./pages/asset";
import { AssetsContextProvider } from "./store/assets-context";
import "./App.scss";

function App() {
  return (
    <AssetsContextProvider>
      <main className="App">
        <Route path="/" exact>
          <Redirect to="/search" />
        </Route>
        <Route path="/search" exact>
          <SearchPage />
        </Route>
        <Route path="/asset/:id" exact>
          <AssetPage />
        </Route>
      </main>
    </AssetsContextProvider>
  );
}

export default App;
