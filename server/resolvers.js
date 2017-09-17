const data = [{ CustomerID:'Hawk', Freight: 34.4, ShipName: 'Rio Pass'},
{ CustomerID:'Lioz', Freight: 45.9, ShipName: 'Sea Shell'},
{ CustomerID:'Fury', Freight: 7.6, ShipName: 'Lv Service'}]

module.exports = {
    orders: function({datamanager}) {
        console.log(JSON.stringify(datamanager));
        return data.slice(datamanager.skip, datamanager.skip + datamanager.take);
    }
}