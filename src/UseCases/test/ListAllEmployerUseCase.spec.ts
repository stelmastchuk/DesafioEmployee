
import { EmployeeRepositoryInMemory } from "src/repositories/Repository/EmployeeRepositoryInMemory";
import { CreateEmployerUseCase } from "../CreateEmployerUseCase"
import { ListAllEmployersUseCase } from "../ListAllEmployersUseCase";




let createEmployerUseCase: CreateEmployerUseCase;
let employeeRepositoryInMemory: EmployeeRepositoryInMemory;
let listAllEmployerUseCase: ListAllEmployersUseCase;


describe("List Alls Employee", () => {

    beforeEach(() => {
        employeeRepositoryInMemory = new EmployeeRepositoryInMemory();
        createEmployerUseCase = new CreateEmployerUseCase(
            employeeRepositoryInMemory
        );
        listAllEmployerUseCase = new ListAllEmployersUseCase(employeeRepositoryInMemory);

    });


    it("should be able to list all Employee ", async () => {
        const employe = await createEmployerUseCase.execute({
            employerName: "Tester",
            age: "28",
            office: "TesteOffice"
        });


        const listemployee = await listAllEmployerUseCase.execute();


        expect(listemployee).toEqual([employe]);
    });




})