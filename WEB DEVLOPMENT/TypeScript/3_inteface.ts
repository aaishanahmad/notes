// type ~ inteface

interface person 
{
    name: string;
    age: number;
    programmer: boolean;
}



const p1: person={
    name: "ahsan",
    age: 20,
    programmer:true
}

const p2: person={
    name: "Aklakh",
    age: 20,
    programmer:false
}



/// interface with extend

interface student extends person 
{
    roll: number;
    class: string;
}



const s1: student= 
{
    name: "fazil",
    age: 19,
    roll: 21,
    class: "BCA",
    programmer:true
}

/// interface mergin -> if two or more interface with same name then it auto merge

interface client
{
    name: string;
    id: string;
}
    
interface client 
{
    phone_no: number;
}
    
const c1: client =  {
    name:"my name",
    id:"12hu8",
    phone_no:78909
}



