const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach( async ()=>{
 
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data:compiledFactory.bytecode })
    .send({from:accounts[0], gas: '1000000'});

    await factory.methods.createCampaign('100').send({from : accounts[0] , gas: '1000000'});
    [campaignAddress] = await factory.methods.getDeployed().call();
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );  
});

describe('Campaigns' , () =>{
    it('deploys a factory and a campaign', ()=>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('Testing Minimum Amount to Contribute', () => {
        
        
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('Verifing the Manager', async () =>{
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0] , manager);
    });

     it('Creating A Request', async () => {
         await campaign.methods.createRequest("One piece", accounts[6], 1000).send({
             from: accounts[0],
             gas: '1000000',

         });

         const Req = await campaign.methods.requests(0).call();
         assert.equal('One piece', Req.description);
     });

    it( 'Contributing A ammount', async() => {
      

        //    const Req = await campaign.methods.requests(0).call();
        //    console.log(Req.description);

        await campaign.methods.contribute().send({
            from:accounts[1],
            value:'200',
            gas: '1000000'
        });

        await campaign.methods.contribute().send({
            from: accounts[2],
            value: '200',
            gas: '1000000'
        });
        await campaign.methods.contribute().send({
            from: accounts[3],
            value: '200',
            gas: '1000000'        });
        await campaign.methods.contribute().send({
            from: accounts[4],
            value: '200',
            gas: '1000000'
        });
        await campaign.methods.contribute().send({
            from: accounts[5],
            value: '200',
            gas: '1000000'
        });
            

        let bool = await campaign.methods.approvers(accounts[1]).call();
        assert.equal(bool, true);
        bool = await campaign.methods.approvers(accounts[2]).call();
        assert.equal(bool, true);
        bool = await campaign.methods.approvers(accounts[3]).call();
        assert.equal(bool, true);
        bool = await campaign.methods.approvers(accounts[4]).call();
        assert.equal(bool, true);
        bool = await campaign.methods.approvers(accounts[5]).call();
        assert.equal(bool, true);

        let Number = await campaign.methods.approversCount().call();
        console.log(Number);
   

        // await campaign.methods.approveRequest(0).send({
        //     from: accounts[1],
        //     gas:'1000000'
        // });

        //  await campaign.methods.approveRequest(0).send({
        //     from: accounts[2],
        //     gas: '1000000'
        // });

        // await campaign.methods.approveRequest(0).send({
        //     from: accounts[3],
        //     gas: '1000000'
        // });

        // await campaign.methods.approveRequest(0).send({
        //     from: accounts[4],
        //     gas: '1000000'
        // });

    

    });

        it('it requries minimum contribution', async () => {

            try{
                await campaign.methods.contribute().send({
                    from: accounts[3],
                    value: '10'
                });   
                assert(false);
            }

        catch(err){
            assert(err);
        }
            
        });

        it('Finalizing A Request', async () => {

        //    await campaign.methods.finalizeRequest(0).send({
        //    from: accounts[0],
        //     gas:'1000000'
        //    });

            const Req = await campaign.methods.requests(1).call();
            assert.equal("One Piece", Req.description);
           
           
            

        });

    

   

   



});