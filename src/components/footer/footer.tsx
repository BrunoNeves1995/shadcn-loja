import { Separator } from "@/components/ui/separator";

export const Footer = () => {
    return (
        <div className="mt-5">
            <Separator />
            <div className="my-5 text-center text-sm opacity-50">
                Criado por <a className="font-bold">Bruno Neves</a> © 2025 Shadcn.
            </div>
        </div>
    );
};