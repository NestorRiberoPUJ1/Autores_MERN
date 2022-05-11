import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ActualizarAutor from './components/ActualizarAutor/ActualizarAutor';
import AllAutores from './components/AllAutores/AllAutores';
import NuevoAutor from './components/NuevoAutor/NuevoAutor';
import Error from './components/Error/Error';

const App = () => {
  return (
    <div className="container">

      <BrowserRouter>


        <Switch>
          <Route path="/" exact render={() => <AllAutores />} />
          <Route path="/autores/new" render={() => <NuevoAutor />} />
          <Route path="/autores/edit/:id" render={() => <ActualizarAutor />} />
          <Route path="/error" render={() => <Error />} />
        </Switch>


      </BrowserRouter>

    </div>
  );
}

export default App;
