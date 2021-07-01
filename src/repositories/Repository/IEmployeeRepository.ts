import { ICreateEmployeeDTO } from "@repositories/DTO/ICreateEmployeeDTO";
import { IUpdateEmployee } from "@repositories/DTO/IUpdateEmployeeDTO";




interface IEmployeeRepository {

    create(date: ICreateEmployeeDTO): Promise<any>;
    update(date: IUpdateEmployee): Promise<any>;
    delete(id: string): Promise<any>;
    list(id: string): Promise<any>;
    findById(id: string): Promise<any>;
    listAll(): Promise<any>;
    findByName(employerName: string): Promise<any>;




}

export { IEmployeeRepository }
