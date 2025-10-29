import { Card } from "@/components/ui/card";
import { Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About La Maison</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A legacy of culinary excellence spanning generations
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Founded in 1985, La Maison has been a beacon of fine dining excellence for nearly four decades. What began as a small family restaurant has blossomed into one of the most celebrated culinary destinations in the region.
              </p>
              <p className="mb-4">
                Our founder, Chef Pierre Dubois, believed that exceptional food should be an experience—a journey of flavors, textures, and aromas that transport diners to the heart of French countryside. This philosophy continues to guide every dish we create today.
              </p>
              <p>
                At La Maison, we combine time-honored techniques with innovative culinary artistry, using only the finest locally-sourced ingredients to create unforgettable dining experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We pursue perfection in every dish, ensuring the highest quality ingredients and impeccable presentation.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Passion</h3>
              <p className="text-muted-foreground">
                Every member of our team shares a deep love for culinary arts and genuine hospitality.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Community</h3>
              <p className="text-muted-foreground">
                We're committed to supporting local farmers and artisans while creating memorable experiences for our guests.
              </p>
            </Card>
          </div>
        </section>

        {/* Chef Section */}
        <section className="bg-muted/30 rounded-lg p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Meet Our Chef</h2>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Chef Antoine Rousseau</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Executive Chef & Culinary Director
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                With over 25 years of experience in Michelin-starred kitchens across Europe, Chef Antoine brings unparalleled expertise and creativity to La Maison. His innovative approach to classic French cuisine has earned critical acclaim and a devoted following of food enthusiasts.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
