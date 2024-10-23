import NavBar from "./_components/NavBar";

export default function MarketingLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="selection:bg-lime-300">
      <NavBar />
      {children}
    </div>
  );
}