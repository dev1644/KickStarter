import React, { Component } from "react";
import Layout from "../../components/layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import { Card, Grid, Button } from "semantic-ui-react";
import Contribute from "../../components/ContribueForm";
import { Link } from "../../routes";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    //Separate Props Object and
    //Has a property called Query
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0], //Summary is a Object , It just
      //looks like we are accesssing it like an array
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
      //Above Elements are returned like a props .
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      approversCount,
      requestsCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The Manager Created this Campaign and Create Requests to withdraw money",
        style: { overflowWrap: "break-word" }
        //fluid: true
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (In Wei)",
        description:
          "You must atleast contribute this much Wei to become an Approver",
        style: {
          overflowWrap: "break-word"
        }
        //fluid: true
      },

      {
        header: requestsCount,
        meta: "Number of Requests",
        description: "Request Must be Approved by Approver",
        style: {
          overflowWrap: "break-word"
        }
        //fluid: true
      },

      {
        header: approversCount,
        meta: "Number of Approvers",
        description: "Number of people who have donated to Campaign",
        style: {
          overflowWrap: "break-word"
        }
        //fluid: true
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Balance in (Ether)",
        description: "How much money does campaign have left to spend ",
        style: {
          overflowWrap: "break-word"
        }
        //fluid: true
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3> Campaign Show </h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <Contribute address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests/`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
