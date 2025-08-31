import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-school-light to-white flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full text-center">
          <CardHeader>
            <div className="w-24 h-24 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Construction className="w-12 h-12 text-white" />
            </div>
            <CardTitle className="text-3xl text-school-dark">{title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-gray-600">
              {description}
            </p>
            <p className="text-sm text-gray-500">
              This page is currently under development. Please check back soon for updates.
            </p>
            <div className="bg-school-light p-4 rounded-lg">
              <p className="text-school-dark font-medium">
                Need more information? Contact us at:
              </p>
              <p className="text-school-accent">info@sekondicollege.edu.gh</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PlaceholderPage;
