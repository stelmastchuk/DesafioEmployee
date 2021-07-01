import { ICreateEmployeeDTO } from "@repositories/DTO/ICreateEmployeeDTO";
import { IUpdateEmployee } from "@repositories/DTO/IUpdateEmployeeDTO";
import { IEmployeeRepository } from "@repositories/Repository/IEmployeeRepository";
import { Employer } from "src/entities/Employer";

class EmployeeRepositoryInMemory implements IEmployeeRepository {

    employer: Employer[] = [];


    async create({ age, employerName, office }: ICreateEmployeeDTO): Promise<Employer> {

        const employer1 = new Employer();

        Object.assign(employer1, {
            age,
            employerName,
            office,
        });

        this.employer.push(employer1);

        return employer1;

    }
    async update({ age, employerName, office, id }: IUpdateEmployee): Promise<any> {

        const employerIndex = this.employer.findIndex(employerIndex => employerIndex.id === id);


        if (employerIndex < 0) {
            throw new Error("Id not exists");
        }

        if (age) {

            this.employer[employerIndex].age = age;
        }

        if (employerName) {

            this.employer[employerIndex].employerName = employerName;

        }

        if (office) {

            this.employer[employerIndex].office = office;
        }

        return this.employer[employerIndex];


    }
    async delete(id: string): Promise<any> {
        const employerIndex = this.employer.findIndex(employer1 => employer1.id == id);

        if (employerIndex < 0) {
            throw new Error("Id not exists");
        }

        this.employer.splice(employerIndex, 1);

    }
    async list(id: string): Promise<any> {
        const employerIndex = this.employer.findIndex(employer1 => employer1.id == id);

        if (employerIndex < 0) {
            throw new Error("Id not exists");
        }

        return this.employer[employerIndex];
    }

    async findById(id: string): Promise<any> {
        const employerID = this.employer.filter(employer1 => employer1.id == id);

        if (!employerID) {
            throw new Error("Id not exists");
        }

        return employerID;
    }


    async listAll(): Promise<any> {
        return this.employer;
    }


    async findByName(employerName: string): Promise<any> {
        const employee = this.employer.find(
            (employee) => employee.employerName === employerName
        );
        return employee;
    }


}

export { EmployeeRepositoryInMemory };