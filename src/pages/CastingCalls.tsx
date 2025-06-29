
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Calendar, Users, Star, Camera, Video } from "lucide-react";

const CastingCalls = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");

  const castingData = [
    {
      id: 1,
      title: "Lead Actress for Bollywood Romance",
      company: "Red Chillies Entertainment",
      type: "Bollywood Movie",
      gender: "Female",
      ageRange: "22-28",
      location: "Mumbai",
      budget: "₹2-5 Lakhs",
      deadline: "2024-01-15",
      description: "Looking for a talented actress for lead role in upcoming romantic drama. Must have prior acting experience.",
      requirements: ["Acting Experience", "Classical Dance", "Hindi Fluency"],
      verified: true,
      applicants: 89,
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Male Model for Fashion Brand Campaign",
      company: "Lifestyle Fashion Co.",
      type: "Advertisement",
      gender: "Male",
      ageRange: "25-35",
      location: "Mumbai",
      budget: "₹50K-1L",
      deadline: "2024-01-10",
      description: "Seeking confident male model for premium fashion brand photoshoot and video campaign.",
      requirements: ["Modeling Experience", "Good Physique", "English Speaking"],
      verified: true,
      applicants: 45,
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Background Dancers - Music Video",
      company: "T-Series",
      type: "Music Video",
      gender: "Both",
      ageRange: "20-30",
      location: "Mumbai",
      budget: "₹5K-10K",
      deadline: "2024-01-08",
      description: "Multiple background dancers needed for high-energy Bollywood music video shoot.",
      requirements: ["Dancing Skills", "Bollywood Style", "Flexible Schedule"],
      verified: true,
      applicants: 156,
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Character Actor for OTT Series",
      company: "Netflix India",
      type: "OTT Show",
      gender: "Male",
      ageRange: "40-50",
      location: "Mumbai",
      budget: "₹1-3 Lakhs",
      deadline: "2024-01-20",
      description: "Supporting character role in crime thriller series. Method acting experience preferred.",
      requirements: ["Theatre Background", "Method Acting", "Hindi & English"],
      verified: true,
      applicants: 67,
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Instagram Reel Creator",
      company: "Brand Partnerships Co.",
      type: "Social Media",
      gender: "Female",
      ageRange: "18-25",
      location: "Mumbai",
      budget: "₹15K-25K",
      deadline: "2024-01-12",
      description: "Looking for creative influencer to create engaging reels for beauty brand campaign.",
      requirements: ["Content Creation", "Instagram Presence", "Beauty Knowledge"],
      verified: false,
      applicants: 123,
      posted: "1 day ago"
    },
    {
      id: 6,
      title: "Stunt Double - Action Film",
      company: "Yash Raj Films",
      type: "Bollywood Movie",
      gender: "Male",
      ageRange: "25-35",
      location: "Mumbai",
      budget: "₹3-7 Lakhs",
      deadline: "2024-01-18",
      description: "Professional stunt double needed for high-octane action sequences. Safety training mandatory.",
      requirements: ["Stunt Training", "Physical Fitness", "Insurance"],
      verified: true,
      applicants: 23,
      posted: "4 days ago"
    }
  ];

  const filteredCasting = castingData.filter(casting => {
    const matchesSearch = casting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         casting.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || casting.type.toLowerCase().includes(selectedType.toLowerCase());
    const matchesGender = selectedGender === "all" || casting.gender.toLowerCase() === selectedGender.toLowerCase() || casting.gender === "Both";
    
    return matchesSearch && matchesType && matchesGender;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Bollywood Movie": return "bg-red-100 text-red-800";
      case "OTT Show": return "bg-purple-100 text-purple-800";
      case "Advertisement": return "bg-blue-100 text-blue-800";
      case "Music Video": return "bg-green-100 text-green-800";
      case "Social Media": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Latest Casting Calls
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover verified opportunities from top production houses, agencies, and brands
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search casting calls..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Project Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="bollywood">Bollywood Movie</SelectItem>
                <SelectItem value="ott">OTT Show</SelectItem>
                <SelectItem value="advertisement">Advertisement</SelectItem>
                <SelectItem value="music">Music Video</SelectItem>
                <SelectItem value="social">Social Media</SelectItem>
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
                <SelectItem value="both">Both</SelectItem>
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
            Showing {filteredCasting.length} of {castingData.length} casting calls
          </p>
        </div>

        {/* Casting Calls List */}
        <div className="space-y-6">
          {filteredCasting.map((casting) => (
            <Card key={casting.id} className="hover-scale shadow-lg border-0">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{casting.title}</CardTitle>
                        <div className="flex items-center gap-2 text-gray-600">
                          <span className="font-medium">{casting.company}</span>
                          {casting.verified && (
                            <Badge className="bg-bollywood-gold text-white text-xs">
                              <Star className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className={getTypeColor(casting.type)}>
                        {casting.type}
                      </Badge>
                      <Badge variant="outline">
                        {casting.gender === "Both" ? "All Genders" : casting.gender}
                      </Badge>
                      <Badge variant="outline">
                        Age: {casting.ageRange}
                      </Badge>
                      <Badge variant="outline">
                        {casting.location}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {casting.budget}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Deadline: {casting.deadline}
                    </div>
                    <div className="text-sm text-gray-600">
                      <Users className="w-4 h-4 inline mr-1" />
                      {casting.applicants} applicants
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-4">
                  {casting.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {casting.requirements.map((req) => (
                      <Badge key={req} variant="secondary" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="text-sm text-gray-600">
                    Posted {casting.posted}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline">
                      <Camera className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button className="bg-bollywood-gradient hover:opacity-90">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Casting Calls
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CastingCalls;
