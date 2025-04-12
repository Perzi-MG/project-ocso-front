import { API_URL } from "@/constants"
import { authHeathers } from "@/helpers/authHeaders"
import ProviderCard from "../_components/ProviderCard"
import { Product, Provider } from "@/entities"
import ProductCard from "./_components/ProductCard"
import Link from "next/link"

export default async function ProviderPage({ params }: {
    params: {
        id: string
    }
}) {
    const response = await fetch(`${API_URL}/providers/${params.id}`, {
        headers: {
            ...authHeathers()
        }
    })
    const provider: Provider = await response.json()
    return (
        <div className="flex flex-grow-0 flex-col pl-10 gap-10 h-[90vh] pt-10">
            <ProviderCard provider={provider} />
            <div className="h-1 bg-orange-900 w-[85vw]" />
            <div className="flex flex-wrap gap-10">
                {
                    provider.products.map((product: Product) => (
                        <Link 
                        href={{pathname: `/dashboard/products/${product.productId}`} } 
                        key={product.productId}
                        className="hover:scale-110 transition-all"
                        >
                            <ProductCard  product={product} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}