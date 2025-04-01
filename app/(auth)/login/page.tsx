"use client";
import { API_URL } from "@/constants";
import { Input, Button} from "@heroui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function LoginPage() {
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent) => {
        setSubmitting(true);
        e.preventDefault()
        const formData = new FormData(e.target);
        let authData: any = {}
        authData.userEmail = formData.get("UserEmail");
        authData.userPassword = formData.get("UserPassword");
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                ...authData
            }, {
                withCredentials: true,
            });
            if (response.status === 201) router.push('/dashboard')
            setSubmitting(false);
        } catch (e) {
            setSubmitting(false);
        }
        return;
    }
    return (
        <form className="bg-orange-500 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
            <p className="text-2xl my-4 text-white">Iniciar Sesión<span></span></p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" name="UserEmail" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" name="UserPassword" type="password" isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary" type="submit" disabled={submitting}>{submitting ? "Enviando..." : "Iniciar Sesión"}</Button>
                <p className="text-white">No tienes cuenta? <Link href="/signup" className="text-red-600 underline">Registrate</Link></p>
            </div>
        </form>
    );
}