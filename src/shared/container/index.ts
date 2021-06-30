import { EmployeeRepository } from "src/repositories/EmployeeRepository";
import { IEmployeeRepository } from "src/repositories/IEmployeeRepository";
import { container } from "tsyringe";


container.registerSingleton<IEmployeeRepository>(
    "EmployeeRepository",
    EmployeeRepository
)