import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProductTab = () => {
    return (
        <Tabs defaultValue="tab1">
            <TabsList className="flex w-full">
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-6">
                Content 1
            </TabsContent>
            <TabsContent value="tab2" className="mt-6">
                Content 2
            </TabsContent>

        </Tabs>
    );
};