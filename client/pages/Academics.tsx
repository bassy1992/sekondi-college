import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Trophy, 
  TrendingUp,
  Users,
  Award,
  Calendar,
  GraduationCap,
  Star,
  BarChart3,
  Target,
  Clock,
  Medal,
  User,
  ChevronRight,
  Download
} from "lucide-react";

const Academics = () => {
  // Sample academic data - in real app, this would come from API
  const classRankings = [
    {
      position: 1,
      name: "Akosua Mensah",
      class: "Form 3A - General Science",
      average: 94.2,
      subjects: 8,
      trend: "up"
    },
    {
      position: 2,
      name: "Kwame Asante",
      class: "Form 3B - General Science",
      average: 93.8,
      subjects: 8,
      trend: "up"
    },
    {
      position: 3,
      name: "Abena Osei",
      class: "Form 3A - General Arts",
      average: 92.5,
      subjects: 7,
      trend: "stable"
    },
    {
      position: 4,
      name: "Joseph Boateng",
      class: "Form 3C - Business",
      average: 91.7,
      subjects: 8,
      trend: "up"
    },
    {
      position: 5,
      name: "Ama Darko",
      class: "Form 3B - General Arts",
      average: 90.9,
      subjects: 7,
      trend: "down"
    },
  ];

  const academicPrograms = [
    {
      name: "General Science",
      description: "Focus on Physics, Chemistry, Biology, and Mathematics",
      students: 520,
      performance: 96,
      subjects: ["Core Mathematics", "Physics", "Chemistry", "Biology", "English Language", "Integrated Science", "Social Studies", "Religious Studies"],
      teachers: 12,
      passRate: 98.5
    },
    {
      name: "General Arts",
      description: "Humanities and social sciences emphasis",
      students: 450,
      performance: 94,
      subjects: ["English Literature", "History", "Geography", "Government", "Economics", "French/Twi", "Christian Religious Studies", "Social Studies"],
      teachers: 10,
      passRate: 96.2
    },
    {
      name: "Business",
      description: "Commerce and business administration focus",
      students: 380,
      performance: 92,
      subjects: ["Business Management", "Financial Accounting", "Cost Accounting", "Economics", "Geography", "Mathematics", "English Language", "Social Studies"],
      teachers: 8,
      passRate: 95.8
    },
    {
      name: "Agriculture",
      description: "Agricultural science and animal husbandry",
      students: 220,
      performance: 90,
      subjects: ["General Agriculture", "Animal Husbandry", "Crop Husbandry", "Agricultural Economics", "Mathematics", "Integrated Science", "English Language", "Social Studies"],
      teachers: 6,
      passRate: 94.1
    },
    {
      name: "Home Economics",
      description: "Nutrition, clothing, and home management",
      students: 180,
      performance: 89,
      subjects: ["Food and Nutrition", "Clothing and Textiles", "Management in Living", "Mathematics", "Integrated Science", "English Language", "Social Studies", "French"],
      teachers: 5,
      passRate: 93.7
    },
    {
      name: "Visual Arts",
      description: "Creative arts and design studies",
      students: 150,
      performance: 87,
      subjects: ["Graphic Design", "Picture Making", "Ceramics", "Sculpture", "Art History", "English Language", "Mathematics", "Social Studies"],
      teachers: 4,
      passRate: 92.3
    }
  ];

  const performanceStats = [
    { metric: "Overall WASSCE Pass Rate", value: "95.2%", change: "+2.1%", trend: "up" },
    { metric: "Students with Grade A-C", value: "87.6%", change: "+4.3%", trend: "up" },
    { metric: "University Admission Rate", value: "78.9%", change: "+1.8%", trend: "up" },
    { metric: "Regional Ranking", value: "#2", change: "Same", trend: "stable" },
  ];

  const topTeachers = [
    {
      name: "Dr. Samuel Osei",
      subject: "Mathematics & Physics",
      experience: "15 years",
      qualification: "PhD in Physics",
      performance: 98.2
    },
    {
      name: "Mrs. Grace Mensah",
      subject: "English Literature",
      experience: "12 years", 
      qualification: "MA in English",
      performance: 96.8
    },
    {
      name: "Mr. Kwaku Asante",
      subject: "Chemistry",
      experience: "10 years",
      qualification: "MSc Chemistry",
      performance: 95.4
    },
    {
      name: "Ms. Akosua Darko",
      subject: "History & Government",
      experience: "8 years",
      qualification: "MA in History",
      performance: 94.7
    }
  ];

  const examSchedule = [
    { exam: "Mid-Term Assessment", date: "March 5-12, 2024", status: "upcoming" },
    { exam: "Mock WASSCE", date: "April 15-30, 2024", status: "upcoming" },
    { exam: "Internal Examinations", date: "May 20-June 5, 2024", status: "upcoming" },
    { exam: "WASSCE 2024", date: "August 5-September 15, 2024", status: "upcoming" },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-school-light to-white">
        {/* Hero Section */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-school-dark mb-6">
              Academic Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive academic programs, outstanding student performance, and dedicated faculty committed to educational excellence at Sekondi College.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {performanceStats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-school-primary">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.metric}</div>
                    <div className={`text-xs mt-1 flex items-center justify-center ${
                      stat.trend === 'up' ? 'text-green-600' : 
                      stat.trend === 'down' ? 'text-red-600' : 'text-gray-500'
                    }`}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.change}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <Tabs defaultValue="rankings" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="rankings" className="flex items-center space-x-2">
                <Trophy className="w-4 h-4" />
                <span>Class Rankings</span>
              </TabsTrigger>
              <TabsTrigger value="programs" className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Programs</span>
              </TabsTrigger>
              <TabsTrigger value="performance" className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Performance</span>
              </TabsTrigger>
              <TabsTrigger value="teachers" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Faculty</span>
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Calendar</span>
              </TabsTrigger>
            </TabsList>

            {/* Class Rankings Tab */}
            <TabsContent value="rankings" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Top Students */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Trophy className="w-5 h-5 text-school-primary" />
                        <span>Top Performing Students - Form 3</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {classRankings.map((student, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                                student.position === 1 ? 'bg-yellow-500' :
                                student.position === 2 ? 'bg-gray-400' :
                                student.position === 3 ? 'bg-orange-600' : 'bg-school-primary'
                              }`}>
                                {student.position}
                              </div>
                              <div>
                                <h4 className="font-semibold text-school-dark">{student.name}</h4>
                                <p className="text-sm text-gray-600">{student.class}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-school-primary">{student.average}%</div>
                              <div className="text-sm text-gray-500">{student.subjects} subjects</div>
                            </div>
                            <div className={`w-6 h-6 ${
                              student.trend === 'up' ? 'text-green-500' : 
                              student.trend === 'down' ? 'text-red-500' : 'text-gray-400'
                            }`}>
                              <TrendingUp className="w-full h-full" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 text-center">
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download Full Rankings
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Class Performance Summary */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Class Performance Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {["Form 3A", "Form 3B", "Form 3C"].map((className, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{className}</span>
                            <span className="text-sm text-gray-600">{85 + index * 3}%</span>
                          </div>
                          <Progress value={85 + index * 3} className="h-2" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Achievements</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {[
                        "Regional Science Quiz - 1st Place",
                        "Mathematics Olympiad - Top 5",
                        "Essay Competition - Gold Medal",
                        "Debate Championship - Winners"
                      ].map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Medal className="w-4 h-4 text-school-primary" />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Academic Programs Tab */}
            <TabsContent value="programs" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-school-dark mb-4">Academic Programs</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Six comprehensive programs designed to prepare students for higher education and future careers.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {academicPrograms.map((program, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-school-dark">{program.name}</CardTitle>
                          <p className="text-gray-600 mt-2">{program.description}</p>
                        </div>
                        <Badge className="bg-school-primary">{program.students} Students</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Performance Metrics */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-school-primary">{program.performance}%</div>
                          <div className="text-xs text-gray-500">Avg. Performance</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-school-primary">{program.teachers}</div>
                          <div className="text-xs text-gray-500">Teachers</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-school-primary">{program.passRate}%</div>
                          <div className="text-xs text-gray-500">Pass Rate</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Overall Performance</span>
                          <span>{program.performance}%</span>
                        </div>
                        <Progress value={program.performance} className="h-2" />
                      </div>

                      {/* Subjects */}
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Core Subjects:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {program.subjects.slice(0, 6).map((subject, subIndex) => (
                            <div key={subIndex} className="text-sm text-gray-600 flex items-center">
                              <ChevronRight className="w-3 h-3 text-school-primary mr-1" />
                              {subject}
                            </div>
                          ))}
                        </div>
                        {program.subjects.length > 6 && (
                          <p className="text-sm text-gray-500 mt-2">
                            +{program.subjects.length - 6} more subjects
                          </p>
                        )}
                      </div>

                      <Button variant="outline" className="w-full">
                        View Full Curriculum
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Performance Analytics Tab */}
            <TabsContent value="performance" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* WASSCE Performance */}
                <Card>
                  <CardHeader>
                    <CardTitle>WASSCE Performance Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {["2021", "2022", "2023", "2024 (Projected)"].map((year, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{year}</span>
                            <span className="text-sm text-gray-600">{92 + index * 1.1}%</span>
                          </div>
                          <Progress value={92 + index * 1.1} className="h-3" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Subject Performance */}
                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Subjects (2023)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { subject: "Mathematics", score: 96.2 },
                        { subject: "English Language", score: 94.8 },
                        { subject: "Physics", score: 93.5 },
                        { subject: "Chemistry", score: 92.1 },
                        { subject: "Biology", score: 90.7 }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="font-medium">{item.subject}</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={item.score} className="w-20 h-2" />
                            <span className="text-sm font-semibold text-school-primary">{item.score}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* University Admissions */}
                <Card>
                  <CardHeader>
                    <CardTitle>University Admissions (Class of 2023)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { university: "University of Ghana", students: 45 },
                        { university: "KNUST", students: 38 },
                        { university: "University of Cape Coast", students: 32 },
                        { university: "Other Universities", students: 28 },
                        { university: "International", students: 12 }
                      ].map((admission, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span>{admission.university}</span>
                          <Badge variant="secondary">{admission.students} students</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Academic Awards */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Academic Awards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { award: "Best Performing School - Regional", year: "2023" },
                        { award: "Science Excellence Award", year: "2023" },
                        { award: "Mathematical Olympiad Champions", year: "2022" },
                        { award: "Outstanding Literary Performance", year: "2022" }
                      ].map((award, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-school-primary" />
                          <div>
                            <div className="font-medium">{award.award}</div>
                            <div className="text-sm text-gray-600">{award.year}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Faculty Tab */}
            <TabsContent value="teachers" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-school-dark mb-4">Our Distinguished Faculty</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Highly qualified and experienced educators committed to student success and academic excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {topTeachers.map((teacher, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-school-light rounded-full flex items-center justify-center">
                          <User className="w-8 h-8 text-school-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-school-dark">{teacher.name}</h3>
                          <p className="text-school-accent font-medium">{teacher.subject}</p>
                          <p className="text-sm text-gray-600 mt-1">{teacher.qualification}</p>
                          <p className="text-sm text-gray-500">{teacher.experience} experience</p>
                          
                          <div className="mt-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-600">Student Performance</span>
                              <span className="text-sm font-semibold text-school-primary">{teacher.performance}%</span>
                            </div>
                            <Progress value={teacher.performance} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Faculty Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-school-primary mb-2">45</div>
                    <div className="text-gray-600">Total Faculty</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-school-primary mb-2">12</div>
                    <div className="text-gray-600">PhD Holders</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-school-primary mb-2">28</div>
                    <div className="text-gray-600">Masters Degree</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-school-primary mb-2">15:1</div>
                    <div className="text-gray-600">Student-Teacher Ratio</div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Academic Calendar Tab */}
            <TabsContent value="calendar" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-school-dark mb-4">Academic Calendar 2024</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Important dates and examination schedules for the current academic year.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Examination Schedule */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-school-primary" />
                      <span>Examination Schedule</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {examSchedule.map((exam, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-school-dark">{exam.exam}</h4>
                            <p className="text-sm text-gray-600">{exam.date}</p>
                          </div>
                          <Badge variant={exam.status === 'upcoming' ? 'default' : 'secondary'}>
                            {exam.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Important Dates */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-school-primary" />
                      <span>Important Dates</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { event: "Term Begins", date: "January 8, 2024" },
                        { event: "Mid-Term Break", date: "February 19-23, 2024" },
                        { event: "Parent-Teacher Conference", date: "March 15, 2024" },
                        { event: "Sports Festival", date: "April 10-12, 2024" },
                        { event: "Cultural Day", date: "May 3, 2024" },
                        { event: "Graduation Ceremony", date: "June 20, 2024" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="font-medium">{item.event}</span>
                          <span className="text-sm text-gray-600">{item.date}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Academic Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Academic Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-school-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-8 h-8 text-school-primary" />
                      </div>
                      <h3 className="font-semibold text-school-dark mb-2">Digital Library</h3>
                      <p className="text-gray-600 text-sm">Access to online resources and e-books</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-school-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-school-primary" />
                      </div>
                      <h3 className="font-semibold text-school-dark mb-2">Study Materials</h3>
                      <p className="text-gray-600 text-sm">Comprehensive notes and past questions</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-school-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-school-primary" />
                      </div>
                      <h3 className="font-semibold text-school-dark mb-2">Tutoring</h3>
                      <p className="text-gray-600 text-sm">Extra help and academic support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Academics;
