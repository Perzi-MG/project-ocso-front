'use server'

import { API_URL } from "@/constants";
import { authHeathers } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function deleteManager(managerId: string, formData: FormData) {
    const response = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "DELETE",
        headers: {
            ...authHeathers(),
        },
    })
    revalidateTag("dashboard:managers")
}