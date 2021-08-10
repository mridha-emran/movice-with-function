import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './component/Home';
import Weekly from './component/Weekly';
import WeeklyBattle from './component/WeeklyBattle';
import Poplar from './component/Poplar';
import PoplarBattle from './component/PoplarBattle';
import Favorites from './component/Favorites';
import './App.css';

function App() {
  return (
    
    <BrowserRouter>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/weekly" exact component={Weekly} />
      <Route path="/weeklyBattle" exact component={WeeklyBattle} />
      <Route path="/popular" exact component={Poplar} />
      <Route path="/popularBattle" exact component={PoplarBattle} />
      <Route path="/favorites" exact component={Favorites} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
