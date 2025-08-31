import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Globe,
  User,
  MessageSquare,
  Building,
  GraduationCap,
  Users,
  BookOpen,
  Shield,
  Calendar,
  Car,
  Briefcase,
  HeadphonesIcon,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: ""
      });
    }, 3000);
  };

  const departmentContacts = [
    {
      department: "Admissions Office",
      icon: GraduationCap,
      contact: "Mrs. Akosua Mensah",
      phone: "+233 (0) 312-000-001",
      email: "admissions@sekondicollege.edu.gh",
      hours: "Mon-Fri: 8:00 AM - 4:00 PM",
      description: "New student applications, entrance requirements, and enrollment"
    },
    {
      department: "Academic Affairs",
      icon: BookOpen,
      contact: "Dr. Samuel Osei",
      phone: "+233 (0) 312-000-002", 
      email: "academics@sekondicollege.edu.gh",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      description: "Curriculum inquiries, academic programs, and student records"
    },
    {
      department: "Student Affairs",
      icon: Users,
      contact: "Mr. Joseph Boateng",
      phone: "+233 (0) 312-000-003",
      email: "students@sekondicollege.edu.gh", 
      hours: "Mon-Fri: 7:30 AM - 4:30 PM",
      description: "Student services, accommodation, and extracurricular activities"
    },
    {
      department: "IT Support",
      icon: HeadphonesIcon,
      contact: "Ms. Ama Darko",
      phone: "+233 (0) 312-000-004",
      email: "itsupport@sekondicollege.edu.gh",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
      description: "E-learning platform, technical issues, and digital resources"
    },
    {
      department: "Finance Office",
      icon: Briefcase,
      contact: "Mr. Kwame Asante",
      phone: "+233 (0) 312-000-005",
      email: "finance@sekondicollege.edu.gh",
      hours: "Mon-Fri: 8:00 AM - 4:00 PM",
      description: "School fees, scholarships, and financial assistance"
    },
    {
      department: "Security",
      icon: Shield,
      contact: "24/7 Security",
      phone: "+233 (0) 312-000-006",
      email: "security@sekondicollege.edu.gh",
      hours: "24/7 Emergency Line",
      description: "Campus security, emergency situations, and visitor access"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+233 (0) 312-000-000",
      secondary: "Main Reception",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us", 
      primary: "info@sekondicollege.edu.gh",
      secondary: "General Inquiries",
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Sekondi-Takoradi",
      secondary: "Western Region, Ghana",
      action: "Get Directions"
    },
    {
      icon: Globe,
      title: "Online",
      primary: "www.sekondicollege.edu.gh",
      secondary: "Official Website",
      action: "Visit Website"
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#", color: "bg-blue-600" },
    { name: "Twitter", icon: Twitter, url: "#", color: "bg-sky-500" },
    { name: "Instagram", icon: Instagram, url: "#", color: "bg-pink-600" },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-school-light to-white">
        {/* Hero Section */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-school-dark mb-6">
              Contact Sekondi College
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're here to help! Get in touch with us for admissions, academic inquiries, or any questions about our school community.
            </p>
            
            {/* Quick Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-school-dark mb-2">{method.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{method.primary}</p>
                    <p className="text-xs text-gray-500 mb-4">{method.secondary}</p>
                    <Button size="sm" variant="outline">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-school-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-green-700 mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600">
                        Thank you for contacting us. We'll respond to your inquiry within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="+233 (0) XXX-XXX-XXX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Inquiry Category *
                          </label>
                          <select
                            required
                            value={formData.category}
                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                            className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-primary"
                          >
                            <option value="">Select a category</option>
                            <option value="admissions">Admissions</option>
                            <option value="academics">Academic Programs</option>
                            <option value="student-life">Student Life</option>
                            <option value="fees">Fees & Finance</option>
                            <option value="technical">Technical Support</option>
                            <option value="general">General Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          placeholder="Brief subject of your inquiry"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Please provide details about your inquiry..."
                          rows={5}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-school-primary" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "7:30 AM - 5:00 PM" },
                    { day: "Saturday", hours: "8:00 AM - 12:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <AlertCircle className="w-4 h-4" />
                      <span>Emergency contact available 24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Visit Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Car className="w-5 h-5 text-school-primary" />
                    <span>Plan Your Visit</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    We welcome prospective students and parents to visit our campus and see our facilities firsthand.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Campus Tour
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                  <div className="bg-school-light p-3 rounded-lg">
                    <p className="text-xs text-gray-600">
                      <Info className="w-3 h-3 inline mr-1" />
                      Tours available Monday-Friday at 10:00 AM and 2:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center`}>
                          <social.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-700">{social.name}</p>
                          <p className="text-sm text-gray-500">@sekondicollege</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Department Contacts */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-school-dark mb-4">Department Contacts</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Need specific assistance? Contact the right department directly for faster service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentContacts.map((dept, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-school-primary rounded-full flex items-center justify-center">
                        <dept.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-school-dark">{dept.department}</CardTitle>
                        <p className="text-sm text-gray-600">{dept.contact}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">{dept.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="w-4 h-4 text-school-primary" />
                        <span>{dept.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="w-4 h-4 text-school-primary" />
                        <span className="break-all">{dept.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-school-primary" />
                        <span>{dept.hours}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Phone className="w-3 h-3 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Mail className="w-3 h-3 mr-1" />
                        Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Location & Map */}
          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-school-primary" />
                  <span>Our Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-school-dark mb-2">Campus Address</h3>
                      <p className="text-gray-600">
                        Sekondi College<br />
                        Liberation Road<br />
                        Sekondi-Takoradi<br />
                        Western Region, Ghana
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-school-dark mb-2">Transportation</h3>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Public transport available from Takoradi Market Circle</li>
                        <li>• Taxi services readily available</li>
                        <li>• School bus services for students</li>
                        <li>• Parking available for visitors</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-school-dark mb-2">Nearby Landmarks</h3>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• 5 minutes from Sekondi Railway Station</li>
                        <li>• 10 minutes from Takoradi Central Market</li>
                        <li>• 15 minutes from Takoradi Port</li>
                        <li>• Adjacent to Western Regional Hospital</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-16 h-16 mx-auto mb-4" />
                      <p className="font-medium">Interactive Map</p>
                      <p className="text-sm">Google Maps integration would be placed here</p>
                      <Button className="mt-4" variant="outline">
                        Open in Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contact */}
          <div className="mt-12">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-800 mb-1">Emergency Contact</h3>
                    <p className="text-red-700 text-sm">
                      For urgent matters outside office hours, contact our 24/7 security line: 
                      <span className="font-semibold ml-1">+233 (0) 312-000-006</span>
                    </p>
                  </div>
                  <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
