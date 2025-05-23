import { Skeleton } from "@/components/ui/skeleton"

export const SkeletonTabs = () => {
    return (
        <div>
            <Skeleton className="w-full h-10 rounded-b-xl" />

            <div className="mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
                {Array.from({ length: 6 }).map((item, index) => (
                    <div key={index}>
                        <Skeleton className="w-full h-16 rounded-xl" />
                        <Skeleton className="mt-2 w-full h-7 rounded-xl" />
                        <Skeleton className="mt-2 w-32 h-5 rounded-xl" />
                        <Skeleton className="mt-2 w-full h-9 rounded-xl" />
                    </div>
                ))}
            </div>
        </div>
    )
}