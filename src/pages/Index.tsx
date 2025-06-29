
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Search, Camera, Video, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Smart Talent Matching",
      description: "AI-powered matching between talent and casting calls based on skills, looks, and availability."
    },
    {
      icon: Search,
      title: "Verified Casting Calls",
      description: "Only verified production houses and casting directors can post opportunities."
    },
    {
      icon: Camera,
      title: "Portfolio Showcase",
      description: "Professional profiles with photos, videos, and detailed portfolios."
    },
    {
      icon: Video,
      title: "Direct Communication",
      description: "Chat directly with casting directors and schedule auditions seamlessly."
    }
  ];

  const stats = [
    { number: "5,000+", label: "Active Talent" },
    { number: "500+", label: "Casting Calls" },
    { number: "200+", label: "Production Houses" },
    { number: "95%", label: "Success Rate" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Actress",
      content: "TalentMumbai helped me land my first Bollywood role. The platform is amazing!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c"
    },
    {
      name: "Rajesh Kumar",
      role: "Casting Director",
      content: "Finding the right talent has never been easier. Quality profiles and quick responses.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-bollywood-gradient text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Mumbai's Premier
              <br />
              <span className="text-bollywood-gold">Talent Platform</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Connect with Bollywood's finest talent or discover your next big break. 
              From movies to OTT shows, ads to music videos - your career starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
                Find Talent
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                Join as Talent
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Why Choose TalentMumbai?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for Mumbai's entertainment industry with features that matter most.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-scale animate-fade-in border-0 shadow-lg" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Talent Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Featured Talent
            </h2>
            <p className="text-xl text-gray-600">
              Discover Mumbai's rising stars and established professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover-scale overflow-hidden shadow-lg">
                <div className="aspect-square bg-gray-200 relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${1494790108755 + i}-2616b612b47c?w=400&h=400&fit=crop&crop=face`}
                    alt="Talent"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-bollywood-gold text-white">Verified</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Sarah Khan</h3>
                  <p className="text-gray-600 mb-3">Actress • Model • Dancer</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Bollywood</Badge>
                    <Badge variant="secondary">OTT</Badge>
                    <Badge variant="secondary">Ads</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.8 • 15 projects completed</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/talent">
              <Button size="lg" className="bg-bollywood-gradient hover:opacity-90">
                View All Talent
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl opacity-90">
              Hear from our community of talent and casting professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 hover-scale">
                <CardContent className="p-8">
                  <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm opacity-75">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bollywood-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who trust TalentMumbai for their career growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
              <Check className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
