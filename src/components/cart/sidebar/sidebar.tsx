'use client'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"

export const CartSidebar = () => {
    return (
        <Sheet  >
            <SheetTrigger>
                <Button variant="outline" size="sm" asChild>
                    <div>
                        <ShoppingCart />
                        <p>Carrinho</p>
                    </div>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>
                {/* <Separator className="mb-2 border-dashed" /> */}
                <div className="flex flex-col gap-5 my-2 mx-4">
                    <a>item 1</a>
                    <a>item 2</a>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center text-xs mx-1">
                    <div>Sub-Total</div>
                    <div>Total</div>
                </div>
                <Separator className="my-4" />
                <div className="text-center mx-1">
                    <Button className="w-full">Finalizar Compra</Button>
                </div>
            </SheetContent>
        </Sheet>

    )
}