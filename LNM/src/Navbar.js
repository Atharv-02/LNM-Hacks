import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Component 1.png';
const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const walletConnect = async () => {
    console.log('Requesting Account');

    //check if metamsk extention exist
    if (window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error Connecting ...');
      }
    } else {
      console.log('Metamask not detected');
    }
  };
  return (
    <>
      <nav className='navbar'>
        <div className='left-nav'>
          <img src={logo} alt='' className='logo-btn' />
        </div>
        <h3 className='new-head'>EdgeXGame</h3>
        <div className='right_nav'>
          <Link to='/' className='nav-link'>
            <button className='home btn'>Home</button>
          </Link>
          <a
            href='https://bafybeib6hycci6t7nu6hphvabhvsyuwnyjx5mpi6djolljoaox6zur6rgm.ipfs.sphn.live/'
            className='nav-link'
          >
            <button className='home btn'>Community</button>
          </a>
          <Link to='/buy' className='nav-link'>
            <button className='buy btn'>Buy</button>
          </Link>
          <Link to='/aboutus' className='nav-link'>
            <button className='about btn'>About Us</button>
          </Link>
          <Link to='/sec' className='nav-link'>
            <button className='about btn'>Sell</button>
          </Link>
          <button
            className='connect_wallet btn btn_connect_wallet'
            onClick={walletConnect}
          >
            {walletAddress
              ? `${walletAddress.substring(0, 11)}...`
              : 'Connect Wallet'}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
