import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // i later modify fonts
    <div className="font-work-sans">
      <Navbar />
      {children}
    </div>
  );
}
