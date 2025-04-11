'use server'

import { API_URL } from "@/constants";
import { authHeathers } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function createProvider(formData: FormData) {
    let provider: any = {};
    for (const key of Array.from(formData.keys())) {
        provider[key] = formData.get(key);
    }
    const response = await fetch(`${API_URL}/providers`, {
        method: "POST",
        body: JSON.stringify(provider),
        headers: {
            ...authHeathers(),
            'content-type': "application/json"
        },
    })
    if(response.status === 201) revalidateTag("dashboard:providers")
}