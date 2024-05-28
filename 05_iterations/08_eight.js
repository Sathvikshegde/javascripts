const myArr=[1,2,3]

let arr=myArr.reduce((acc,curval)=>{ return acc+curval}
,0)
console.log(arr);



const shoppingcart=[
    {
        itemname:"js",
        price: 999
    },
    {
        itemname:"react",
        price:1299
    },

    {
        itemname:"dsa",
        price:1599
    },
    {
        itemname:"data science",
        price:2999
    }
]

let values=shoppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(values);