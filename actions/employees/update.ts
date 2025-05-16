'use server';

import { API_URL } from "@/constants";
import { authHeathers } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function updateEmployee(employeeId: string, formData: FormData) {
    const cleanData = new FormData()
    Array.from(formData.entries()).forEach(([key, value]) => {
        if (!key.startsWith("$")) {
            cleanData.append(key, value)
        }
    });
    const response = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: "PATCH",
        headers: {
            ...authHeathers()
        },
        body: cleanData
    })
    if (response.status === 200) {
        revalidateTag("dashboard:employees");
        revalidateTag(`dashboard:employees:${employeeId}`);
        redirect(`/dashboard/employees/${employeeId}`);
    }
    return;
} 