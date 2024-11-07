import { Metadata } from "next";
import Profile from "./Profile";

export const metadata: Metadata = {
  title: "Profile - Muvie",
};

export default async function ProfilePage() {
  return <Profile />;
}
