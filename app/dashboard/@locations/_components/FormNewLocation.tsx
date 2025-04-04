import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";
import DeleteLocation from "@/actions/locations/delete";

export default async function FormNewLocation({store}: {store: string | string[] | undefined}) {
    if(store) return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/managers`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const reponseLocations = await axios.get(`${API_URL}/locations`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
            <Input label="Nombre" placeholder="Ocso Juriquilla" name="locationName" />
            <Input label="Dirección" placeholder="Av De La Luz S/N" name="locationAddress" />
            <Input label="Latitud" placeholder="-120" name="locationLat" />
            <Input label="Longitud" placeholder= "20" name="locationLng" />
            <SelectManager managers={responseManagers.data} locations = {reponseLocations.data} />
            <Button type="submit" color = "primary"> Subir </Button>
        </form>
    )
}