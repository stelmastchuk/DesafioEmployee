import { EmployeeRepository } from "@repositories/Repository/EmployeeRepository";
import { DeleteEmployerUseCase } from "src/UseCases/DeleteEmployerUseCase";

export const handle = async (event) => {

    const { id } = event.pathParameters;


    const employeeRepository = new EmployeeRepository();
    const deleteEmployerUseCase = new DeleteEmployerUseCase(employeeRepository);

    const res = await deleteEmployerUseCase.execute(id);


    if (res) {

        return {
            statusCode: 400,
            body: JSON.stringify({ message: "User does not exists!" }),
            headers: { "Content-type": "application/json" },
        }


    } else {

        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Delete Sucess!" }),
            headers: { "Content-type": "application/json" },
        }

    };

};





