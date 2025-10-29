import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, ChefHat, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const Index = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-secondary" />,
      title: "Easy Booking",
      description: "Reserve your table online in just a few clicks with real-time availability.",
    },
    {
      icon: <ChefHat className="h-8 w-8 text-secondary" />,
      title: "Exquisite Cuisine",
      description: "Savor dishes crafted by world-class chefs using the finest ingredients.",
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "Flexible Hours",
      description: "Open seven days a week to accommodate your dining schedule.",
    },
    {
      icon: <Star className="h-8 w-8 text-secondary" />,
      title: "Premium Experience",
      description: "Enjoy an unforgettable fine dining experience in an elegant atmosphere.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Experience Fine Dining
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Where culinary artistry meets timeless elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/reservations">Reserve Your Table</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              <Link to="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose La Maison</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              An exceptional dining experience awaits you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Dine With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your table today and prepare for an unforgettable culinary journey
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/reservations">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
