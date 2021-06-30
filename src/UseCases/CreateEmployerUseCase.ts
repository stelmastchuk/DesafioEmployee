import { inject, injectable } from "tsyringe";

import { IEmployeeRepository } from "../repositories/IEmployeeRepository";

interface IRequest {
    office: string;
    name: string;
    age: string;
}

@injectable()
class CreateEmployerUseCase {

    constructor(
        @inject("EmployeeRepository")
        private employeeRepository: IEmployeeRepository) { }

    async execute({ office, name, age }: IRequest): Promise<void> {

        await this.employeeRepository.create({ office, name, age });

    }


}

export { CreateEmployerUseCase }