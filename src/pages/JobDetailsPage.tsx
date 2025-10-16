import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Briefcase, MapPin, Clock, DollarSign, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface JobPosting {
  id: string;
  title: string;
  job_type: "full_time" | "internship";
  role: string;
  region: string;
  country: string;
  description: string;
  commitment_period: string;
  compensation: string;
  location_type: string;
  requirements: string;
}

export default function JobDetailsPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobPosting | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  const fetchJobDetails = async () => {
    try {
      const { data, error } = await supabase
        .from("job_postings")
        .select("*")
        .eq("id", jobId)
        .eq("status", "open")
        .maybeSingle();

      if (error) throw error;
      setJob(data);
    } catch (error) {
      console.error("Error fetching job details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-16">
          <p className="text-center text-muted-foreground">Loading job details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
            <p className="text-muted-foreground mb-6">This job posting may have been closed or removed.</p>
            <Button onClick={() => navigate("/careers")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Button variant="ghost" onClick={() => navigate("/careers")} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Careers
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <CardTitle className="text-3xl mb-2">{job.title}</CardTitle>
                  <p className="text-lg text-muted-foreground">{job.role}</p>
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {job.job_type === "full_time" ? "Full Time" : "Internship"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{job.country}, {job.region} · {job.location_type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{job.commitment_period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span>{job.compensation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span>{job.job_type === "full_time" ? "Full-Time Position" : "Internship"}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">About the Role</h2>
                <p className="text-muted-foreground whitespace-pre-line">{job.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Requirements</h2>
                <p className="text-muted-foreground whitespace-pre-line">{job.requirements}</p>
              </div>

              <div className="pt-6 border-t">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto"
                  onClick={() => navigate(`/careers/${job.id}/apply`)}
                >
                  Apply for this Position
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
