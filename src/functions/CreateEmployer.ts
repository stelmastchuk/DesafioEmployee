import "reflect-metadata";
import { CreateEmployerUseCase } from "src/UseCases/CreateEmployerUseCase";
import { container } from "tsyringe";


interface IRequest {
    office: string;
    name: string;
    age: string;
}




export const handle = async (event) => {

    const { office, name, age } = JSON.parse(event.body) as IRequest

    const createEmployerUseCase = container.resolve(CreateEmployerUseCase)

    createEmployerUseCase.execute({ office, name, age });


    return {
        statusCode: 201,
        body: JSON.stringify({ message: "Employeer Created!" }),
        headers: { "Content-type": "application/json" },
    }
};