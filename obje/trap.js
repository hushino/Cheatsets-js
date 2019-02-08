function merge(arr1, arr2) {
    const arr1ById = arr1.reduce((map, next) => (map[next.id] = next, map), {});
    const byId = arr2.reduce((map, next) => (map[next.id] = next, map), arr1ById);
    const asd = Object.entries(byId).map((arr) => arr[1]);
    //return asd[1].total;
    return asd;
}
// actualiza valores teniendo en cuenta el id
var oldorders = [
    { id: 1, total: [45.341] },
    { id: 2, total: [6.341] },
    { id: 3, total: [43.341] }
]
var neworders = [
    { id: 1, total: 32442 },
    { id: 2, total: 6.341 },
    { id: 3, total: 98.341 },
    { id: 4, total: 4343.341 }
]
console.log(merge(oldorders, neworders));
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    acc[index] = flatten;
    console.log(
        flatten
    )
    return flatten;
  });
var users = [
    {
        name: 'a',
        orders: [
            { total: 23 },
            { total: 68 },
            { total: 52 }
        ]
    },
    {
        name: 'a',
        orders: [
            { total: 100 },
            { total: 200 },
            { total: 300 }
        ]
    }
]
var asd = users.reduce((almacena, user) => {
    return [...almacena, ...user.orders]
}, []);
//console.log(asd);
var asde = users.reduce((orders, user) => [...orders, ...user.orders.map(order => order.total)], []);
//console.log(asde)


var asdew = users.reduce((total, user) =>
    total + user.orders.reduce((subtotal, order) =>
        subtotal + order.total,
        0),
    0);

//console.log(asdew);
// junta ambos arreglos
var users2 = [{
    id: 1,
    name: 'a'
},
{
    id: 2,
    name: 'b'
}]
var orders2 = [{
    user: 1, total: 9923.9213

}, {
    user: 2, total: 1234.123
}]

/* usersById = users2.reduce((map, user) => {
    return (map[user.id] = user,map)
},{}); */
//operator coma , remplaza al return
usersById = users2.reduce((map, user) => (map[user.id] = user, map), {});
var d = orders2.map(order => {
    return {
        ...order,
        ...usersById[order.user],
    };
})
//console.log(d)
//https://www.youtube.com/watch?v=tR2jJJ030ug&t
