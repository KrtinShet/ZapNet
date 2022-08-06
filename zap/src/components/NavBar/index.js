import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../reducers/walletReducer";
import { ethers } from "ethers";
import "./index.css";

function Header() {
  const dispatch = useDispatch();
  const { isConnected, address } = useSelector((state) => state.wallet);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const WalletBtnOnClick = () => {
    if (!window.ethereum) alert("Metamask Not Installed");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider
      .send("eth_requestAccounts", [])
      .then((accounts) => {
        if (accounts.length > 0) {
          dispatch(login(accounts[0]));
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/ " className="flex">
          <h1>ZAP</h1>
          <Image src="/img/zap.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="me-auto my-2 my-lg-0"></div>
          {isConnected ? (
            <div className="login-profile" onClick={logoutHandler}>
              <Image src="/img/avtr.png" alt="gravatar" />
              <p>{address}</p>
            </div>
          ) : (
            <Button variant="dark" onClick={WalletBtnOnClick}>
              Connect Wallet
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
