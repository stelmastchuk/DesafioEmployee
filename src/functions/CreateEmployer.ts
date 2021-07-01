import { ICreateEmployeeDTO } from "@repositories/DTO/ICreateEmployeeDTO";
import { EmployeeRepository } from "@repositories/Repository/EmployeeRepository";
import { CreateEmployerUseCase } from "src/UseCases/CreateEmployerUseCase";

export const handle = async (event) => {

    const { office, employerName, age } = JSON.parse(event.body) as ICreateEmployeeDTO

    const employeeRepository = new EmployeeRepository();
    const createEmployerUseCase = new CreateEmployerUseCase(employeeRepository);

    await createEmployerUseCase.execute({ office, employerName, age });

    return {
        statusCode: 201,
        body: JSON.stringify({ message: "Employer Created!" }),
        headers: { "Content-type": "application/json" },
    }


};