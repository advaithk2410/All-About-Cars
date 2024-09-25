import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignIn from './component/signIn';
import SignUp from './component/signUp';
import VerifyOTP from './component/verify_otp';
import Product from './component/product';
import CarDetails from './component/carDetail';
import AdminPage from './component/adminPage';
import PaymentOptions from './component/payment';
import Thanks from './component/thank';
import LoanSchemes from './component/loan';
import LoanQuery from './component/loanquery';
import AdminLoginPage from './component/adminLoginPage';



function App() {
  return (
    <div className="App">
      
      <Router>
      
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/verify-otp" element={<VerifyOTP/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/car/:id/:email" element={<CarDetails/>}></Route>
      <Route path="/admin/:adminId" element={<AdminPage/>}></Route>
      <Route path="/payment/:email" element={<PaymentOptions/>}></Route>
      <Route path="/thank/:email" element={<Thanks/>}></Route>
      <Route path="/loandetail/:email" element={<LoanSchemes/>}></Route>
      <Route path="/loanquery/:email" element={<LoanQuery/>}></Route>
      <Route path="/adminlogin" element={<AdminLoginPage/>}></Route>
      
      </Routes>
      
     </Router>
    </div>
  );
}

export default App;
