import { API_URL } from "@/constants";
import { Location } from "@/entities";
import { authHeathers } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
    if (!store) return null;
    const response = await fetch(`${API_URL}/locations/${store}`, {
        method: "GET",
        headers: {
            ...authHeathers()
        },
        next: {
            tags: ["dashboard:locations", `dashboard:locations:${store}`]
        }
    }
    );
    const data: Location = await response.json()
    return (
        <Card>
            <CardHeader>
                <b className="w-full">{data.locationName}</b>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full">Manager: <Link href={{pathname: `/dashboard/managers/${data.manager?.managerId}`}}><b>{data.manager?.managerFullName}</b></Link></p>
                <p className="w-full">Direccion: <Link href={{pathname: `/dashboard/locations`}}><b>{data.locationAddress}</b></Link></p>

            </CardBody>
        </Card>
    )
}