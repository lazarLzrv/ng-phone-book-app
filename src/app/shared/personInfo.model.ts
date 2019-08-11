export class PersonInfo{  
    constructor( 
        public firstName: string,
        public lastName: string,
        public phoneNumbers: {
            homeNumber: number, officeNumber: number, workNumber: number,
        }
    ){}
}