import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Image as ImageIcon, 
  Search, 
  Download, 
  Share2, 
  Calendar,
  Users,
  Trophy,
  GraduationCap,
  Heart,
  Star,
  Camera,
  Video,
  BookOpen,
  Medal,
  Music,
  Palette
} from "lucide-react";
import { useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  date: string;
  type: "image" | "video";
  description: string;
  likes: number;
  year: string;
  imageUrl?: string;
}

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Gallery data with real Sekondi College images
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Regional Quiz Competition 2023",
      category: "academic",
      date: "2023-10-15",
      type: "image",
      description: "Students participating in the 2023 Regional Qualifiers competition",
      likes: 289,
      year: "2023",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2Fdba3dd40b8c94e529b6c3f85f9ef321f?format=webp&width=800"
    },
    {
      id: 2,
      title: "Regional Qualifier Victory",
      category: "academic",
      date: "2023-11-20",
      type: "image",
      description: "Sekondi College students receiving their winning check for the Regional Qualifier competition",
      likes: 412,
      year: "2023",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2Ff9047404e155409684695fa462fb099c?format=webp&width=800"
    },
    {
      id: 3,
      title: "Football Team Championship",
      category: "sports",
      date: "2023-09-10",
      type: "image",
      description: "Our victorious football team celebrating their championship win",
      likes: 356,
      year: "2023",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2F5bb1548bd3214c8cbc2495ea906f50fb?format=webp&width=800"
    },
    {
      id: 4,
      title: "Science Laboratory Session",
      category: "academic",
      date: "2023-03-06",
      type: "image",
      description: "Students engaged in practical science experiments in our modern laboratory",
      likes: 234,
      year: "2023",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2F9f4eb53e9e724810a523fdf14efe1ef5?format=webp&width=800"
    },
    {
      id: 5,
      title: "Cultural Day Celebration",
      category: "cultural",
      date: "2023-03-06",
      type: "image",
      description: "Celebrating Ghana's rich cultural heritage",
      likes: 312,
      year: "2023"
    },
    {
      id: 6,
      title: "Graduation Ceremony 2023",
      category: "graduation",
      date: "2023-06-15",
      type: "image",
      description: "Our proud graduates receiving their certificates",
      likes: 245,
      year: "2023"
    },
  ];

  const categories = [
    { id: "all", name: "All Photos", icon: ImageIcon },
    { id: "graduation", name: "Graduation", icon: GraduationCap },
    { id: "sports", name: "Sports", icon: Trophy },
    { id: "academic", name: "Academic", icon: BookOpen },
    { id: "cultural", name: "Cultural", icon: Palette },
    { id: "yearbook", name: "Yearbook", icon: Users },
  ];

  const yearbookClasses = [
    {
      year: "2023",
      className: "Form 3A",
      students: 45,
      achievements: ["Best Academic Performance", "Sports Champions"],
      classTeacher: "Mrs. Abena Osei"
    },
    {
      year: "2023", 
      className: "Form 3B",
      students: 42,
      achievements: ["Cultural Festival Winners", "Community Service Award"],
      classTeacher: "Mr. Kweku Mensah"
    },
    {
      year: "2023",
      className: "Form 3C", 
      students: 44,
      achievements: ["Science Fair Champions", "Debate Competition Winners"],
      classTeacher: "Ms. Akosua Darko"
    },
    {
      year: "2022",
      className: "Form 3A",
      students: 48,
      achievements: ["WASSCE Excellence", "Regional Quiz Champions"],
      classTeacher: "Mr. Samuel Asante"
    },
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-b from-school-light to-white">
        {/* Hero Section */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-school-dark mb-6">
              Gallery & Yearbook
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Relive the memorable moments, celebrate achievements, and connect with the Sekondi College community through our digital gallery and yearbook collection.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search photos, events, or years..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <Tabs defaultValue="gallery" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="gallery" className="flex items-center space-x-2">
                <Camera className="w-4 h-4" />
                <span>Photo Gallery</span>
              </TabsTrigger>
              <TabsTrigger value="yearbook" className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Digital Yearbook</span>
              </TabsTrigger>
              <TabsTrigger value="alumni" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Alumni</span>
              </TabsTrigger>
            </TabsList>

            {/* Photo Gallery Tab */}
            <TabsContent value="gallery" className="space-y-8">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center space-x-2"
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </Button>
                ))}
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      {/* Actual image or placeholder */}
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="aspect-video w-full object-cover"
                        />
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-school-light to-school-secondary flex items-center justify-center">
                          {item.type === "video" ? (
                            <Video className="w-12 h-12 text-school-primary" />
                          ) : (
                            <ImageIcon className="w-12 h-12 text-school-primary" />
                          )}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="secondary">
                            <Share2 className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      {item.type === "video" && (
                        <Badge className="absolute top-2 right-2 bg-red-500">
                          <Video className="w-3 h-3 mr-1" />
                          Video
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-school-dark line-clamp-2">{item.title}</h3>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{item.likes}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                        <Badge variant="outline">{item.year}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No photos found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </TabsContent>

            {/* Digital Yearbook Tab */}
            <TabsContent value="yearbook" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-school-dark mb-4">Digital Yearbook Collection</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Browse through our digital yearbooks and reconnect with classmates, teachers, and memorable school moments.
                </p>
              </div>

              {/* Yearbook Classes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {yearbookClasses.map((classInfo, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-school-dark">{classInfo.className}</CardTitle>
                          <p className="text-school-accent">Class of {classInfo.year}</p>
                        </div>
                        <Badge variant="secondary">{classInfo.students} Students</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Class Teacher:</h4>
                        <p className="text-gray-600">{classInfo.classTeacher}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Achievements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {classInfo.achievements.map((achievement, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              <Medal className="w-3 h-3 mr-1" />
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <Button variant="outline" className="w-full">
                          <BookOpen className="w-4 h-4 mr-2" />
                          View Class Yearbook
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Featured Memories Section */}
              <div className="bg-white rounded-lg p-8 border">
                <h3 className="text-2xl font-bold text-school-dark mb-6 text-center">Featured Memories</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-school-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-10 h-10 text-school-primary" />
                    </div>
                    <h4 className="font-semibold text-school-dark mb-2">Graduation Ceremonies</h4>
                    <p className="text-gray-600 text-sm">Celebrate the achievement of our graduates through the years</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-school-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Music className="w-10 h-10 text-school-primary" />
                    </div>
                    <h4 className="font-semibold text-school-dark mb-2">Cultural Events</h4>
                    <p className="text-gray-600 text-sm">Rich traditions and cultural celebrations that define our heritage</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-school-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-10 h-10 text-school-primary" />
                    </div>
                    <h4 className="font-semibold text-school-dark mb-2">Achievements</h4>
                    <p className="text-gray-600 text-sm">Academic and extracurricular successes that make us proud</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Alumni Tab */}
            <TabsContent value="alumni" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-school-dark mb-4">Alumni Network</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Connect with fellow Sekondi College graduates and be part of our growing alumni community.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Alumni Stats */}
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-school-dark">Alumni Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Alumni</span>
                        <span className="font-bold text-school-primary">15,000+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Countries</span>
                        <span className="font-bold text-school-primary">25+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Active Members</span>
                        <span className="font-bold text-school-primary">3,500+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Years of History</span>
                        <span className="font-bold text-school-primary">60+</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Featured Alumni */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-school-dark mb-6">Notable Alumni</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "Dr. Kwame Nkrumah Osei",
                        year: "1985",
                        profession: "Medical Doctor & Researcher",
                        achievement: "Leading cardiovascular surgeon in Ghana"
                      },
                      {
                        name: "Mrs. Akosua Mensah-Brown",
                        year: "1990",
                        profession: "Supreme Court Justice",
                        achievement: "First female Supreme Court Justice from Western Region"
                      },
                      {
                        name: "Eng. Joseph Kweku Asante",
                        year: "1988",
                        profession: "Civil Engineer",
                        achievement: "Lead engineer on major infrastructure projects"
                      },
                      {
                        name: "Prof. Abena Osei-Bonsu",
                        year: "1982",
                        profession: "University Vice Chancellor",
                        achievement: "Distinguished academic and educational leader"
                      },
                    ].map((alumni, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-school-light rounded-full flex items-center justify-center">
                            <Star className="w-6 h-6 text-school-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-school-dark">{alumni.name}</h4>
                            <p className="text-sm text-school-accent">Class of {alumni.year}</p>
                            <p className="text-sm text-gray-600 mt-1">{alumni.profession}</p>
                            <p className="text-xs text-gray-500 mt-2">{alumni.achievement}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Join Alumni Network */}
              <div className="bg-gradient-to-r from-school-primary to-school-secondary rounded-lg p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Join Our Alumni Network</h3>
                <p className="text-school-light mb-6 max-w-2xl mx-auto">
                  Stay connected with your alma mater and fellow graduates. Share your achievements, mentor current students, and be part of our growing success story.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    <Users className="w-5 h-5 mr-2" />
                    Register as Alumni
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-primary">
                    <Heart className="w-5 h-5 mr-2" />
                    Make a Donation
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
