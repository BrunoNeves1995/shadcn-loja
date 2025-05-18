import { Footer } from "@/components/footer/footer"
import { Header } from "@/components/header/header"
import { SkeletonTabs } from "@/components/produtos/utils/skeleton"
import { ProductTab } from "@/components/produtos/product-tab"
import { Suspense } from "react"

const Page = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <Header />
            <div className="mx-3">
                <Suspense fallback={<SkeletonTabs />}>
                    <ProductTab />
                </Suspense>
            </div>
            <Footer />
        </div>
    )
}

export default Page