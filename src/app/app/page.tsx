import { Metadata } from "next";
import App from "./App";
import API from "@/utils/api";
import { Movie } from "@/types/Movie";

export const metadata: Metadata = {
  title: "Muvie App",
  description: "Movie list application that allow user to modify their bookmark or favorite movies",
};

export default async function AppPage() {
  return <App />;
}
