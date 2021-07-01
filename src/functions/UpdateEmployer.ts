import { IUpdateEmployee } from "@repositories/DTO/IUpdateEmployeeDTO";
import { EmployeeRepository } from "@repositories/Repository/EmployeeRepository";
import { UpdateEmployerUseCase } from "src/UseCases/UpdateEmployerUseCase";





export const handle = async (event) => {

    const { id } = event.pathParameters

    const { office, age, employerName } = JSON.parse(event.body) as IUpdateEmployee


    const employeeRepository = new EmployeeRepository();
    const updateEmployerUseCase = new UpdateEmployerUseCase(employeeRepository);

    const res = await updateEmployerUseCase.execute({ id, office, age, employerName });




    if (res) {

        return {
            statusCode: 400,
            body: JSON.stringify({ message: "User does not exists!" }),
            headers: { "Content-type": "application/json" },
        }


    } else {

        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Update Sucess!" }),
            headers: { "Content-type": "application/json" },
        }

    };


};