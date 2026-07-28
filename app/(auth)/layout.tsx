export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-[#F6EFE8] p-10">
      {children}
    </div>
  );
}
