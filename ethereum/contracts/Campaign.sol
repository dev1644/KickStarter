pragma solidity ^0.4.24;


contract CampaignFactory {
    
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum)public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployed() public view returns(address[]){
        return deployedCampaigns;
    }
}

contract Campaign{
    
    struct Request{
        string description;
        address recipient;
        uint value;
        bool complete;
        mapping (address => bool) approvals;
        uint approvalCount;
        
    }
    
    Request[] public requests;
    
    address public manager;
    uint public minimumContribution;
    mapping(address => bool)public approvers;
    uint public approversCount;
    
    
    modifier onlyManager(){
        require(manager==msg.sender);
        _;
    }
    
    constructor(uint minimum , address _manager) public{
        manager = _manager;
        minimumContribution = minimum;
    }
 
    function contribute() public payable{

        require(msg.value >= minimumContribution);
        approvers[msg.sender] = true; 
        approversCount++;

    }
    
    function createRequest (string _description, address _recipient, uint _value)public onlyManager {
        
        Request memory req = Request({
        description:_description,
        recipient:_recipient,
        value:_value,
        complete:false,
        approvalCount:0
                });
                requests.push(req);
        
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
      }
    
    function finalizeRequest(uint index) public onlyManager{
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approvalCount > approversCount / 2);
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns(uint , uint ,uint ,uint ,address)
    {
        return(
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount () public view returns (uint)
    {
        return requests.length;
    }
    
    function kill () public onlyManager{
        selfdestruct(manager);
    }

}