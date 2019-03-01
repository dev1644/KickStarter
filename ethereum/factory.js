import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x14b6C6710d0DBFeF3C3504CFBE40c825F9E0564A"
);

export default instance;
