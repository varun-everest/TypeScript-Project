let senetence = "This is the first session on typeScript";
let age: number = 21;  
senetence = '2332';

let text : string = "THis is sample text"; //THis is the way of defining type

let isDone : boolean = true;

isDone = false;

let names: string[] = ["varun", "suresh", "usha"];

function add (num1: number, num2: string): string {
    return num1 + num2;
}

interface ShoppingItem {  //The way of defining the type of an item
    name : string ;
    isMarked : boolean ;
    isDeleted : boolean ;
}

let item1 : ShoppingItem = {
    name : "Earphones",
    isMarked : false,
    isDeleted : false
}

interface Item {  //One way of defining the type of an item
    name : string | number; //union types (It can take both string type values and numbers)
    isMarked : boolean ;
    isDeleted?: boolean ;   //either it is boolean or undefined type.
}

//Task -----> difference between type and interface!!!
//create a student object with properties id, name , interested_courses

//enums and generics, tsconfig.json, modules, import and export
