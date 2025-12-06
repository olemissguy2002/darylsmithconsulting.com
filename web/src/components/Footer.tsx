export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-4 text-xs md:text-sm text-white/70">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center justify-between">
          <span>© {new Date().getFullYear()} Daryl Smith Consulting</span>
          <span className="text-white">AI/ML • Cloud • DevSecOps • Automation</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Serving clients nationwide | Based in Brandon, MS (Jackson Metro Area)
        </p>
      </div>
    </footer>
  );
}
