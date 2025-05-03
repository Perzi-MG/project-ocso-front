import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { authHeathers } from "@/helpers/authHeaders";
import FilteredCards from "./_components/FilteredCards";
import { ReactNode } from "react";

const LayoutProducts = async ({children}: {children: ReactNode}) => {
    const response = await fetch(`${API_URL}/products`, {
        headers: {
            ...authHeathers(),
        },
        next: {
            tags: ["dashboard:products"]
        }
    });
    const products: Product[] = await response.json();
    const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {
            ... authHeathers(),
        },
        next: {
            tags: ["dashboard:providers"]
        }
    })
    const providers = await responseProviders.json();
    return (
        <div className="h-[90vh] w-full flex flex-row">
            <div className="w-3/12">
                <FilteredCards products={products} providers={providers} />
            </div>
            <div className="w-9/12">
            {children}
            </div>
        </div>
    );
}

export default LayoutProducts;