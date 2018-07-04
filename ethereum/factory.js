import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x1a2E00DD9F10E5937C2844056E2B1ebE8fcc81A9'
);

export default instance;