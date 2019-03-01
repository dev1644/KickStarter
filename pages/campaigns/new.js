import React, { Component } from "react";
import Layout from "../../components/layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class CampaignNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minCont: "",
      error: "",
      loading: false,
      inActive: false
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ error: "" });
    this.setState({
      loading: true,
      inActive: true
    });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minCont).send({
        from: accounts[0]
      });

      Router.pushRoute("/");
    } catch (error) {
      this.setState({ error: error.message });
    }
    this.setState({
      loading: false,
      inActive: false
    });
  };
  render() {
    return (
      <Layout>
        <h3>New Campaign</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.error}>
          {
            // !! to Convert String into a Equivalent Boolean Value
          }
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              value={this.state.minCont}
              label="wei"
              labelPosition="right"
              onChange={event => this.setState({ minCont: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops" content={this.state.error} />
          <Button
            primary
            loading={this.state.loading}
            disabled={this.state.inActive}
          >
            Create !
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
