import Link from "next/link";

export default function CustomLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
           <header className=" bg-blue-500 text-white text-center p-4">
                <h1>Header</h1>
           </header>
           <div className="grid grid-cols-5 min-h-screen">
                <nav className="flex flex-col gap-8 text-black text-2xl bg-blue-200 p-4">
                    <Link href="/auth/login">Login</Link>
                    <Link href="/finance">Finance</Link>
                    <Link href="/marketing">Marketing</Link>
                    <Link href="/accounting">Accounting</Link>
                </nav>
                <div className="col-span-4 p-4">
                    {children}
                </div>
           </div>      
        </body>
      </html>
    );
  }