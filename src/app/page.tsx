import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Button } from "@/components/ui/button"

const Page = () => {
    return (
        <div>
            <Button>Button</Button>

            <ThemeToggle />
        </div>
    )
}

export default Page