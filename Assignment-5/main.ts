type Address = {
    city ?: string;
    state ?: string;
    pincode : number
}

interface Person {
    name : string;
    age ? : number;
    email: string;
    phoneNumber : number;
    address?: Address
}

type MakeAllRequired<Type> = {
    [Property in keyof Type] -? : Type[Property] ; //making the properties of given type as required....
}


type RequiredPerson = MakeAllRequired<Person>;

function printByConcatenatingProperties<Type> (item: Type): void {
    let details = "";
    for (const key in item) {
        let k = key as keyof Type;
        //console.log(k);
        if(typeof item[k] === "string"){           //It only prints whose values are of string type....
            details += String(k)+`: ${item[k]}, `; 
        }
    }
    details = details.slice(0, details.length-2);
    console.log(details);
}

namespace Util {

    export function concatAllProperties(item : {[property: string]: any}) : string {

        let allDetails = '';
        
        function concat(ele : {[property: string] : any}): void {
            
            for(const property in ele) {
                let value = ele[property];

                if(typeof value === 'object') {
                    concat(value);
                }
                else {
                    allDetails += `${property} : ${value}, ` 
                }
            }
        }
        concat(item);
        allDetails = allDetails.slice(0, allDetails.length - 2);
        return allDetails;
    }
}


let person1 : Person = {
    name: "Varun",
    email: "varunmartha@gmail.com", 
    phoneNumber : 6303522765
}


printByConcatenatingProperties(person1);

let person2 : RequiredPerson = {
    name: "Riya",
    age : 21,
    email: "riya@gmail.com",
    phoneNumber : 9106543344,
    address: {
        city: "Warangal",
        state: "Telangana",
        pincode : 506006
    }
}
printByConcatenatingProperties(person2);

console.log(Util.concatAllProperties(person2));

