import updateManager from "@/actions/managers/update";
import { Manager } from "@/entities";
import { Button, Input } from "@heroui/react";
import SelectStore from "./SelectStore";
import { API_URL } from "@/constants";
import { authHeathers } from "@/helpers/authHeaders";

export default async function FormUpdateManager({ manager }: { manager: Manager }) {
    const updateManagerWithId = updateManager.bind(null, manager.managerId)
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers: {
            ... authHeathers()
        }
    })
    const stores = await responseStores.json()
    return (
        <form action={updateManagerWithId} className="bg-orange-400 rounded-md">
            <h1>
                Actualizar Manager
            </h1>
            <Input
                defaultValue={manager.managerFullName}
                placeholder="Marco Aurelio"
                name="managerFullName"
            />
            <Input
                defaultValue={manager.managerEmail}
                placeholder="manager@ocso.com"
                name="managerEmail"
            />
            <Input
                defaultValue={String(manager.managerSalary)}
                placeholder="12000"
                name="managerSalary"
            />
            <Input
                defaultValue={manager.managerPhoneNumber}
                placeholder="43298402843"
                name="managerPhoneNumber"
            />
            <SelectStore stores={stores} defaultStore={manager?.location?.locationId}/>
            <Button color="primary" type="submit">
                Actualizar
            </Button>
        </form>
    )
}