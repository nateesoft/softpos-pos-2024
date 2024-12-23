const list = [
    {id: 1, qty: 2, search: "555"},
    {id: 1, qty: 3, search: "111"},
    {id: 1, qty: 1, search: "222"},
    {id: 1, qty: 7, search: "555"},
    {id: 1, qty: 0, search: "555"},
]

const result = list.reduce((partialSum, a) => partialSum + a.qty, 0)
console.log(result)
