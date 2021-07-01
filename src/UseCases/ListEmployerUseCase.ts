import { IEmployeeRepository } from "@repositories/Repository/IEmployeeRepository";


class ListEmployerUseCase {
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

        const employer = await this.employeeRepository.list(id);


        return employer;
    }



}
export { ListEmployerUseCase }