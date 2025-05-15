'use server';

import { API_URL } from "@/constants";
import { authHeathers } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function updateEmployee(employeeId: string, formData: FormData){
    formData.delete("$ACTION_REF_0")
    formData.delete("$ACTION_0:1")
    formData.delete("$ACTION_0:0")
    const response = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: "PATCH",
        headers: {
            ... authHeathers()
        },
        body: formData
    })
    if(response.status === 200) revalidateTag("dashboard:employees")
    return;
} 