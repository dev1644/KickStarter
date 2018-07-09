import React, { Component } from 'react';
import {Form, Input, Message ,Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';


class ContributeForm extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            value: '',
            error:'',
            loading: false,
            inActive:false,
        };
    }

    onSubmit = async (event) =>{
        event.preventDefault();
        const campaign = Campaign(this.props.address);
    
           this.setState({
               loading: true,
               inActive: true,
               error: ''
           });
           try {
               const accounts = await web3.eth.getAccounts();
               await campaign.methods
                   .contribute()
                   .send({
                       from: accounts[0],
                       value: web3.utils.toWei(this.state.value, 'ether')
                   });

                Router.replaceRoute(`/campaigns/${this.props.address}`);
           } 
           catch (err) {
            
                this.setState({
                   error: err.message,
               });
           
           }
           this.setState({
               loading: false,
               inActive: false,
               value:'',
               
           });
    }
    render(){

        return(
            <Form onSubmit ={this.onSubmit} error={!!this.state.error} >
                <Form.Field>
                   <label> Amount To Contribute </label>
                   <Input   
                   label = "ether"
                   labelPosition = "right"
                   value = {this.state.value}
                   onChange = {event => this.setState({value: event.target.value})}
                   

                   />
                    </Form.Field>
                   
                    < Message   error 
                    header = "Oops!"
                        content = {
                            this.state.error
                        }
                        />
                    <Button primary
                    loading ={this.state.loading}   
                    disabled={this.state.inActive}>
                    Contribute
                    </Button>
            </Form>
        );
    }

}

export default ContributeForm;