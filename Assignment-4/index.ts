type Address = {
    city : string;
    state : string;
    pincode : number
}

interface Student {
    name : string;
    age : number;
    email : string ;
    address : Address
}


//Task - 2; ---->   Create a type which takes input type and returns Yes if passed type is string otherwise No.....
type isString<Type> = Type extends string ? "Yes" : "No" ;

type t1 = isString<string> ;
type t2 = isString<number> ;

//Task - 3 ; --> Employee

interface Employee {
    name : string;
    id : number;
    lead ? : Employee ;
}

