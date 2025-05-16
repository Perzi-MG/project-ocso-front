import { API_URL } from "@/constants";
import { authHeathers } from "@/helpers/authHeaders";
import { Employee } from "@/entities";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import EmployeeDataCard from "./_components/EmployeeDataCard";
import CreateUser from "./_components/CreateUser";
import FormCreateUserEmployee from "./_components/FormCreateUser";
import { LuUser } from "react-icons/lu";

export default async function EmployeePage({ params }: { params: { id: string } }) {
    const responseEmployee = await fetch(`${API_URL}/employees/${params.id}`, {
        headers: {
            ...authHeathers()
        }
    })
    const employee: Employee = await responseEmployee.json()
    return (
        <div className="w-full h-[90vh] flex flex-row items-center justify-center">
            <EmployeeDataCard employee={employee}>
                <CreateUser icon={<LuUser size={20} />} photo={employee.employeePhoto}>
                    <FormCreateUserEmployee employee={employee} />
                </CreateUser>
            </EmployeeDataCard>
            <FormUpdateEmployee employee={employee} />
        </div>
    )
}