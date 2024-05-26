let a=300

if(true)
    {
        let a=2
        let b=3
        console.log("inner",a);
    }
    console.log(a);

function one()
{
    const username="hitesh"
    function two()
    {
        const age=20
        console.log( username);
    }
    two()
}
one()


if(true)
    {
        const username="hitesh"
        if(username==="hitesh")
            {
                const website=" youtube"
                console.log(username + website);
            }
    }
//++++++++++++++++++++++++++++instresting+++++++++++++++++++++++
console.log(addone(5))
function addone(num)
{
    return num+1
}


const addTwo=function(num)
{
    return num+3
}
console.log(addTwo(9));