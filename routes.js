const routes = require('next-routes')();//Here Require Statements Returns 
//the function , which will invoked immediately



routes
    .add('/campaigns/new', '/campaigns/new') //ITs Need to be Added Before
    .add('/campaigns/:address', '/campaigns/show') 
        .add('/campaigns/:address/requests', '/campaigns/requests/index')
        .add('/campaigns/:address/requests/new', '/campaigns/requests/new');
    

//First Argument is the Pattern (: It is WildCard)
//Second Arguments Which Route is to Show or What Component to Show


module.exports = routes;// It is going to Export Helpers for navigation.
 