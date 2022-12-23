// Map in array
const arr=[5,10,15,20,25]
function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}

const out1=arr.map(double);
console.log(out1);
const out2=arr.map(triple);
console.log(out2);
const out3=arr.map((x) => x.toStirng(2))
console.log(out3);


// Filter In Array
const arr1=[2,5,8,50,40,23]
const o1=arr1.filter(isOdd)
console.log(o1)
function isOdd(x){
    return x%2;
}

const o2 =arr1.filter((x) => x>5);
console.log(o2);

// Reduce In Array
const arr3=[5,3,7,10,54,85,24]
function findSum (arr3){                  //Conventional way
    let sum=0;         
    for(let i=0;i<=arr3.length;i++){
        sum=sum+arr3[i];
    }
    return sum;
}
console.log(findSum (arr3))
const output=arr3.reduce(function(ac,cur){
    ac=ac+cur;
    return ac;
},0)
console.log(output);


function findMax(arr3){
    let max=0;
    for(let i=0;i<=arr3.length;i++){
    if(arr3[i]>max){
        max=arr3[i]
    }
    }
    return max;
}
console.log(findMax(arr3))
const red=arr3.reduce(function(max,cu){
    if(cu>max){
        mac=cu;
    }
    return max;
},0)
console.log(red);

const users=[
    {name:"chay",age:16,company:"prasthana"},
    {name:"chotu",age:16,company:"prasthana"},
    {name:"nani",age:20,company:"google"},
    {name:"pru",age:18,company:"Spacex"},
]
// list of names with map
const out=users.map(x=>x.name+" "+x.age);
console.log(out)

//list  how many has same age with reduce
const ans=users.reduce(function(ac,cu){
if(ac[cu.age]){
    ac[cu.age]=++ac[cu.age];
}
else{
    acc[cu.age]=1;
}
},{})
console.log(ans)

// list age < 19 with name only
const ans1=users.filter(x=>x.age<19).map((x)=>x.name);
console.log(ans1)