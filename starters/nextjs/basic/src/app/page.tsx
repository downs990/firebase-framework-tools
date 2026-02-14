import Link from "next/link";

export default function Home() {
  const message = process.env["MESSAGE"] || "Hello!";
  return (
    <main className="content">
      <h1 className="heading">BPC Site Coming Soon...</h1>
      <p>{message}</p>

      <section className="features">
        
      </section>
    </main>
  );
}
