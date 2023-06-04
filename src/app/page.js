import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen px-24">
      <Sidebar />
      <Header />
    </main>
  );
}
