import { Footer } from "@/components/footer/footer"
import { Header } from "@/components/header/header"

const Page = () => {
    return (
        <div className="w-full max-w-4xl min-w-auto mx-auto">
            <Header />
            <div className="mx-3">
                lista produtos
            </div>
            <Footer />
        </div>
    )
}

export default Page