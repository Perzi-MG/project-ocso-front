import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default function ProviderCard({ provider }: { provider: Provider }) {
    return (
        <Card>
            <CardHeader>{provider.providerName}</CardHeader>
            <Divider />
            <CardBody>
                <p>Correo Electrónico: </p>
                <b>{provider.providerEmail}</b>
                <p>Numero de Teléfono: </p>
                <b>{provider.providerPhoneNumber}</b>
                {
                    provider.products ? (
                        <p>Tiene <b>{provider.products.length}</b> productos</p>

                    ) : <p>No tiene Productos</p>
                }
            </CardBody>
        </Card>
    )
}