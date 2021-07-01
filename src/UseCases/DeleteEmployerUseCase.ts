import { IEmployeeRepository } from "@repositories/Repository/IEmployeeRepository";

class DeleteEmployerUseCase {

    private employeeRepository: IEmployeeRepository

    constructor(employeeRepository: IEmployeeRepository) {

        this.employeeRepository = employeeRepository;

    }
    async execute(id: string): Promise<any> {

        const idAlredyExists = await this.employeeRepository.findById(id);

        console.log(idAlredyExists);

        if (!idAlredyExists) {
            return true;
        }

        await this.employeeRepository.delete(id);



    }




}

export { DeleteEmployerUseCase }