import Image from "next/image"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-orange-200 w-screen h-screen overflow-hidde grid">
      <div className="place-content-center place-self-center text-center">
        <Image
          src="/Oxxo_Logo.svg"
          alt="Logo de Ocso"
          width={250}
          className="place-self-center bottom-10 relative"
          height={0} />
        {children}
      </div>
    </div>
  )
}
