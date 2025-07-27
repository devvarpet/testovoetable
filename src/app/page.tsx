import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center px-4 -mt-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-normal text-gray-800 mb-4">
            Entity Management
          </h1>
          <p className="text-lg text-gray-600">
            Choose a category to get started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          <Link
            href="/products"
            className="group flex flex-col items-center p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h2 className="text-xl font-normal text-gray-800 mb-2">Products</h2>
            <p className="text-sm text-gray-600 text-center">
              Manage your product catalog and inventory
            </p>
          </Link>

          <Link
            href="/price-plans"
            className="group flex flex-col items-center p-8 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-normal text-gray-800 mb-2">
              Price Plans
            </h2>
            <p className="text-sm text-gray-600 text-center">
              Configure pricing and subscription plans
            </p>
          </Link>

          <Link
            href="/pages"
            className="group flex flex-col items-center p-8 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-normal text-gray-800 mb-2">Pages</h2>
            <p className="text-sm text-gray-600 text-center">
              Create and manage content pages
            </p>
          </Link>
        </div>
      </main>

      <footer className="py-6 text-center">
        <p className="text-sm text-gray-500">
          © 2025 Entity Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
