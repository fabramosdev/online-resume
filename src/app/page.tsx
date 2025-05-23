import { ThemeProvider } from "@/app/components/theme-provider";
import { Header } from "./sessions/Header";
import { About } from "./sessions/About";
// import { About } from "./sessions/About";
// import { Employees } from "./sessions/Employees";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      <About />
    </ThemeProvider>
  );
}
