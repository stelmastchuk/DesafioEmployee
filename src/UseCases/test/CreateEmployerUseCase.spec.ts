
import { EmployeeRepositoryInMemory } from "src/repositories/Repository/EmployeeRepositoryInMemory";
import { CreateEmployerUseCase } from "../CreateEmployerUseCase"



let createEmployerUseCase: CreateEmployerUseCase;
let employeeRepositoryInMemory: EmployeeRepositoryInMemory;


describe("Create Employer", () => {

    beforeEach(() => {
        employeeRepositoryInMemory = new EmployeeRepositoryInMemory();
        createEmployerUseCase = new CreateEmployerUseCase(
            employeeRepositoryInMemory
        );

    });


    it("should be able to create a new Employee", async () => {
        const employee = {
            employeName: "Tester",
            age: "22",
            office: "test"
        };
        await createEmployerUseCase.execute({
            employerName: employee.employeName,
            age: employee.age,
            office: employee.office
        });

        const categoryCreated = await employeeRepositoryInMemory.findByName(
            employee.employeName
        );


        expect(categoryCreated).toHaveProperty("id");
    });




})