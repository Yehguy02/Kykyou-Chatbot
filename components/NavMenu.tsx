'use client';

import Link from "next/link";

export default function NavMenu() {
  return (
    <header>
        <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm dark:shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-6 w-full">
                        <Link href="/" aria-label="Home" className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                KC
                            </span>
                            <span className="font-semibold text-lg text-gray-800 dark:text-gray-100">Kykyou Chatbot</span>
                        </Link>

                        <Link
                            href="/chatbot"
                            aria-label="Character Bot"
                            className="text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors"
                        >
                            Character Bot
                        </Link>

                        <Link
                            href="/about"
                            aria-label="About"
                            className="text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 transition-colors"
                        >
                            About
                        </Link>

                        <button
                            aria-label="Search"
                            className="ml-auto p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-indigo-400 dark:hover:bg-gray-800 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
                            </svg>
                        </button>
                    </div>

                    <div /> {/* keep right side empty to preserve spacing */}
                </div>
            </div>
        </nav>
    </header>
  );
}