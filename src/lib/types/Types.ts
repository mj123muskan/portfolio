export type Experience = {
  companyName: string;
  designation: string;
  duration: string;
  works: Work[];
  companyIconUrl: string;
};

export type Work = {
  subteam: string | null;
  projects: string[];
};