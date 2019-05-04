export class Storage {
    static setLocalItem(key:string, val: any){
    
        if(val) {
            if(typeof val === 'object'){
                val = JSON.stringify(val);
            }
            localStorage.setItem(key, val);
        }

    }
    static getLocalItem(key:string){
         
        let val:string = localStorage.getItem(key);
        if(val) {
            if(val.indexOf("{") > -1) {
                val = JSON.parse(val);
            } else if(val.indexOf("[") > -1) {
                val = JSON.parse(val);
            }
            return val;
        } else {
            return null;
        }
    }
    static  removeLocalItem(key: string) {
       
        localStorage.removeItem(key);
    }

}