'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-160px)] grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-extrabold text-green-800 mb-6 leading-tight">
          Your Personal <br />
          <span className="text-green-800 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
            Fitness Tracker
          </span>
        </h2>

        <p className="text-lg text-gray-800 mb-8 max-w-lg">
          Track your workouts, meals, and progress all in one place. Stay fit, stay healthy!
          Achieve your fitness goals with our comprehensive tracking tools and personalized insights.
        </p>

        <div className="flex flex-wrap gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/register"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-green-200 font-medium"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/dashboard"
              className="px-8 py-3 border-2 border-green-600 text-green-800 rounded-lg hover:bg-green-100 transition-all font-medium"
            >
              View Dashboard
            </Link>
          </motion.div>
        </div>

        <div className="mt-12 flex items-center space-x-6">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white"
              >
                <Image
                  src={`/images/avatars/${item % 2 === 0 ? 'woman' : 'man'}-${item}.jpg`}
                  alt="User"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-sm text-gray-700">
            <p>
              Join <span className="font-bold text-green-800">1,000+</span> active users
            </p>
            <div className="flex items-center mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1">5.0 (200+ reviews)</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <Image
          src="/images/fitness-main.jpg"
          alt="Fitness"
          width={700}
          height={500}
          className="rounded-2xl shadow-2xl w-full h-auto max-h-[500px] object-cover"
          priority
        />
        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-green-200 rounded-lg mr-3">
              <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-gray-800">+85% efficiency</p>
              <p className="text-xs text-gray-700">reported by our users</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
