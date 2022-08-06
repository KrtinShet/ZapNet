import React from "react";
// import NavBar from "../../components/NavBar/index.js.bak";
import Header from "./../../components/NavBar";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../reducers/walletReducer";
import { ethers } from "ethers";
import { Link } from "react-router-dom";

const index = () => {
  const dispatch = useDispatch();
  const { isConnected, address } = useSelector((state) => state.wallet);

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
    <>
      <Header />
      <Container>
        <div className="mt-5 me-auto">
          <h1> Connect Wallet</h1>

          {isConnected ? (
            <>
              <div className="mb-4">
                <Button variant="outline-light">
                  <Link to="/dashboard">GO TO DASHBOARD</Link>
                </Button>
              </div>
              <div className="mb-4">
                <Button variant="outline-light">
                  <Link to="/borrow">Buy Energy</Link>
                </Button>
              </div>
              <div className="mb-4">
                <Button variant="outline-light">
                  <Link to="/lend">lend Energy</Link>
                </Button>
              </div>
            </>
          ) : (
            <Button variant="dark" onClick={WalletBtnOnClick}>
              Connect Wallet
            </Button>
          )}
        </div>
      </Container>
    </>
  );
};

export default index;
