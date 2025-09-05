-- Create team_members table
CREATE TABLE public.team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  team TEXT NOT NULL,
  skill_rating INTEGER,
  total_points INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create profiles table for user roles
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- RLS policies for team_members
CREATE POLICY "Users can view their team members"
ON public.team_members
FOR SELECT
TO authenticated
USING (
  team = (SELECT role FROM public.profiles WHERE id = auth.uid())
);

-- RLS policies for profiles
CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (id = auth.uid());

CREATE POLICY "Users can update their own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (id = auth.uid());

-- Insert predefined team head accounts (these will be created manually in Supabase Auth)
-- The profiles will be created via trigger when users sign up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (
    new.id,
    new.email,
    CASE 
      WHEN new.email = 'presentation@enactussha.com' THEN 'presentation'
      WHEN new.email = 'project@enactussha.com' THEN 'project_management'
      WHEN new.email = 'hr@enactussha.com' THEN 'hr'
      WHEN new.email = 'marketing@enactussha.com' THEN 'marketing'
      WHEN new.email = 'multimedia@enactussha.com' THEN 'multimedia'
      WHEN new.email = 'prfinance@enactussha.com' THEN 'pr_finance'
      ELSE 'member'
    END
  );
  RETURN new;
END;
$$;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Add some sample team members data
INSERT INTO public.team_members (name, team, skill_rating, total_points) VALUES
('Ahmed Mohamed', 'presentation', 9, 850),
('Sara Ali', 'presentation', 8, 720),
('Omar Hassan', 'presentation', 7, 650),
('Mona Ibrahim', 'project_management', 9, 900),
('Karim Fahmy', 'project_management', 8, 780),
('Nour Ahmed', 'hr', 9, 820),
('Hassan Mahmoud', 'hr', 7, 680),
('Yasmin Said', 'marketing', 8, 750),
('Mahmoud Gamal', 'marketing', 9, 880),
('Salma Nasser', 'multimedia', 8, 790),
('Mohamed Sayed', 'multimedia', 7, 690),
('Dina Khaled', 'pr_finance', 9, 870),
('Amr Mostafa', 'pr_finance', 8, 740);