import { v4 as uuidv4 } from "uuid";

class Employer {

    id: string;
    age: string;
    employerName: string
    office: string

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }

}

export { Employer }