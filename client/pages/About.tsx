import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-school-light to-white">
        {/* Hero Section */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-school-dark mb-6">
              About Sekondi College
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A legacy of academic excellence and character development spanning decades of educational leadership in the Western Region.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-school-dark">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To provide quality secondary education that develops intellectual, moral, and social capabilities of students to become responsible leaders and productive citizens.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-school-dark">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To be the leading secondary institution in Ghana, recognized for academic excellence, character development, and innovative educational practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-school-dark">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Excellence, Integrity, Respect, Innovation, and Service to Community. These core values guide our daily interactions and decision-making processes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* School History */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-school-dark mb-6">Our Rich History</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Established in the heart of Sekondi-Takoradi, Sekondi College has been a beacon of educational excellence for generations of students. Our institution was founded with the vision of providing comprehensive secondary education that prepares students for higher education and meaningful careers.
                  </p>
                  <p>
                    Over the years, we have grown from a small community school to one of the most respected senior high schools in the Western Region of Ghana. Our alumni have gone on to become leaders in various fields including medicine, engineering, law, education, and public service.
                  </p>
                  <p>
                    Today, we continue to uphold the traditions of excellence while embracing modern educational approaches and technologies that prepare our students for the challenges of the 21st century.
                  </p>
                </div>
              </div>
              <div className="bg-school-light rounded-lg p-8">
                <div className="text-center">
                  <GraduationCap className="w-24 h-24 text-school-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-school-dark mb-4">School Motto</h3>
                  <p className="text-xl text-school-accent font-semibold">"Knowledge, Wisdom, Service"</p>
                  <p className="text-gray-600 mt-4">
                    Our motto reflects our commitment to academic excellence, practical wisdom, and service to humanity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-school-dark mb-12">School Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <CardTitle>Dr. Kwame Asante</CardTitle>
                  <p className="text-school-accent">Headmaster</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Leading with over 25 years of educational experience, dedicated to academic excellence and student development.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <CardTitle>Mrs. Akosua Mensah</CardTitle>
                  <p className="text-school-accent">Assistant Headmaster (Academic)</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Overseeing curriculum development and academic programs with a focus on innovative teaching methods.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <CardTitle>Mr. Joseph Boateng</CardTitle>
                  <p className="text-school-accent">Assistant Headmaster (Administration)</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Managing school operations and facilities to ensure a conducive learning environment for all students.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
