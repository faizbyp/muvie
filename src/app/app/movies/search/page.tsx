import { Metadata } from "next";
import SearchMovie from "./SearchMovie";

export const metadata: Metadata = {
  title: "Search - Muvie",
};

export default async function ProfilePage() {
  return <SearchMovie />;
}
