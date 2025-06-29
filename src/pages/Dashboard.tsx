
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Star, Users, Calendar, Camera, Video, Check, X } from "lucide-react";

const Dashboard = () => {
  const profileStats = {
    profileViews: 1247,
    applications: 23,
    shortlisted: 8,
    hired: 3,
    rating: 4.8,
    completionRate: 85
  };

  const recentApplications = [
    {
      id: 1,
      title: "Lead Actress for Romance Drama",
      company: "Red Chillies Entertainment",
      type: "Bollywood Movie",
      appliedDate: "2024-01-05",
      status: "Under Review",
      budget: "₹2-5 Lakhs"
    },
    {
      id: 2,
      title: "Fashion Brand Campaign",
      company: "Lifestyle Fashion Co.",
      type: "Advertisement",
      appliedDate: "2024-01-03",
      status: "Shortlisted",
      budget: "₹50K-1L"
    },
    {
      id: 3,
      title: "Background Dancers",
      company: "T-Series",
      type: "Music Video",
      appliedDate: "2024-01-01",
      status: "Rejected",
      budget: "₹5K-10K"
    }
  ];

  const matches = [
    {
      id: 1,
      title: "Supporting Actor - Thriller Series",
      company: "Amazon Prime Video",
      type: "OTT Show",
      matchScore: 95,
      budget: "₹1-2 Lakhs",
      deadline: "2024-01-20"
    },
    {
      id: 2,
      title: "Brand Ambassador - Fitness",
      company: "HealthFit India",
      type: "Brand Partnership",
      matchScore: 88,
      budget: "₹3-5 Lakhs",
      deadline: "2024-01-15"
    },
    {
      id: 3,
      title: "Dancer - Award Show",
      company: "Filmfare Awards",
      type: "Live Performance",
      matchScore: 92,
      budget: "₹25K-50K",
      deadline: "2024-01-12"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Shortlisted": return "bg-green-100 text-green-800";
      case "Under Review": return "bg-yellow-100 text-yellow-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Shortlisted": return <Check className="w-4 h-4" />;
      case "Rejected": return <X className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome back! Here's your talent journey overview.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {profileStats.profileViews}
              </div>
              <div className="text-sm text-gray-600">Profile Views</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {profileStats.applications}
              </div>
              <div className="text-sm text-gray-600">Applications</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {profileStats.shortlisted}
              </div>
              <div className="text-sm text-gray-600">Shortlisted</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-bollywood-gold mb-1">
                {profileStats.hired}
              </div>
              <div className="text-sm text-gray-600">Hired</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-2xl font-bold">{profileStats.rating}</span>
              </div>
              <div className="text-sm text-gray-600">Rating</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {profileStats.completionRate}%
              </div>
              <div className="text-sm text-gray-600">Complete Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="matches">Smart Matches</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div key={application.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {application.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{application.company}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">{application.type}</Badge>
                          <Badge className={getStatusColor(application.status)}>
                            {getStatusIcon(application.status)}
                            <span className="ml-1">{application.status}</span>
                          </Badge>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:text-right">
                        <div className="font-semibold text-primary mb-1">
                          {application.budget}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          Applied: {application.appliedDate}
                        </div>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Matches Tab */}
          <TabsContent value="matches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Smart Matches</CardTitle>
                <p className="text-gray-600">
                  Casting calls that perfectly match your profile and skills
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {matches.map((match) => (
                    <div key={match.id} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {match.title}
                          </h3>
                          <p className="text-gray-600 mb-2">{match.company}</p>
                          <Badge variant="outline">{match.type}</Badge>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                          <div className="font-semibold text-primary mb-1">
                            {match.budget}
                          </div>
                          <div className="text-sm text-gray-600">
                            Deadline: {match.deadline}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Match Score</span>
                          <span className="text-sm font-bold text-green-600">
                            {match.matchScore}%
                          </span>
                        </div>
                        <Progress value={match.matchScore} className="h-2" />
                      </div>
                      
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1">
                          View Details
                        </Button>
                        <Button className="flex-1 bg-bollywood-gradient hover:opacity-90">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Basic Information</span>
                      <Badge className="bg-green-100 text-green-800">Complete</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Profile Photos</span>
                      <Badge className="bg-green-100 text-green-800">Complete</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Portfolio Videos</span>
                      <Badge className="bg-yellow-100 text-yellow-800">Incomplete</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Experience Details</span>
                      <Badge className="bg-green-100 text-green-800">Complete</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Skills & Languages</span>
                      <Badge className="bg-green-100 text-green-800">Complete</Badge>
                    </div>
                    
                    <div className="pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Overall Completion</span>
                        <span className="font-bold">{profileStats.completionRate}%</span>
                      </div>
                      <Progress value={profileStats.completionRate} className="h-3" />
                    </div>
                    
                    <Button className="w-full mt-4">
                      <Camera className="w-4 h-4 mr-2" />
                      Complete Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Camera className="w-4 h-4 mr-2" />
                      Upload New Photos
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Video className="w-4 h-4 mr-2" />
                      Add Portfolio Video
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Update Availability
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Star className="w-4 h-4 mr-2" />
                      Boost Profile Visibility
                    </Button>
                    <Button className="w-full bg-bollywood-gradient hover:opacity-90">
                      <Check className="w-4 h-4 mr-2" />
                      Get Verified
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
