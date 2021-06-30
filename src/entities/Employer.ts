import { v4 as uuidv4 } from "uuid";

class Employer {

    id: string;
    age: string;
    name: string
    office: string

    constructor() {
        this.id = uuidv4();
    }

}

export { Employer }