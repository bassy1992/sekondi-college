import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Monitor,
  BookOpen,
  FileText,
  Calendar,
  Trophy,
  Users,
  Video,
  Download,
  Upload,
  Clock,
  CheckCircle,
  AlertCircle,
  Play,
  User,
  Lock,
  Mail,
  Search,
  Bell,
  MessageSquare,
  Folder,
  PenTool,
  BarChart3,
  Settings,
  LogIn,
  Eye,
  Star,
  ChevronRight,
  Wifi,
  Camera
} from "lucide-react";
import { useState } from "react";

const ELearning = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'student' | 'teacher'>('student');

  // Sample data - in real app, this would come from API
  const upcomingAssignments = [
    {
      subject: "Mathematics",
      title: "Quadratic Equations Assignment",
      dueDate: "2024-02-15",
      status: "pending",
      progress: 0
    },
    {
      subject: "Physics", 
      title: "Motion and Forces Lab Report",
      dueDate: "2024-02-18",
      status: "in-progress",
      progress: 65
    },
    {
      subject: "Chemistry",
      title: "Organic Compounds Research",
      dueDate: "2024-02-20",
      status: "submitted",
      progress: 100
    },
    {
      subject: "English Literature",
      title: "Poetry Analysis Essay", 
      dueDate: "2024-02-22",
      status: "pending",
      progress: 0
    }
  ];

  const courses = [
    {
      name: "Core Mathematics",
      teacher: "Dr. Samuel Osei",
      progress: 78,
      totalLessons: 24,
      completedLessons: 19,
      nextLesson: "Logarithms and Exponentials",
      newContent: 3
    },
    {
      name: "Physics",
      teacher: "Mrs. Grace Mensah", 
      progress: 65,
      totalLessons: 22,
      completedLessons: 14,
      nextLesson: "Electric Circuits",
      newContent: 2
    },
    {
      name: "Chemistry",
      teacher: "Mr. Kwaku Asante",
      progress: 82,
      totalLessons: 20,
      completedLessons: 16,
      nextLesson: "Chemical Bonding",
      newContent: 1
    },
    {
      name: "English Literature",
      teacher: "Ms. Akosua Darko",
      progress: 71,
      totalLessons: 18,
      completedLessons: 13,
      nextLesson: "African Poetry",
      newContent: 4
    }
  ];

  const recentGrades = [
    { subject: "Mathematics", assignment: "Mid-term Test", grade: "A", score: 92, date: "2024-01-28" },
    { subject: "Physics", assignment: "Lab Practical", grade: "B+", score: 87, date: "2024-01-25" },
    { subject: "Chemistry", assignment: "Quiz 3", grade: "A-", score: 89, date: "2024-01-22" },
    { subject: "Literature", assignment: "Essay Assignment", grade: "B", score: 83, date: "2024-01-20" }
  ];

  const onlineClasses = [
    {
      subject: "Mathematics",
      topic: "Calculus Introduction",
      time: "10:00 AM - 11:00 AM",
      date: "Today",
      teacher: "Dr. Samuel Osei",
      status: "live",
      participants: 45
    },
    {
      subject: "Physics",
      topic: "Electromagnetic Waves",
      time: "2:00 PM - 3:00 PM", 
      date: "Today",
      teacher: "Mrs. Grace Mensah",
      status: "upcoming",
      participants: 38
    },
    {
      subject: "Chemistry",
      topic: "Organic Reactions",
      time: "9:00 AM - 10:00 AM",
      date: "Tomorrow",
      teacher: "Mr. Kwaku Asante", 
      status: "scheduled",
      participants: 42
    }
  ];

  const LoginForm = () => (
    <div className="min-h-screen bg-gradient-to-b from-school-light to-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Monitor className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-school-dark">E-Learning Portal</CardTitle>
          <p className="text-gray-600">Sign in to access your digital classroom</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant={userType === 'student' ? 'default' : 'outline'}
              onClick={() => setUserType('student')}
              className="w-full"
            >
              <User className="w-4 h-4 mr-2" />
              Student
            </Button>
            <Button 
              variant={userType === 'teacher' ? 'default' : 'outline'}
              onClick={() => setUserType('teacher')}
              className="w-full"
            >
              <Users className="w-4 h-4 mr-2" />
              Teacher
            </Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Student ID / Staff ID</label>
              <Input placeholder="Enter your ID" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <Input type="password" placeholder="Enter your password" className="mt-1" />
            </div>
          </div>

          <Button 
            onClick={() => setIsLoggedIn(true)} 
            className="w-full"
            size="lg"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Sign In
          </Button>

          <div className="text-center space-y-2">
            <a href="#" className="text-sm text-school-primary hover:underline">Forgot Password?</a>
            <p className="text-xs text-gray-500">
              Need help? Contact IT Support: +233 (0) 312-000-001
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (!isLoggedIn) {
    return (
      <Layout>
        <LoginForm />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-b from-school-light to-white">
        {/* Header Dashboard */}
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-school-dark">
                  Welcome back, {userType === 'student' ? 'Kwame Asante' : 'Dr. Samuel Osei'}
                </h1>
                <p className="text-gray-600">
                  {userType === 'student' ? 'Form 3A - General Science' : 'Mathematics Department'}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                  <Badge className="ml-2 bg-red-500">3</Badge>
                </Button>
                <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(false)}>
                  Sign Out
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-school-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-school-dark">
                    {userType === 'student' ? '8' : '12'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {userType === 'student' ? 'Active Courses' : 'Classes Teaching'}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="w-8 h-8 text-school-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-school-dark">
                    {userType === 'student' ? '4' : '15'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {userType === 'student' ? 'Pending Assignments' : 'Assignments to Grade'}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Trophy className="w-8 h-8 text-school-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-school-dark">
                    {userType === 'student' ? '85.5%' : '94.2%'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {userType === 'student' ? 'Average Grade' : 'Class Average'}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Video className="w-8 h-8 text-school-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-school-dark">
                    {userType === 'student' ? '2' : '3'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {userType === 'student' ? 'Live Classes Today' : 'Classes Today'}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <Tabs defaultValue="dashboard" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
              <TabsTrigger value="dashboard">
                <Monitor className="w-4 h-4 mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="courses">
                <BookOpen className="w-4 h-4 mr-2" />
                Courses
              </TabsTrigger>
              <TabsTrigger value="assignments">
                <FileText className="w-4 h-4 mr-2" />
                Assignments
              </TabsTrigger>
              <TabsTrigger value="grades">
                <BarChart3 className="w-4 h-4 mr-2" />
                Grades
              </TabsTrigger>
              <TabsTrigger value="live">
                <Video className="w-4 h-4 mr-2" />
                Live Classes
              </TabsTrigger>
              <TabsTrigger value="resources">
                <Folder className="w-4 h-4 mr-2" />
                Resources
              </TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { action: "Submitted Chemistry assignment", time: "2 hours ago", type: "assignment" },
                          { action: "Attended Physics live class", time: "1 day ago", type: "class" },
                          { action: "Downloaded Math study materials", time: "2 days ago", type: "resource" },
                          { action: "Completed English quiz", time: "3 days ago", type: "quiz" }
                        ].map((activity, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className={`w-3 h-3 rounded-full ${
                              activity.type === 'assignment' ? 'bg-green-500' :
                              activity.type === 'class' ? 'bg-blue-500' :
                              activity.type === 'resource' ? 'bg-purple-500' : 'bg-orange-500'
                            }`}></div>
                            <div className="flex-1">
                              <p className="font-medium text-school-dark">{activity.action}</p>
                              <p className="text-sm text-gray-500">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Deadlines</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {upcomingAssignments.slice(0, 3).map((assignment, index) => (
                          <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                            <div>
                              <h4 className="font-medium text-school-dark">{assignment.title}</h4>
                              <p className="text-sm text-gray-600">{assignment.subject}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-gray-700">
                                {new Date(assignment.dueDate).toLocaleDateString()}
                              </p>
                              <Badge variant={assignment.status === 'pending' ? 'destructive' : 
                                             assignment.status === 'in-progress' ? 'default' : 'secondary'}>
                                {assignment.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Today's Schedule</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { subject: "Mathematics", time: "8:00 - 9:00 AM", room: "Room 101" },
                          { subject: "Physics", time: "10:00 - 11:00 AM", room: "Lab 2", type: "live" },
                          { subject: "Chemistry", time: "2:00 - 3:00 PM", room: "Lab 1" },
                          { subject: "English", time: "3:30 - 4:30 PM", room: "Room 205" }
                        ].map((schedule, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-school-dark">{schedule.subject}</p>
                              <p className="text-xs text-gray-500">{schedule.room}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600">{schedule.time}</p>
                              {schedule.type === 'live' && (
                                <Badge className="bg-red-500 text-xs">Live</Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="w-4 h-4 mr-2" />
                        Download Timetable
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message Teachers
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="w-4 h-4 mr-2" />
                        View Full Calendar
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-school-dark mb-4">My Courses</h2>
                <p className="text-gray-600">Track your progress and access course materials</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-school-dark">{course.name}</CardTitle>
                          <p className="text-gray-600">{course.teacher}</p>
                        </div>
                        {course.newContent > 0 && (
                          <Badge className="bg-red-500">{course.newContent} New</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{course.completedLessons} of {course.totalLessons} lessons</span>
                          <span>{course.totalLessons - course.completedLessons} remaining</span>
                        </div>
                      </div>

                      <div className="bg-school-light p-3 rounded-lg">
                        <p className="text-sm font-medium text-school-dark">Next Lesson:</p>
                        <p className="text-sm text-gray-600">{course.nextLesson}</p>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Play className="w-4 h-4 mr-2" />
                          Continue
                        </Button>
                        <Button size="sm" variant="outline">
                          <Folder className="w-4 h-4 mr-2" />
                          Materials
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Assignments Tab */}
            <TabsContent value="assignments" className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-school-dark">Assignments</h2>
                <div className="flex space-x-2">
                  <Input placeholder="Search assignments..." className="w-64" />
                  <Button variant="outline">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {upcomingAssignments.map((assignment, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-school-dark">{assignment.title}</h3>
                            <Badge variant="outline">{assignment.subject}</Badge>
                            <Badge variant={assignment.status === 'pending' ? 'destructive' : 
                                           assignment.status === 'in-progress' ? 'default' : 'secondary'}>
                              {assignment.status}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{Math.ceil((new Date(assignment.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left</span>
                            </div>
                          </div>

                          {assignment.progress > 0 && (
                            <div className="mb-4">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{assignment.progress}%</span>
                              </div>
                              <Progress value={assignment.progress} className="h-2" />
                            </div>
                          )}
                        </div>

                        <div className="flex space-x-2 ml-4">
                          {assignment.status === 'submitted' ? (
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                          ) : (
                            <>
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                              <Button size="sm">
                                <Upload className="w-4 h-4 mr-2" />
                                {assignment.status === 'in-progress' ? 'Continue' : 'Start'}
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Grades Tab */}
            <TabsContent value="grades" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-school-dark mb-4">Academic Performance</h2>
                <p className="text-gray-600">Track your grades and academic progress</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Grades</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentGrades.map((grade, index) => (
                          <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                            <div>
                              <h4 className="font-medium text-school-dark">{grade.assignment}</h4>
                              <p className="text-sm text-gray-600">{grade.subject}</p>
                              <p className="text-xs text-gray-500">{grade.date}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-school-primary">{grade.grade}</div>
                              <div className="text-sm text-gray-600">{grade.score}%</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Overall Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-school-primary mb-2">85.5%</div>
                        <div className="text-gray-600 mb-4">Current Average</div>
                        <Progress value={85.5} className="h-3" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Subject Rankings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { subject: "Mathematics", rank: "2nd", average: 92 },
                          { subject: "Physics", rank: "5th", average: 87 },
                          { subject: "Chemistry", rank: "3rd", average: 89 },
                          { subject: "Literature", rank: "8th", average: 83 }
                        ].map((ranking, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="font-medium">{ranking.subject}</span>
                            <div className="text-right">
                              <div className="text-sm font-bold text-school-primary">{ranking.rank}</div>
                              <div className="text-xs text-gray-500">{ranking.average}%</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Live Classes Tab */}
            <TabsContent value="live" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-school-dark mb-4">Virtual Classroom</h2>
                <p className="text-gray-600">Join live classes and access recorded sessions</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {onlineClasses.map((classItem, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-school-dark">{classItem.subject}</CardTitle>
                          <p className="text-gray-600">{classItem.topic}</p>
                        </div>
                        <Badge variant={classItem.status === 'live' ? 'destructive' : 
                                      classItem.status === 'upcoming' ? 'default' : 'secondary'}>
                          {classItem.status === 'live' && <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>}
                          {classItem.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{classItem.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <User className="w-4 h-4" />
                          <span>{classItem.teacher}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{classItem.participants} participants</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        {classItem.status === 'live' ? (
                          <Button className="flex-1 bg-red-600 hover:bg-red-700">
                            <Camera className="w-4 h-4 mr-2" />
                            Join Live Class
                          </Button>
                        ) : classItem.status === 'upcoming' ? (
                          <Button className="flex-1" disabled>
                            <Wifi className="w-4 h-4 mr-2" />
                            Starts in 2 hours
                          </Button>
                        ) : (
                          <Button variant="outline" className="flex-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            Add to Calendar
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recorded Classes */}
              <Card>
                <CardHeader>
                  <CardTitle>Recorded Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { subject: "Mathematics", topic: "Trigonometry", duration: "45 min", views: 234 },
                      { subject: "Physics", topic: "Newton's Laws", duration: "38 min", views: 189 },
                      { subject: "Chemistry", topic: "Acids and Bases", duration: "42 min", views: 167 },
                      { subject: "Literature", topic: "Poetry Analysis", duration: "35 min", views: 145 }
                    ].map((recording, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                          <Play className="w-8 h-8 text-gray-400" />
                        </div>
                        <h4 className="font-medium text-school-dark">{recording.topic}</h4>
                        <p className="text-sm text-gray-600">{recording.subject}</p>
                        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                          <span>{recording.duration}</span>
                          <span>{recording.views} views</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-school-dark mb-4">Learning Resources</h2>
                <p className="text-gray-600">Access study materials, textbooks, and supplementary resources</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {[
                  { name: "Textbooks", icon: BookOpen, count: 45, color: "bg-blue-500" },
                  { name: "Study Guides", icon: FileText, count: 28, color: "bg-green-500" },
                  { name: "Past Papers", icon: PenTool, count: 156, color: "bg-purple-500" },
                  { name: "Video Tutorials", icon: Video, count: 89, color: "bg-red-500" }
                ].map((resource, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${resource.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <resource.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-school-dark mb-2">{resource.name}</h3>
                      <p className="text-2xl font-bold text-school-primary">{resource.count}</p>
                      <p className="text-sm text-gray-600">Available</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Digital Library */}
              <Card>
                <CardHeader>
                  <CardTitle>Digital Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: "Advanced Mathematics Textbook", type: "PDF", size: "15.2 MB", downloads: 1234 },
                      { title: "Physics Practical Manual", type: "PDF", size: "8.7 MB", downloads: 987 },
                      { title: "Chemistry Reference Guide", type: "PDF", size: "12.1 MB", downloads: 876 },
                      { title: "Literature Anthology", type: "PDF", size: "22.4 MB", downloads: 654 },
                      { title: "Mathematics Past Papers 2020-2023", type: "ZIP", size: "45.8 MB", downloads: 2341 },
                      { title: "Science Laboratory Videos", type: "Video", size: "156 MB", downloads: 543 }
                    ].map((resource, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-school-light rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-school-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-school-dark text-sm">{resource.title}</h4>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-xs text-gray-500">{resource.type} • {resource.size}</span>
                              <Button size="sm" variant="outline">
                                <Download className="w-3 h-3 mr-1" />
                                Download
                              </Button>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">{resource.downloads} downloads</p>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default ELearning;
