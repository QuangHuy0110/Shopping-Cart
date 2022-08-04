import { Layout, Menu,  } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import {countDataCart} from '../../redux/selectors/CartSelector'



const { Header } = Layout;

const HeaderComponent = () => {
  const countCart = useSelector(countDataCart)  
  let items = [
    { label: <Link to="/">Home</Link>, key: "/" },   
    { label: <Link to="/cart">Cart ({countCart})</Link>,key: "/cart",}
  ];

  return (
    <Header>
      <div className="logo">
        <span style={{color: 'white', fontSize:'25px', paddingRight:'10px'}}>Shopping cart</span>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
      />
    </Header>
  );
};

export default React.memo(HeaderComponent);
