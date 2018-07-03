import React,{Component} from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component{

    static async getInitialProps(){
        
        const campaigns = await factory.methods.getDeployed().call();

        return { campaigns };
    }
    
    // async componentDidMount(){
    //     // const campaigns = await factory.methods.getDeployed().call();
    //     // console.log(campaigns);
    // }

    render(){
            return <div>{this.props.campaigns[0]}</div>;
    }

}

export default CampaignIndex;