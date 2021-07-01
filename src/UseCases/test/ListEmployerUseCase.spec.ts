
import { EmployeeRepositoryInMemory } from "src/repositories/Repository/EmployeeRepositoryInMemory";
import { CreateEmployerUseCase } from "../CreateEmployerUseCase"
import { ListEmployerUseCase } from "../ListEmployerUseCase";



let createEmployerUseCase: CreateEmployerUseCase;
let employeeRepositoryInMemory: EmployeeRepositoryInMemory;
let listEmployerUseCase: ListEmployerUseCase;


describe("List Employer by id", () => {

    beforeEach(() => {
        employeeRepositoryInMemory = new EmployeeRepositoryInMemory();
        createEmployerUseCase = new CreateEmployerUseCase(
            employeeRepositoryInMemory
        );
        listEmployerUseCase = new ListEmployerUseCase(employeeRepositoryInMemory);

    });


    it("should be able to list a Employee by id", async () => {
        const employe = await createEmployerUseCase.execute({
            employerName: "Tester",
            age: "28",
            office: "TesteOffice"
        });

        const listemployee = await listEmployerUseCase.execute(employe.id);


        expect(listemployee).toEqual(employe);
    });




})