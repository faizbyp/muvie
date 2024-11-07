import { Metadata } from "next";
import App from "./App";

export const metadata: Metadata = {
  title: "Home - Muvie",
  description: "Movie list application that allow user to modify their bookmark or favorite movies",
};

export default async function AppPage() {
  return <App />;
}
