export namespace Util {

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