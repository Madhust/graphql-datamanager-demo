var {schema} = require('ej2-graphql-adaptor/schema/schema');
module.exports = 
`
${schema}
type Order {
    CustomerID: String!
    Freight: Float!
    ShipName: String!
}

type Query {
    orders(datamanager: DataManager): [Order]
}
`