'use server'

import { API_URL } from "@/constants";
import { authHeathers } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteManager(managerId: string, formData: FormData) {
    const response = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "DELETE",
        headers: {
            ...authHeathers(),
        },
    })
    if (response.status === 200){
        revalidateTag("dashboard:managers")
        redirect("/dashboard/managers")
    }
}