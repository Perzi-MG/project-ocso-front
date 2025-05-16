"use server"

import { API_URL } from "@/constants"
import { authHeathers } from "@/helpers/authHeaders"

export default async function updateUser(userId: string, formData: FormData) {
    let data: any = {}
    data.userEmail = formData.get("userEmail") ? formData.get("userEmail") : undefined
    data.userPassword = formData.get("userPassword") ? formData.get("userPassword") : undefined
    const response = await fetch(`${API_URL}/auth/${userId}`, {
        method: "PATCH",
        headers: {
            ...authHeathers(),
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}