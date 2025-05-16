import createEmployee from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { authHeathers } from "@/helpers/authHeaders";
import { Button, Input } from "@heroui/react";
import SelectLocations from "./SelectLocation";

export default async function FormCreateEmployee (){
    const responseLocation = await fetch(`${API_URL}/locations`, {
        headers: {
            ... authHeathers()
        }
    })
    const locations = await responseLocation.json();
    return (
        <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
            <Input isRequired = {true} label = "Nombre" name="employeeName" placeholder="Marco"/>
            <Input isRequired = {true} label = "Apellidos" name="employeeLastName" placeholder="Aurelio"/>
            <Input isRequired = {true} label = "Correo Electrónico" name="employeeEmail" placeholder="marco@gmail.com"/>
            <Input isRequired = {true} label = "Número de Teléfono" name="employeePhoneNumber" placeholder="444XXXXXXX"/>
            <Input label = "Foto" type="file" name="employeePhoto"/>
            <SelectLocations stores={locations}/>
            <Button type="submit" color="primary">
                Crear Empleado
            </Button>
        </form>
    )
}