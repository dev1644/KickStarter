import React,{Component} from 'react';
import {Table ,Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component{
    
       state = {
      
        loading:false,
        inActive: false,
        loading1: false,
        inActive1: false,
        error: ''
    };
    onApprove = async () =>{
        this.setState({
            loading : true,
            inActive :true,
             inActive1: true,
            error:''
        });
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        try{
        await campaign.methods.approveRequest(this.props.id)
        .send({
            from:accounts[0],
        });
    }
    catch(err)
    {
        this.setState(
            {
                error:err.message
            }
        );
    }
    this.setState({
        loading: false,
        inActive: false,
         inActive1: false,
    });
    }

    onFinalize = async () => {
        
           this.setState({
            loading1 : true,
            inActive: true,
            inActive1 :true,
            error: '',
        });
        const campaign = Campaign(this.props.address);

        const accounts = await web3.eth.getAccounts();

        try{
        await campaign.methods.finalizeRequest(this.props.id)
            .send({
                from: accounts[0],
            });
        }
        catch(err){
            
              this.setState(
            {
                error:err.message
            }
        );
        }
                 this.setState({
                     loading1: false,
                     inActive: false,
                     inActive1: false,
                 });
    }
    
    render(){

        const {Row ,Cell} = Table;
        const { id , request , approversCount} = this.props;
        const readyToFinalize = request.approvalCount > approversCount/2;
        
        return(
            <Row disabled ={request.complete}
             positive = {readyToFinalize&&!request.complete} 
             >
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount}/{approversCount}</Cell>
                <Cell>{
                    request.complete ? null :(
                    <Button 
                    color ='green' 
                    basic 
                    onClick = {this.onApprove}
                    loading ={this.state.loading}
                    disabled = {this.state.inActive}
                     >
                        Approve
                        
                        </Button>
                    )
                }
                </Cell>
                <Cell>{
                    request.complete ? null : (
                    <Button 
                    color ='teal' 
                    basic 
                    onClick ={this.onFinalize}
                    loading ={this.state.loading1}
                    disabled = {this.state.inActive1}
                    >
                        Finalize
                        </Button>
                    )
                }
                </Cell>
                </Row>
        );
    }
}

export default RequestRow