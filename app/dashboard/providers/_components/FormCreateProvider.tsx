import createProvider from "@/actions/providers/create";
import { Button, Input } from "@heroui/react";

export default function FormCreateProvider(){
    return (
        <form action={createProvider} className="flex flex-col gap-2 flex-grow-0">
            <h1 className="text-2xl text-white ">Crear Proveedor</h1>
            <Input label= "Nombre" placeholder= "CocaCola" name="providerName"/>
            <Input label= "Correo" placeholder= "coca@gmail.com" name="providerEmail"/>
            <Input label= "Número" placeholder= "464XXXXX" name="providerPhoneNumber"/>
            <Button color="primary" type="submit">Crear Proveedor</Button>
        </form>
    )
}