import { EmployeeRepository } from "@repositories/Repository/EmployeeRepository";
import { ListAllEmployersUseCase } from "src/UseCases/ListAllEmployersUseCase";



export const handle = async (event) => {


    const employeeRepository = new EmployeeRepository();
    const listAllEmployerUseCase = new ListAllEmployersUseCase(employeeRepository);

    const employer = await listAllEmployerUseCase.execute();




    return {
        statusCode: 201,
        body: JSON.stringify({ employer }),
        headers: { "Content-type": "application/json" },
    }


};