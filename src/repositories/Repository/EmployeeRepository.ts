import { ICreateEmployeeDTO } from "@repositories/DTO/ICreateEmployeeDTO";
import { IUpdateEmployee } from "@repositories/DTO/IUpdateEmployeeDTO";
import { Employer } from "src/entities/Employer"
import { document } from "../../utils/dynamodbCliente"
import { IEmployeeRepository } from "./IEmployeeRepository";

class EmployeeRepository implements IEmployeeRepository {
    findByName(employerName: string): Promise<any> {
        throw new Error("Method not implemented.");
    }


    async create({ age, employerName, office }: ICreateEmployeeDTO): Promise<void> {

        const employer = new Employer();

        const id = employer.id

        try {

            await document.put({
                TableName: "Employeers",
                Item: {
                    id,
                    age,
                    employerName,
                    office
                }
            }).promise();


        } catch (error) {

            throw new Error(error);
        };

    }


    async update({ id, age, office, employerName }: IUpdateEmployee): Promise<void> {

        if (age) {

            await document.update({
                TableName: "Employeers",
                Key: { "id": id },
                UpdateExpression: "SET age = :a",
                ExpressionAttributeValues: {
                    ":a": age
                },

                ReturnValues: "UPDATED_NEW"
            }).promise();

        }

        if (office) {
            await document.update({
                TableName: "Employeers",
                Key: { "id": id },
                UpdateExpression: "SET office = :c",
                ExpressionAttributeValues: {
                    ":c": office


                },

                ReturnValues: "UPDATED_NEW"
            }).promise();
        }

        if (employerName) {
            await document.update({
                TableName: "Employeers",
                Key: { "id": id },
                UpdateExpression: "SET employerName = :d ",
                ExpressionAttributeValues: {
                    ":d": employerName

                },

                ReturnValues: "UPDATED_NEW"
            }).promise();
        }
    }


    async delete(id: string): Promise<void> {

        await document.delete({
            TableName: "Employeers",
            Key: { "id": id },
        }).promise();

    }


    async list(id: string): Promise<any> {

        const employer = await document.get({
            TableName: "Employeers",
            Key: { "id": id },
        }).promise();

        return employer.Item;

    }


    async findById(id: string): Promise<any> {

        const employer = await document.get({
            TableName: "Employeers",
            Key: { "id": id },
        }).promise();

        return employer.Item;
    }

    async listAll(): Promise<any> {

        const employer = await document.scan({
            TableName: "Employeers",
        }).promise();

        return employer.Items;


    }




}

export { EmployeeRepository }