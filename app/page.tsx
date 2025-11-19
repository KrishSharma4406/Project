import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
              📊 Sales Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Advanced Analytics & Insights Platform
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-left">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-700">Interactive charts (Bar, Line, Pie)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-700">Sales data for 2022-2024</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-700">Custom threshold filtering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-700">Year-over-year comparisons</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-700">Atomic design principles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-700">Responsive design</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <Link
              href="/dashboard"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Open Dashboard →
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Built with Next.js 15 • TypeScript • Tailwind CSS • Recharts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
