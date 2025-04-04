import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";

export default async function FormNewLocation() {
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
        <form action={createLocation}>
            <Input label="Nombre" placeholder="Ocso Juriquilla" name="locationName" />
            <Input label="Dirección" placeholder="Av De La Luz S/N" name="locationAddress" />
            <Input label="Latitud" placeholder="-120" name="locationLat" />
            <Input label="Longitud" placeholder= "20" name="locationLng" />
            <SelectManager managers={responseManagers.data} locations = {reponseLocations.data} />
            <Button type="submit"> Subir </Button>
        </form>
    )
}