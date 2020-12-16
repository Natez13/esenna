
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom';
import { Home } from './Componets/Home';
import { User } from './Componets/User';



function App() {
  return (
    <div>
      <Router>
        <Route exact path="/user" component={User}/>
        <Route exact path="/" render={() => {
          return(
            <div>
              <Home></Home>
            </div>
          )
        }}/>
      </Router>
      
      
    </div>
  );
}

export default App;
