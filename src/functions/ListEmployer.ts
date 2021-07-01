import { EmployeeRepository } from "@repositories/Repository/EmployeeRepository";
import { ListEmployerUseCase } from "src/UseCases/ListEmployerUseCase";

export const handle = async (event) => {

    const { id } = event.pathParameters

    const employeeRepository = new EmployeeRepository();
    const listEmployerUseCase = new ListEmployerUseCase(employeeRepository);

    const employer = await listEmployerUseCase.execute(id);


    if (employer === true) {

        return {
            statusCode: 400,
            body: JSON.stringify({ message: "User does not exists!" }),
            headers: { "Content-type": "application/json" },
        }


    } else {

        return {
            statusCode: 201,
            body: JSON.stringify({ employer }),
            headers: { "Content-type": "application/json" },
        }

    };



};