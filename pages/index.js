import React, { Component } from "react";
import instance from "../ethereum/factory";
import {
  Card,
  Button,
  Message,
  Dimmer,
  Loader,
  Segment
} from "semantic-ui-react";
import Layout from "../components/layout";
import { Link } from "../routes";

let web3;

class CampaignIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metamaskInstalled: false,
      permissionDenied: false,
      onWrongNetwork: false,
      feteched: false
    };
  }

  static async getInitialProps() {
    const campaigns = await instance.methods.getDeployed().call();
    this.initializeMetamask();
    return {
      campaigns
    };
  }

  initializeMetamask = async _ => {
    try {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);

        await window.ethereum.enable();
        metamaskInstalled = true;
        const onWrongNetwork = await this.checkNetwork();
      } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
      }

      this.setState({
        metamaskInstalled: true,
        onWrongNetwork: false,
        permissionDenied: false,
        feteched: true
      });
    } catch (error) {
      this.setState({
        metamaskInstalled: true,
        permissionDenied: true,
        feteched: true
      });
    }
  };

  checkNetwork = async _ => {
    const netId = await web3.eth.net.getId();
    let onWrongNetwork;
    switch (netId) {
      case 1:
        c;
        onWrongNetwork = true;
        break;
      case 2:
        onWrongNetwork = false;
        break;
      case 3:
        onWrongNetwork = true;
        break;
      case 4:
        onWrongNetwork = true;
        break;
      default:
        onWrongNetwork = true;
    }
    return onWrongNetwork;
  };

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }
  generateMessage = (header, info) => {
    <Message negative>
      <Message.Header>{header}</Message.Header>
      <p>{info}</p>
    </Message>;
  };
  render() {
    if (!this.state.feteched) {
      <Segment>
        <Dimmer active>
          <Loader size="massive">Loading</Loader>
        </Dimmer>
      </Segment>;
    } else if (!this.state.metamaskInstalled) {
      return generateMessage(
        "Metamask not Installed",
        "Please install metamask from your respective extension store"
      );
    } else if (this.state.onWrongNetwork) {
      return generateMessage(
        "Wrong Network",
        "You are on wrong network, please switch to the Ethereum Mainnet."
      );
    } else if (this.state.permissionDenied) {
      return generateMessage(
        "Can't Access your account",
        "Please allow us to use your accounts to get your details about campaigns"
      );
    } else {
      return (
        <Layout>
          <div>
            <h3> Open Campaign </h3>
            <Link route="/campaigns/new">
              <a>
                <Button
                  floated="right"
                  content="Create Campaign"
                  icon="add"
                  primary
                />
              </a>
            </Link>

            {this.renderCampaigns()}
          </div>
        </Layout>
      );
    }
  }
}

export default CampaignIndex;
