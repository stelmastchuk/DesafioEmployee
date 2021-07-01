import { ICreateEmployeeDTO } from "@repositories/DTO/ICreateEmployeeDTO";
import type { IEmployeeRepository } from "src/repositories/Repository/IEmployeeRepository";


class CreateEmployerUseCase {

    private employeeRepository: IEmployeeRepository

    constructor(employeeRepository: IEmployeeRepository) {

        this.employeeRepository = employeeRepository;

    }

    async execute({ id, office, employerName, age }: ICreateEmployeeDTO): Promise<any> {

        const employee = await this.employeeRepository.create({ office, employerName, age, id });

        return employee;
    }




}

export { CreateEmployerUseCase }