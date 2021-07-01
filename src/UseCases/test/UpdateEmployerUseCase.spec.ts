
import { EmployeeRepositoryInMemory } from "src/repositories/Repository/EmployeeRepositoryInMemory";
import { CreateEmployerUseCase } from "../CreateEmployerUseCase"
import { UpdateEmployerUseCase } from "../UpdateEmployerUseCase";



let createEmployerUseCase: CreateEmployerUseCase;
let employeeRepositoryInMemory: EmployeeRepositoryInMemory;
let updateEmployerUseCase: UpdateEmployerUseCase;

describe("Update Employer", () => {

    beforeEach(() => {
        employeeRepositoryInMemory = new EmployeeRepositoryInMemory();
        createEmployerUseCase = new CreateEmployerUseCase(
            employeeRepositoryInMemory
        );
        updateEmployerUseCase = new UpdateEmployerUseCase(
            employeeRepositoryInMemory
        )
    });


    it("should be able to update a  Employee", async () => {

        const employee = {
            employeName: "Tester",
            age: "22",
            office: "test",
        };

        const employeeCreate = await createEmployerUseCase.execute({
            employerName: employee.employeName,
            age: employee.age,
            office: employee.office,
        });


        const updateCreated = await updateEmployerUseCase.execute({ id: employeeCreate.id, employerName: "teste2", age: "35", office: "tes2" });

        const updateSearch = await employeeRepositoryInMemory.findById(employeeCreate.id);

        expect([updateCreated]).toEqual(updateSearch);
    });




})