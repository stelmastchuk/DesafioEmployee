import { IEmployeeRepository } from "@repositories/Repository/IEmployeeRepository";

class ListAllEmployersUseCase {

    private employeeRepository: IEmployeeRepository
    constructor(employeeRepository: IEmployeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    async execute() {

        const employer = this.employeeRepository.listAll();

        return employer;

    }



}

export { ListAllEmployersUseCase }