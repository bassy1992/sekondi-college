import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Trophy, 
  Calendar, 
  MapPin, 
  Phone, 
  ArrowRight,
  Bell,
  Star,
  Award,
  Image
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const announcements = [
    { text: "WASSCE 2024 Registration now open - Deadline: March 15", urgent: true },
    { text: "Inter-House Sports Festival - February 20-22, 2024", urgent: false },
    { text: "PTA Meeting scheduled for February 10, 2024 at 2:00 PM", urgent: false },
    { text: "Mid-Term Examinations begin March 5, 2024", urgent: true },
  ];

  const quickLinks = [
    { title: "Admissions", href: "/admissions", icon: GraduationCap, description: "Apply now" },
    { title: "Academics", href: "/academics", icon: BookOpen, description: "Our programs" },
    { title: "News & Events", href: "/news", icon: Calendar, description: "Stay updated" },
    { title: "E-Learning", href: "/elearning", icon: Users, description: "Online portal" },
  ];

  const achievements = [
    { title: "WASSCE Excellence", description: "95% pass rate in 2023", icon: Trophy },
    { title: "Regional Champions", description: "Science & Math Quiz 2023", icon: Award },
    { title: "Outstanding Performance", description: "National Essay Competition", icon: Star },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-school-primary to-school-secondary text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  Established 1960
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Welcome to
                  <span className="block text-school-light">Sekondi College</span>
                </h1>
                <p className="text-xl md:text-2xl text-school-light font-medium">
                  "Knowledge, Wisdom, Service"
                </p>
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                Excellence in education for over six decades. Shaping future leaders through 
                comprehensive academic programs, character development, and holistic growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/admissions">
                    Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-primary" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2F95f2d1de2c354d00a83b677aca8f63e9?format=webp&width=800"
                  alt="Sekondi College students participating in academic competition"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
                  <p className="text-sm text-white/90">Our students competing at the highest level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Ticker */}
      <section className="bg-school-dark text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Bell className="w-5 h-5 text-school-secondary" />
              <span className="font-semibold">Announcements:</span>
            </div>
            <div className="flex space-x-8 overflow-x-auto">
              {announcements.map((announcement, index) => (
                <div key={index} className="flex items-center space-x-2 flex-shrink-0">
                  {announcement.urgent && (
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  )}
                  <span className="text-sm whitespace-nowrap">{announcement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-school-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-school-primary mx-auto mb-3" />
              <h3 className="font-semibold text-school-dark mb-2">Location</h3>
              <p className="text-sm text-gray-600">Sekondi-Takoradi, Western Region</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <Phone className="w-8 h-8 text-school-primary mx-auto mb-3" />
              <h3 className="font-semibold text-school-dark mb-2">Contact</h3>
              <p className="text-sm text-gray-600">+233 (0) 312-000-000</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-8 h-8 text-school-primary mx-auto mb-3" />
              <h3 className="font-semibold text-school-dark mb-2">Students</h3>
              <p className="text-sm text-gray-600">2,500+ Active Students</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <BookOpen className="w-8 h-8 text-school-primary mx-auto mb-3" />
              <h3 className="font-semibold text-school-dark mb-2">Programs</h3>
              <p className="text-sm text-gray-600">6 Academic Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-school-dark mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need is just a click away
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-school-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-school-primary transition-colors">
                    <link.icon className="w-8 h-8 text-school-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-school-dark">{link.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <Button variant="outline" size="sm" asChild className="group-hover:bg-school-primary group-hover:text-white">
                    <Link to={link.href}>
                      Explore <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-school-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-school-dark mb-4">
              Academic Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to unlock your potential
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "General Arts", subjects: "Literature, History, Geography", students: "450+" },
              { name: "General Science", subjects: "Physics, Chemistry, Biology", students: "520+" },
              { name: "Business", subjects: "Accounting, Economics, Management", students: "380+" },
              { name: "Agriculture", subjects: "Crop Science, Animal Husbandry", students: "220+" },
              { name: "Home Economics", subjects: "Nutrition, Clothing & Textiles", students: "180+" },
              { name: "Visual Arts", subjects: "Graphic Design, Fine Arts", students: "150+" },
            ].map((program, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-school-dark">{program.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600">{program.subjects}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Students:</span>
                    <Badge variant="secondary">{program.students}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Awards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-school-dark mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating excellence in academics, sports, and extracurricular activities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-2 border-school-light hover:border-school-primary transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-school-dark">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Yearbook Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-school-primary to-school-secondary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Yearbook & Memories
              </h2>
              <p className="text-xl text-school-light max-w-2xl mx-auto">
                Capture and cherish the moments that define your Sekondi College journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Image className="w-12 h-12 text-school-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Photo Gallery</h3>
                <p className="text-school-light">Browse through memorable moments from school events, graduation ceremonies, and student activities.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <BookOpen className="w-12 h-12 text-school-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Digital Yearbook</h3>
                <p className="text-school-light">Access your class yearbook online with student profiles, achievements, and class memories.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="w-12 h-12 text-school-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Alumni Network</h3>
                <p className="text-school-light">Connect with fellow graduates and stay updated with the Sekondi College community.</p>
              </div>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/gallery">
                Explore Gallery & Yearbook <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-school-dark text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-300">
            Take the first step towards academic excellence and personal growth at Sekondi College.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/admissions">
                Start Application <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-dark" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
