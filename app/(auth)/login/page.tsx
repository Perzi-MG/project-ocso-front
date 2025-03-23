"use client";
import { API_URL } from "@/constants";
import { Input, Button, user } from "@heroui/react";
import axios from "axios";
import Link from "next/link";
export default function LoginPage(){
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        let authData: any = {}
        authData.userEmail = formData.get("UserEmail");
        authData.userPassword = formData.get("UserPassword");
        const {data} = await axios.post(`${API_URL}/auth/login`, {
            ...authData
        })
        console.log(data);
        return;
    }
    return (
        <form className="bg-orange-500 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
        <p className="text-2xl my-4 text-white">Iniciar Sesión<span></span></p>
        <div className="flex flex-col gap-2 my-4 items-center">
            <Input label= "Email" name= "UserEmail" type="email" isRequired= {true} size="sm"/>
            <Input label= "Contraseña" name= "UserPassword" type="password" isRequired= {true} size="sm"/>
        </div>
        <div className="flex flex-col items-center gap-2">
            <Button color = "primary" type="submit">Iniciar Sesión</Button>
            <p className="text-white">No tienes cuenta? <Link href="/signup" className="text-red-600 underline">Registrate</Link></p>
        </div>
    </form>
    );
}