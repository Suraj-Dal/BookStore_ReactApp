import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Account from './Pages/Account/Account';
import RouterComponent from './Router/Router';
import Forget from './Components/Forget/Forget';
import Header from './Components/Header/Header';
import Book from './Components/Book/Book';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <Account /> */}
      {/* <Forget /> */}
      {/* <Header />
      <Book /> */}
      <Dashboard />
      {/* <RouterComponent /> */}
    </div>
  );
}

export default App;
