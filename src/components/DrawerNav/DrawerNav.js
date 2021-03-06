import classes from "./DrawerNav.module.css";
import NavItem from "./NavItem/NavItem";
import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../../assets/search.svg";
import User from "../../assets/userIcon.svg";
import signout from "../../assets/signout.svg";
import CartLink from "../CartLink/CartLink";
import { useSelector } from "react-redux";

function Nav({ callBack, toggle }) {
  const isAuthenticated = useSelector(store => store.auth.idToken !== null);

  const classNames = [classes.NavToggle];
  if (toggle) {
    classNames.push(classes.toggle)
  };
  
  return (
    <div className={classes.DrawerNav}>
      <div className={classes.iconContainer}>
        <NavLink to="/search" className={classes.icons}><img src={Search} className={classes.searchIcon} alt="Search" /></NavLink>
        {!isAuthenticated ?
          <NavLink to="/auth" className={classes.icons}>
            <img src={User} className={classes.userIcon} alt="Account" />
          </NavLink>
        : null}
        {isAuthenticated ? 
          <NavLink to="/signout" className={classes.icons}>
            <img src={signout} className={classes.userIcon} alt="Account" />
          </NavLink> 
        : null}
        <NavLink to="/cart" className={classes.icons}><CartLink /></NavLink>
      </div>
      <ul>
        <NavItem url="/shop" onClick={callBack} className={classNames.join(" ")}>Shop</NavItem>
        <NavItem url="/specialdays" onClick={callBack} className={classNames.join(" ")}>Special days</NavItem>
        <NavItem url="/delivery" onClick={callBack} className={classNames.join(" ")}>Delivery</NavItem>
        <NavItem url="/location" onClick={callBack} className={classNames.join(" ")}>Location</NavItem>
        <NavItem url="/about" onClick={callBack} className={classNames.join(" ")}>About</NavItem>
        <NavItem url="/account" onClick={callBack} className={classNames.join(" ")}>Contacts</NavItem>
      </ul>
    </div>
  );
}

export default Nav;