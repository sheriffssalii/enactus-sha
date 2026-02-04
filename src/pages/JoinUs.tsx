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
import { Loader2, CheckCircle, CalendarX2 } from "lucide-react";

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

  const formOpen = false; // change to false when applications are closed
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
    { id: "project-management", name: "Project Management" },
    { id: "presentation", name: "Presentation" },
    { id: "pr-finance", name: "Public Relations & Finance" },
    { id: "marketing", name: "Branding" },
  ];

  const interviewSlots = [
    { id: "slot1", label: "Friday" },
    { id: "slot2", label: "Saturday" },
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
      usherName: "" 
    };

    // Your deployed Apps Script Web App URL
    const googleScriptURL = "https://script.google.com/macros/s/AKfycbwaFgbjWJ0bI6QROqKA3gFoxG0fdxuVdYDfZjUg4sKffIflZ5kaT0RM2jnkZp0QzWiq/exec";

    await fetch("/api/proxy", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
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
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg"
      >
        <Card className="w-full text-center shadow-xl border-2 border-border/50 bg-card/95 backdrop-blur-sm transition-colors duration-300">
          <CardContent className="p-6 sm:p-8 md:p-10 flex flex-col items-center space-y-4 sm:space-y-6">
            <div className="rounded-full bg-muted/50 p-4 sm:p-6 transition-colors duration-300">
              <CalendarX2 className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-muted-foreground transition-colors duration-300" />
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-foreground transition-colors duration-300">
                Applications Closed
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-roboto leading-relaxed transition-colors duration-300">
                We're not accepting applications right now.
                <br className="hidden sm:block" />
                Please check back later for updates.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}



  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center w-full max-w-sm sm:max-w-md"
        >
          <Card className="shadow-xl border-2 border-border/50 bg-card/95 backdrop-blur-sm transition-colors duration-300">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4 sm:mb-6 transition-colors duration-300" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold text-foreground mb-4 sm:mb-6 transition-colors duration-300">
                Application Submitted!
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-roboto mb-6 sm:mb-8 leading-relaxed transition-colors duration-300">
                Thank you for your interest in joining Enactus Shorouk Academy. 
                We'll review your application and contact you within 5 business days.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="font-poppins w-full sm:w-auto px-6 py-3 transition-all duration-300"
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
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-xl sm:max-w-2xl lg:max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-4 sm:mb-6 transition-colors duration-300">
            Join <span className="text-primary transition-colors duration-300">Our Team</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-roboto leading-relaxed transition-colors duration-300 max-w-3xl mx-auto">
            Ready to make a difference? Apply to become part of our social entrepreneurship community.
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-xl border-2 border-border/50 bg-card/95 backdrop-blur-sm transition-colors duration-300">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-poppins text-center text-foreground transition-colors duration-300">
                Application Form
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                {/* Personal Information */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-poppins font-semibold text-foreground transition-colors duration-300">
                    Personal Information
                  </h3>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="fullName" className="text-sm sm:text-base text-foreground transition-colors duration-300">Full Name *</Label>
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      className="mt-1 h-10 sm:h-12 text-sm sm:text-base transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-xs sm:text-sm text-destructive mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base text-foreground transition-colors duration-300">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-1 h-10 sm:h-12 text-sm sm:text-base transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-xs sm:text-sm text-destructive mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="phoneNumber" className="text-sm sm:text-base text-foreground transition-colors duration-300">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      {...register("phoneNumber")}
                      className="mt-1 h-10 sm:h-12 text-sm sm:text-base transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                    {errors.phoneNumber && (
                      <p className="text-xs sm:text-sm text-destructive mt-1">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Team Selection */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-poppins font-semibold text-foreground mb-2 transition-colors duration-300">
                      Team Selection *
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 transition-colors duration-300">
                      Select up to 3 teams you're interested in joining:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {teams.map((team) => (
                      <div key={team.id} className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg border border-border/50 bg-muted/20 transition-all duration-300 hover:bg-muted/40">
                        <Checkbox
                          id={team.id}
                          checked={selectedTeams.includes(team.id)}
                          onCheckedChange={(checked) =>
                            handleTeamChange(team.id, checked as boolean)
                          }
                          disabled={
                            !selectedTeams.includes(team.id) && selectedTeams.length >= 3
                          }
                          className="transition-colors duration-300"
                        />
                        <Label
                          htmlFor={team.id}
                          className={`text-xs sm:text-sm font-roboto cursor-pointer transition-colors duration-300 ${
                            !selectedTeams.includes(team.id) && selectedTeams.length >= 3
                              ? "text-muted-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {team.name}
                        </Label>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs sm:text-sm text-muted-foreground font-medium transition-colors duration-300">
                    Selected: {selectedTeams.length}/3 teams
                  </div>

                  {errors.teams && (
                    <p className="text-xs sm:text-sm text-destructive">
                      {errors.teams.message}
                    </p>
                  )}
                </div>

                {/* Interview Slot */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-poppins font-semibold text-foreground transition-colors duration-300">
                    Interview Schedule *
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300">
                    Choose one available interview slot:
                  </p>

                  <RadioGroup
                    value={interviewSlot}
                    onValueChange={(value) => setValue("interviewSlot", value as "slot1" | "slot2")}
                    className="space-y-3 sm:space-y-4"
                  >
                    {interviewSlots.map((slot) => (
                      <div key={slot.id} className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg border border-border/50 bg-muted/20 transition-all duration-300 hover:bg-muted/40">
                        <RadioGroupItem value={slot.id} id={slot.id} className="transition-colors duration-300" />
                        <Label htmlFor={slot.id} className="text-xs sm:text-sm font-roboto cursor-pointer text-foreground transition-colors duration-300">
                          {slot.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {errors.interviewSlot && (
                    <p className="text-xs sm:text-sm text-destructive">
                      {errors.interviewSlot.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4 sm:pt-6">
                  <Button
                    type="submit"
                    className="w-full font-poppins font-semibold h-10 sm:h-12 text-sm sm:text-base transition-all duration-300"
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
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <Card className="bg-primary/5 border-primary/20 shadow-lg transition-colors duration-300">
            <CardContent className="p-4 sm:p-6 md:p-8 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-poppins font-semibold text-foreground mb-4 sm:mb-6 transition-colors duration-300">
                What Happens Next?
              </h3>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-muted-foreground font-roboto transition-colors duration-300">
                <p>1. We'll review your application within 5 business days</p>
                <p>2. Candidates will be contacted for interviews</p>
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