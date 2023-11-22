import './App.css';
import SignUp from './Components/Pages/SignUp/SignUp';
import SignIn from './Components/Pages/SignIn/SignIn';
import Dashboard from './Components/dashboard/Dashboard';
import Router from './Components/Route/Router';
import Header from './Components/dashboard/Header';
import ForgetPass from './Components/Pages/ForgotPass/ForgetPass';

function App() {
  return (
    <div className='main'>
    {/* <SignUp/> */}
    {/* <SignIn/> */}
    {/* <Dashboard/> */}
    <Router/>
    {/* <Header/> */}
    {/* <ForgetPass/> */}
    </div>
  );
}

export default App;
