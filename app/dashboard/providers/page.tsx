import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { authHeathers } from "@/helpers/authHeaders";
import ProviderCard from "./_components/ProviderCard";
import { Button, Link } from "@heroui/react";
import { LuPlus } from "react-icons/lu";

const ProviderPage = async () => {
    const response = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeathers()
        }
    })
    const providers: Provider[] = await response.json()

    return (
        <div className="flex flex-grow-0 flex-col items-end w-full px-10 py-10 h-[90vh]">
            <Button className="w-fit" color="primary">
                <LuPlus size={20} />
            </Button>
            <div className="flex flex-wrap w-full py-20 flex-grow-0 gap-14">
                {providers.map((provider: Provider) => (
                    <Link className="hover:scale-110 transition-transform" href={`/dashboard/providers/${provider.providerId}`}>
                        <ProviderCard provider={provider} key={provider.providerId} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProviderPage;