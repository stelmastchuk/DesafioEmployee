
interface ICreateEmployee {
    name: string;
    age: string;
    office: string
}


interface IEmployeeRepository {

    create(date: ICreateEmployee): Promise<void>;

}

export { ICreateEmployee, IEmployeeRepository }
