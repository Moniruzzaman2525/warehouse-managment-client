import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrder from './Pages/Dashboard/MyOrder';
import ManageItem from './Pages/Dashboard/ManageItem';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyReview from './Pages/Dashboard/MyReview';
import AllUser from './Pages/Dashboard/AllUser';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageAllProduct from './Pages/Dashboard/ManageAllProduct';
import AddProduct from './Pages/Dashboard/AddProduct';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='update' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='manage' element={<RequireAdmin><ManageItem></ManageItem></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageAllProduct></ManageAllProduct></RequireAdmin>}></Route>
          <Route path='user' element={<RequireAdmin><AllUser></AllUser></RequireAdmin>}></Route>
        </Route>

        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
