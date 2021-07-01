import { IUpdateEmployee } from "@repositories/DTO/IUpdateEmployeeDTO";
import { IEmployeeRepository } from "@repositories/Repository/IEmployeeRepository";





class UpdateEmployerUseCase {


    private employeeRepository: IEmployeeRepository

    constructor(employeeRepository: IEmployeeRepository) {

        this.employeeRepository = employeeRepository;

    }

    async execute({ id, office, age, employerName }: IUpdateEmployee): Promise<any> {

        const idAlredyExists = await this.employeeRepository.findById(id);

        console.log(idAlredyExists);

        if (!idAlredyExists) {
            return true;
        }

        const employee = await this.employeeRepository.update({ id, office, age, employerName });


        return employee;
    }



}

export { UpdateEmployerUseCase }