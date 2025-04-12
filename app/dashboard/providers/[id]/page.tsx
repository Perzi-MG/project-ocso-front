import { API_URL } from "@/constants"
import { authHeathers } from "@/helpers/authHeaders"
import ProviderCard from "../_components/ProviderCard"
import { Product, Provider } from "@/entities"
import ProductCard from "./_components/ProductCard"
import Link from "next/link"
import FormUpdateProvider from "./_components/FormUpdateProvider"

export default async function ProviderPage({ params }: {
    params: {
        id: string
    }
}) {
    const response = await fetch(`${API_URL}/providers/${params.id}`, {
        headers: {
            ...authHeathers()
        },
        next: {
            tags: [`dashboard:providers:${params.id}`]
        }
    })
    const provider: Provider = await response.json()
    return (
        <div className="flex flex-grow-0 flex-col pl-10 gap-10 h-[90vh] pt-10">
            <div className="flex flex-row items-center gap-6">
                <ProviderCard provider={provider} />
                <FormUpdateProvider provider={provider} />
            </div>
            <div className="h-1 bg-orange-900 w-[85vw]" />
            <div className="flex flex-wrap gap-10">
                {
                    provider.products.map((product: Product) => (
                        <Link
                            href={{ pathname: `/dashboard/products/${product.productId}` }}
                            key={product.productId}
                            className="hover:scale-110 transition-all"
                        >
                            <ProductCard product={product} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}