const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'brain scale rug fetch license taxi ozone arrow emotion universe negative dove',
    'https://ropsten.infura.io/m62CiajFe86L4iYN20tw'
);//Two Separate Arguments 1st Is Account Mnemonic.

const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from Account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
        .send({ gas:'5000000', from: accounts[0] });

    
        
        console.log('Console  Deployed To', result.options.address);

};
deploy();