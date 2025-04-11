import { Manager } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";
export default function ManagerCard({ manager }: { manager: Manager }) {
    return (
        <Card className="mx-20 py-2 text-center">
            <CardHeader>
                <p className="w-full text-4xl">
                    <b>{manager.managerFullName}</b>
                </p>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row flex-grow-0 items-center justify-center">
                <div className="flex flex-col text-lg">
                    <p className="w-full">
                        Email: <b>{manager.managerEmail}</b>
                    </p>
                    <p className="w-full">
                        Teléfono: <b>{manager.managerPhoneNumber}</b>
                    </p>
                    <p className="w-full">
                        Salario: <b>{manager.managerSalary}</b>
                    </p>
                    {
                        manager.location ? (
                            <>
                                <p className={manager.location ? "" : "hidden"}>
                                    Tienda:{" "}
                                    <Link href={{
                                        pathname: `/dashboard`,
                                        query: {
                                            store: manager?.location?.locationId
                                        }
                                    }}>
                                        <b className="underline">{manager.location.locationName}</b></Link>
                                </p>
                            </>
                        ) : (<p className="w-full">No tiene tienda</p>)
                    }
                </div>
            </CardBody>
        </Card>
    )
}