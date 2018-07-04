import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

    console.log('We are in the MetaMask');
    web3 = new Web3(window.web3.currentProvider);
    console.log(web3);
    
}
else{

     console.log('We are on the Server OR The user is not Running MetaMask.');

    const provider = new Web3.providers.HttpProvider(
        'https://ropsten.infura.io/m62CiajFe86L4iYN20tw');
        // https: //ropsten.infura.io/jChmQEBTwDHFqviU93LI

    web3 = new Web3(provider);
}

export default web3;