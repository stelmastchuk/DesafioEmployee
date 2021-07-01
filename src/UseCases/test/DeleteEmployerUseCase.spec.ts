
import { EmployeeRepositoryInMemory } from "src/repositories/Repository/EmployeeRepositoryInMemory";
import { CreateEmployerUseCase } from "../CreateEmployerUseCase"
import { DeleteEmployerUseCase } from "../DeleteEmployerUseCase";



let createEmployerUseCase: CreateEmployerUseCase;
let employeeRepositoryInMemory: EmployeeRepositoryInMemory;
let deleteEmployerUsecase: DeleteEmployerUseCase;


describe("Delete Employer", () => {

    beforeEach(() => {
        employeeRepositoryInMemory = new EmployeeRepositoryInMemory();
        createEmployerUseCase = new CreateEmployerUseCase(
            employeeRepositoryInMemory
        );
        deleteEmployerUsecase = new DeleteEmployerUseCase(employeeRepositoryInMemory);

    });


    it("should be able to delete a  Employee", async () => {
        const employee = {
            employeName: "Tester",
            age: "22",
            office: "test"
        };
        const employe = await createEmployerUseCase.execute({
            employerName: employee.employeName,
            age: employee.age,
            office: employee.office
        });


        await deleteEmployerUsecase.execute(employe.id);

        const categoryCreated = await employeeRepositoryInMemory.findById(
            employe.id
        );


        expect(categoryCreated).toEqual([]);
    });




})