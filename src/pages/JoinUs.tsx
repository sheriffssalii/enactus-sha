import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";
import { CalendarX2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
  teams: z.array(z.string()).min(1, "Please select at least one team").max(3, "You can select maximum 3 teams"),
  interviewSlot: z.enum(["slot1", "slot2"], {
    required_error: "Please select an interview slot",
  }),
});

type FormData = z.infer<typeof formSchema>;

const JoinUs = () => {

  const formOpen = true; // change to false when applications are closed
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teams: [],
    },
  });

  const selectedTeams = watch("teams") || [];
  const interviewSlot = watch("interviewSlot");

  const teams = [
    { id: "hr", name: "Human Resources" },
    { id: "multimedia", name: "Multimedia" },
    { id: "project-management", name: "Project Management" },
    { id: "presentation", name: "Presentation" },
    { id: "pr-finance", name: "Public Relations & Finance" },
    { id: "marketing", name: "Marketing" },
  ];

  const interviewSlots = [
    { id: "slot1", label: "Saturday, March 16th - 10:00 AM to 2:00 PM" },
    { id: "slot2", label: "Sunday, March 17th - 2:00 PM to 6:00 PM" },
  ];

  const handleTeamChange = (teamId: string, checked: boolean) => {
    let updatedTeams = [...selectedTeams];
    
    if (checked) {
      if (updatedTeams.length < 3) {
        updatedTeams.push(teamId);
      } else {
        toast({
          title: "Maximum teams reached",
          description: "You can select maximum 3 teams.",
          variant: "destructive",
        });
        return;
      }
    } else {
      updatedTeams = updatedTeams.filter(team => team !== teamId);
    }
    
    setValue("teams", updatedTeams);
  };

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  try {
    // Format team names from selected IDs
    const selectedTeamNames = data.teams.map(teamId =>
      teams.find(t => t.id === teamId)?.name || ""
    );

    const formData = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      firstTeam: selectedTeamNames[0] || "",
      secondTeam: selectedTeamNames[1] || "",
      thirdTeam: selectedTeamNames[2] || "",
      interviewSlot: interviewSlots.find(slot => slot.id === data.interviewSlot)?.label || "",
    };

    // Your deployed Apps Script Web App URL
    const googleScriptURL = "https://script.google.com/macros/s/AKfycbyvm3Elg5ABzAnY3IC1Imecwv7Sfd4mGWkK12brizQIgw8S-S2ZEPTu4EyQ4J2aXoMitw/exec";

    await fetch(googleScriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setIsSubmitted(true);
    toast({
      title: "Application submitted successfully!",
      description: "We'll review your application and contact you soon.",
    });

    reset();
  } catch (error) {
    toast({
      title: "Submission failed",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

// ✅ FORM CLOSED VIEW
if (!formOpen) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
      <Card className="max-w-md w-full text-center shadow-lg border border-border bg-card dark:bg-card">
        <CardContent className="p-6 sm:p-8 flex flex-col items-center">
          <CalendarX2 className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mb-4" />

          <h2 className="text-xl sm:text-2xl font-poppins font-bold text-foreground mb-2">
            Applications Closed
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-roboto">
            We’re not accepting applications right now.
            Please check back later for updates.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}



  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-poppins font-bold text-foreground mb-4">
                Application Submitted!
              </h2>
              <p className="text-muted-foreground font-roboto mb-6">
                Thank you for your interest in joining Enactus Shorouk Academy. 
                We'll review your application and contact you within 5 business days.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="font-poppins"
              >
                Submit Another Application
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Join <span className="text-primary">Our Team</span>
          </h1>
          <p className="text-xl text-muted-foreground font-roboto">
            Ready to make a difference? Apply to become part of our social entrepreneurship community.
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-center">
                Application Form
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-poppins font-semibold text-foreground">
                    Personal Information
                  </h3>
                  
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-1"
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      {...register("phoneNumber")}
                      className="mt-1"
                      placeholder="Enter your phone number"
                    />
                    {errors.phoneNumber && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Team Selection */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-poppins font-semibold text-foreground mb-2">
                      Team Selection *
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select up to 3 teams you're interested in joining:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {teams.map((team) => (
                      <div key={team.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={team.id}
                          checked={selectedTeams.includes(team.id)}
                          onCheckedChange={(checked) =>
                            handleTeamChange(team.id, checked as boolean)
                          }
                          disabled={
                            !selectedTeams.includes(team.id) && selectedTeams.length >= 3
                          }
                        />
                        <Label
                          htmlFor={team.id}
                          className={`text-sm ${
                            !selectedTeams.includes(team.id) && selectedTeams.length >= 3
                              ? "text-muted-foreground"
                              : ""
                          }`}
                        >
                          {team.name}
                        </Label>
                      </div>
                    ))}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Selected: {selectedTeams.length}/3 teams
                  </div>

                  {errors.teams && (
                    <p className="text-sm text-destructive">
                      {errors.teams.message}
                    </p>
                  )}
                </div>

                {/* Interview Slot */}
                <div className="space-y-4">
                  <h3 className="text-lg font-poppins font-semibold text-foreground">
                    Interview Schedule *
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Choose one available interview slot:
                  </p>

                  <RadioGroup
                    value={interviewSlot}
                    onValueChange={(value) => setValue("interviewSlot", value as "slot1" | "slot2")}
                  >
                    {interviewSlots.map((slot) => (
                      <div key={slot.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={slot.id} id={slot.id} />
                        <Label htmlFor={slot.id} className="text-sm">
                          {slot.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {errors.interviewSlot && (
                    <p className="text-sm text-destructive">
                      {errors.interviewSlot.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full font-poppins font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                What Happens Next?
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground font-roboto">
                <p>1. We'll review your application within 5 business days</p>
                <p>2. Qualified candidates will be contacted for interviews</p>
                <p>3. Final selections will be announced via WhatsApp</p>
                <p>4. New members will receive onboarding information</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
    
  );
};

export default JoinUs;