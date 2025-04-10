import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeathers } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import ManagerCard from "./_components/ManagerCard";

export default async function ManagerPage({
    params,
}: {
    params: {
        id: string;
    };
}) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: {
            ... authHeathers(),
        },
        next: {
            tags: [`dashboard:managers:${params.id}`, `dashboard:managers`],
        }
    });
    const data: Manager = await response.json();
    return (
        <div>
            <ManagerCard manager={data}/>
        </div>
    )
}