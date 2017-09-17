var { DataManager, Query, UrlAdaptor } = require('@syncfusion/ej2-data');
var { GraphQLAdaptor } = require('ej2-graphql-adaptor');

document.addEventListener('DOMContentLoaded', () => {
    var dm = new DataManager({
        url: 'http://localhost:4000/graphql',
        adaptor: new GraphQLAdaptor({
            response: {
                result: 'orders',
                count: 'count'
            },
            query: `query Order($datamanager: DataManager) {
                orders(datamanager: $datamanager) { 
                    CustomerID, 
                    Freight, 
                    ShipName 
                }
            }`
        })
    }).executeQuery(new Query().page(1, 2)
    .sortByDesc('CustomerID')
.where('CustomerID', '==', 'Husky').search('k', ['CustomerID']))
    .then((e) => {
        var t = '';
        e.result.forEach((item) => {
            t += '<tr><td>' + item.CustomerID + '</td><td>' + item.Freight + '</td><td>' + item.ShipName + '</td></tr>';
        });
        document.getElementById('datatable').tBodies[0].innerHTML = t;
    });
});