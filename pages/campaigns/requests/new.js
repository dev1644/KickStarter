import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/layout';



class RequestNew extends Component {

       static async getInitialProps(props)
    {
        const {address} = props.query;

        return { address };
    }

    state = {
        value: '',
        description : '',
        recipient: '',
        loading:false,
        inActive: false,
        error:''
    };

    onSubmit = async (event) =>{
        event.preventDefault();
        this.setState({
             loading: true,
            inActive: true,
            error:''
        });
        const campaign = Campaign(this.props.address);
        const  {description , value, recipient} = this.state;

        try{
            const accounts = await web3.eth.getAccounts();
            await   campaign.methods.createRequest(
                description,
                recipient,
                web3.utils.toWei(value,'ether'))
            .send({
                from : accounts[0]
            });

        }

        catch(err)
        {
             this.setState({
                error: err.message

             });

        }

         this.setState({
             loading: false,
             inActive: false,
           
         });

    }
 


    render(){
        return(
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                    Back
                    </a>
                </Link>
                <h3>Create a Request</h3>
            <Form onSubmit ={this.onSubmit} error={!!this.state.error}>
                <Form.Field>
                    <label>Description</label>
                    <Input value ={this.state.description} 
                    onChange = {event => this.setState({
                        description: event.target.value
                    })}
                    />
                        </Form.Field>
                        <Form.Field>
                    <label>Value in Ether</label>
                        <Input 
                        value ={this.state.value} 
                        onChange = {event => this.setState({
                        value: event.target.value
                    })}
                    />
                        </Form.Field>
                    <Form.Field>
                    <label>Recipient</label>
                        <Input 
                        value ={this.state.recipient}  
                        onChange ={event => this.setState({
                        recipient: event.target.value
                    })}
                    />
                        </Form.Field>
                        <Message  error header="Opps!" content={this.state.error}/>
                        <Button 
                        primary
                        loading ={this.state.loading}
                        disabled={this.state.inActive}
                        >
                        Create!
                        </Button>


                </Form>

                </Layout>
        );
    }
}

export default RequestNew;