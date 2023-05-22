interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;

  startTrial: () => string;
}

interface User {
     behance?: string;
}

interface Admin extends User {
     github: string;
}

const firstUser: User = {
  dbId: 22,
  email: "asb@gmail.com",
  userId: 2212,
  googleId: "google",

  startTrial() {
    return "anirudh";
  },
};
