import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {BrowserRouter,  Link,  Route, Routes} from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';


function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };



  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
            Tanowo &copy;
          </Link>
        </div>
        <div>
        <Link to="/cart">
        Cart

        {(cartItems.length > 0)? (
        <span className="badge">{cartItems.length}</span>
              ):<span className="badge badge-1">0</span>}
        </Link>
        {
          userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{''}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            )

          : (
          <Link to="/signin">Sign In</Link>
       ) }


        </div>

      </header>
      <main>

      <Routes>
          <Route path="/cart/" element={<CartScreen/>}></Route>
          <Route path="/cart/:id" element={<CartScreen/>}></Route>
          <Route path="/signin" element={<SigninScreen/>}></Route>
          <Route path="/signout" element={<SigninScreen/>}></Route>
          <Route path="/api/products/:id" element={<ProductScreen/>}></Route>
          <Route path="/" element={<HomeScreen/>} ></Route>
      </Routes>


      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}
export default App;