import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const applicationSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters").max(100),
  age: z.number().min(16, "Must be at least 16 years old").max(100),
  gender: z.string().min(1, "Please select gender"),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().optional(),
  country: z.string().min(1, "Country is required").max(100),
  state: z.string().min(1, "State is required").max(100),
  city: z.string().min(1, "City is required").max(100),
  education_level: z.string().min(1, "Education level is required"),
  college_name: z.string().max(200).optional(),
  gpa_percentage: z.number().min(0).max(100).optional(),
  github_url: z.string().url("Invalid URL").optional().or(z.literal("")),
  resume_url: z.string().url("Invalid URL").min(1, "Resume link is required"),
  projects_description: z.string().max(2000).optional(),
  technical_achievement: z.string().min(10, "Please describe your achievement").max(2000),
  additional_info: z.string().max(2000).optional(),
});

export default function JobApplicationPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [jobTitle, setJobTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    education_level: "",
    college_name: "",
    gpa_percentage: "",
    github_url: "",
    resume_url: "",
    projects_description: "",
    technical_achievement: "",
    additional_info: "",
  });

  useEffect(() => {
    if (jobId) {
      fetchJobTitle();
    }
  }, [jobId]);

  const fetchJobTitle = async () => {
    try {
      const { data, error } = await supabase
        .from("job_postings")
        .select("title")
        .eq("id", jobId)
        .maybeSingle();

      if (error) throw error;
      if (data) setJobTitle(data.title);
    } catch (error) {
      console.error("Error fetching job:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate form data
      const validatedData = applicationSchema.parse({
        ...formData,
        age: formData.age ? parseInt(formData.age) : 0,
        gpa_percentage: formData.gpa_percentage ? parseFloat(formData.gpa_percentage) : undefined,
        github_url: formData.github_url || undefined,
        college_name: formData.college_name || undefined,
        projects_description: formData.projects_description || undefined,
        additional_info: formData.additional_info || undefined,
      });

      const applicationData = {
        job_id: jobId!,
        full_name: validatedData.full_name,
        age: validatedData.age,
        gender: validatedData.gender,
        email: validatedData.email,
        phone: validatedData.phone || null,
        country: validatedData.country,
        state: validatedData.state,
        city: validatedData.city,
        education_level: validatedData.education_level,
        college_name: validatedData.college_name || null,
        gpa_percentage: validatedData.gpa_percentage || null,
        github_url: validatedData.github_url || null,
        resume_url: validatedData.resume_url,
        projects_description: validatedData.projects_description || null,
        technical_achievement: validatedData.technical_achievement,
        additional_info: validatedData.additional_info || null,
      };

      const { error } = await supabase.from("job_applications").insert(applicationData);

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. We'll review your application soon.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error("Error submitting application:", error);
        toast({
          title: "Error",
          description: "Failed to submit application. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for applying. We have received your application and will review it carefully.
              We'll be in touch soon!
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate("/careers")} variant="outline">
                View More Jobs
              </Button>
              <Button onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Button variant="ghost" onClick={() => navigate(`/careers/${jobId}`)} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Job Details
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Apply for {jobTitle}</CardTitle>
              <p className="text-muted-foreground">Please fill out all required fields carefully</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="full_name">Full Name *</Label>
                      <Input
                        id="full_name"
                        required
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        required
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer_not_to_say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Location</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Education</h3>
                  
                  <div>
                    <Label htmlFor="education_level">Education Level *</Label>
                    <Select value={formData.education_level} onValueChange={(value) => setFormData({ ...formData, education_level: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high_school">High School</SelectItem>
                        <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="college_name">College/University Name</Label>
                      <Input
                        id="college_name"
                        value={formData.college_name}
                        onChange={(e) => setFormData({ ...formData, college_name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="gpa_percentage">GPA/Percentage (Last Semester)</Label>
                      <Input
                        id="gpa_percentage"
                        type="number"
                        step="0.01"
                        min="0"
                        max="100"
                        value={formData.gpa_percentage}
                        onChange={(e) => setFormData({ ...formData, gpa_percentage: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Professional Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="github_url">GitHub Profile URL</Label>
                      <Input
                        id="github_url"
                        type="url"
                        placeholder="https://github.com/username"
                        value={formData.github_url}
                        onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="resume_url">Resume Link (Google Drive/Dropbox) *</Label>
                      <Input
                        id="resume_url"
                        type="url"
                        required
                        placeholder="https://drive.google.com/..."
                        value={formData.resume_url}
                        onChange={(e) => setFormData({ ...formData, resume_url: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projects_description">Projects Worked On</Label>
                    <Textarea
                      id="projects_description"
                      placeholder="Describe the projects you've worked on..."
                      rows={4}
                      value={formData.projects_description}
                      onChange={(e) => setFormData({ ...formData, projects_description: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="technical_achievement">Most Technical Project/Accomplishment *</Label>
                    <Textarea
                      id="technical_achievement"
                      placeholder="Describe your most impressive technical achievement in detail..."
                      rows={5}
                      required
                      value={formData.technical_achievement}
                      onChange={(e) => setFormData({ ...formData, technical_achievement: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="additional_info">Additional Information</Label>
                    <Textarea
                      id="additional_info"
                      placeholder="Any other information you'd like to share..."
                      rows={3}
                      value={formData.additional_info}
                      onChange={(e) => setFormData({ ...formData, additional_info: e.target.value })}
                    />
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
