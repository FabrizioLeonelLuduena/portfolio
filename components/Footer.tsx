export default function Footer() {
  return (
    <footer className="bg-[#3F1521] text-slate-300 py-8">
      <div className="container mx-auto px-6">
        <p className="text-sm text-left">
          © {new Date().getFullYear()} Portfolio. Desarrollado con Next.js 15 y
          React 19.
        </p>
      </div>
    </footer>
  );
}
