'use client'

import { Manager } from "@/entities";
import { Button, Input } from "@heroui/react";
import { useState } from "react";
import { generate } from "generate-password";
import { LuEye } from "react-icons/lu";
import registerManager from "@/actions/users/register-manager";

export default function FormCreateUserManager({ manager }: { manager: Manager }) {
    const [password, setPassword] = useState<string>();
    const [visible, setVisible] = useState<boolean>(false);
    const { managerId } = manager;
    const registerManagerById = registerManager.bind(null, managerId)
    return (
        <form action={registerManagerById} className="py-10 flex flex-col gap-2">
            <h1 className="text-white text-xl text-center">Crear Usuario</h1>
            <Input name="userEmail" label="Correo de Cuenta" />
            <Input value={password} type={visible ? "text" : "password"}
                name="userPassword"
                label="Contraseña"
                endContent={<button type="button" onMouseUp={() => setVisible(false)} onMouseDown={() => setVisible(true)}>
                    <LuEye size={25}/>
                </button>} />
            <Button color="danger" onPress={() => {
                setPassword(generate({
                    length: 10
                }))
            }}>
                Generar Contraseña
            </Button>
            <Button type="submit" color="primary">
                Crear Usuario
            </Button>
        </form>
    )
}