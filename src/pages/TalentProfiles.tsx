
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Search, Filter, Users, Camera, Video } from "lucide-react";

const TalentProfiles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");

  const talentData = [
    {
      id: 1,
      name: "Ananya Patel",
      category: "Actress",
      gender: "Female",
      age: 24,
      height: "5'6\"",
      experience: "3 years",
      languages: ["Hindi", "English", "Gujarati"],
      skills: ["Acting", "Dancing", "Singing"],
      rating: 4.9,
      projects: 12,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
      verified: true,
      availability: "Available"
    },
    {
      id: 2,
      name: "Arjun Kapoor",
      category: "Actor",
      gender: "Male",
      age: 28,
      height: "6'1\"",
      experience: "5 years",
      languages: ["Hindi", "English", "Punjabi"],
      skills: ["Acting", "Action", "Comedy"],
      rating: 4.7,
      projects: 18,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      verified: true,
      availability: "Busy"
    },
    {
      id: 3,
      name: "Meera Singh",
      category: "Model",
      gender: "Female",
      age: 22,
      height: "5'8\"",
      experience: "2 years",
      languages: ["Hindi", "English"],
      skills: ["Modeling", "Ramp Walk", "Photography"],
      rating: 4.8,
      projects: 8,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      verified: true,
      availability: "Available"
    },
    {
      id: 4,
      name: "Rohit Sharma",
      category: "Dancer",
      gender: "Male",
      age: 26,
      height: "5'9\"",
      experience: "4 years",
      languages: ["Hindi", "English", "Marathi"],
      skills: ["Classical Dance", "Hip Hop", "Choreography"],
      rating: 4.6,
      projects: 15,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      verified: false,
      availability: "Available"
    },
    {
      id: 5,
      name: "Kavya Reddy",
      category: "Influencer",
      gender: "Female",
      age: 25,
      height: "5'5\"",
      experience: "3 years",
      languages: ["Hindi", "English", "Telugu"],
      skills: ["Content Creation", "Brand Promotion", "Acting"],
      rating: 4.5,
      projects: 10,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      verified: true,
      availability: "Available"
    },
    {
      id: 6,
      name: "Vikram Joshi",
      category: "Actor",
      gender: "Male",
      age: 30,
      height: "5'11\"",
      experience: "7 years",
      languages: ["Hindi", "English", "Marathi"],
      skills: ["Method Acting", "Drama", "Theatre"],
      rating: 4.9,
      projects: 22,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      verified: true,
      availability: "Available"
    }
  ];

  const filteredTalent = talentData.filter(talent => {
    const matchesSearch = talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || talent.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesGender = selectedGender === "all" || talent.gender.toLowerCase() === selectedGender.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesGender;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Discover Amazing Talent
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with verified actors, models, dancers, and influencers in Mumbai's entertainment industry
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search by name or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="actor">Actor</SelectItem>
                <SelectItem value="actress">Actress</SelectItem>
                <SelectItem value="model">Model</SelectItem>
                <SelectItem value="dancer">Dancer</SelectItem>
                <SelectItem value="influencer">Influencer</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedGender} onValueChange={setSelectedGender}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genders</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full md:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTalent.length} of {talentData.length} profiles
          </p>
        </div>

        {/* Talent Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTalent.map((talent) => (
            <Card key={talent.id} className="hover-scale overflow-hidden shadow-lg border-0">
              <div className="aspect-square bg-gray-200 relative">
                <img 
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  {talent.verified && (
                    <Badge className="bg-bollywood-gold text-white">
                      <Check className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={talent.availability === "Available" ? "default" : "secondary"}
                    className={talent.availability === "Available" ? "bg-green-500" : ""}
                  >
                    {talent.availability}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white flex-1">
                      <Camera className="w-4 h-4 mr-1" />
                      Portfolio
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/90 border-white/50 text-gray-900 hover:bg-white">
                      <Video className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">{talent.name}</h3>
                    <p className="text-gray-600">{talent.category} • {talent.age} years</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{talent.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Height:</span>
                    <span>{talent.height}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Experience:</span>
                    <span>{talent.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Projects:</span>
                    <span>{talent.projects} completed</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Languages:</p>
                  <div className="flex flex-wrap gap-1">
                    {talent.languages.map((lang) => (
                      <Badge key={lang} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {talent.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-bollywood-gradient hover:opacity-90">
                    Contact
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Users className="w-4 h-4 mr-1" />
                    Shortlist
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Profiles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TalentProfiles;
