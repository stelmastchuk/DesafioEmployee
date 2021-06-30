import { Employer } from "src/entities/Employer"
import { document } from "../utils/dynamodbCliente"
import { ICreateEmployee, IEmployeeRepository } from "./IEmployeeRepository";

class EmployeeRepository implements IEmployeeRepository {


    async create({ age, name, office }: ICreateEmployee): Promise<void> {

        const employer = new Employer();

        const id = employer.id

        try {

            await document.put({
                TableName: "Employeers",
                Item: {
                    id,
                    age,
                    name,
                    office
                }
            }).promise();


        } catch (error) {

            throw new Error(error);
        }

    }


}

export { EmployeeRepository }