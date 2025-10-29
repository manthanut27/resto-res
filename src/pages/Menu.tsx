import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import startersImg from "@/assets/menu-starters.jpg";
import mainsImg from "@/assets/menu-mains.jpg";
import dessertsImg from "@/assets/menu-desserts.jpg";
import drinksImg from "@/assets/menu-drinks.jpg";

const categoryImages: Record<string, string> = {
  starters: startersImg,
  mains: mainsImg,
  desserts: dessertsImg,
  drinks: drinksImg,
};

const Menu = () => {
  const { data: menuItems, isLoading } = useQuery({
    queryKey: ["menu-items"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .eq("is_available", true)
        .order("category")
        .order("name");

      if (error) throw error;
      return data;
    },
  });

  const groupedItems = menuItems?.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menuItems>);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of exquisite dishes crafted with passion
          </p>
        </div>

        <Tabs defaultValue="starters" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="starters">Starters</TabsTrigger>
            <TabsTrigger value="mains">Mains</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="drinks">Drinks</TabsTrigger>
          </TabsList>

          {["starters", "mains", "desserts", "drinks"].map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div
                className="h-64 rounded-lg mb-8 bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: `url(${categoryImages[category]})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 flex items-center justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white capitalize">
                    {category}
                  </h2>
                </div>
              </div>

              {isLoading ? (
                <div className="text-center py-12">Loading menu...</div>
              ) : groupedItems?.[category]?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedItems[category].map((item: any) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      {item.image_url && (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={item.image_url}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold">{item.name}</h3>
                          <Badge variant="secondary" className="ml-2">
                            ${Number(item.price).toFixed(2)}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  No items available in this category yet.
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
