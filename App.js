import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './componentes/Login';
import PaginaInicial from './componentes/PaginaInicial';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" component={Login} />
          <Route path="/pagina-inicial" component={PaginaInicial} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
