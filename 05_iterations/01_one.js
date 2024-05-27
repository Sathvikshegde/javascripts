// // for
// for (let i = 0; i <10; i++) {
// const element =i;
// console.log(element);
// if(element==5)
//     {
//         console.log("5 is best number");
//     }
// } 

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value is ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         const element = j;
//         console.log(`inner loop value is ${j} and inner loop is ${i} `);

        
//     }

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(i+'*'+j+ '='+i*j);
    }
    
}

let myArr=["flash","batman","superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
    
}
    
// breaks and continue

for (let index = 1; index <10; index++) {
    if(index==5)
        {
            console.log("detected 5");
            continue
        }
    console.log(`value of i is ${index}`);
    
}