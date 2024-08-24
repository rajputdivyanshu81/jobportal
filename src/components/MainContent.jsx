import React from 'react';
import { FiSearch, FiCode, FiBriefcase, FiTrendingUp } from 'react-icons/fi';

function MainContent() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Elevate Your Dev Career
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8">
                Connect with top tech companies and find your dream developer job.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  Find Jobs
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  For Employers
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-image.svg" alt="Developers working" className="w-full" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Job Search Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Find Your Next Dev Job</h2>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-grow">
                <label htmlFor="job-search" className="sr-only">Search jobs</label>
                <div className="relative">
                  <input
                    type="text"
                    id="job-search"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Job title, company, or keywords"
                  />
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Why Developers Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FiCode />}
              title="Tailored for Devs"
              description="Job listings curated specifically for software developers, from startups to tech giants."
            />
            <FeatureCard
              icon={<FiBriefcase />}
              title="Quality Opportunities"
              description="We partner with companies that value developer talent and offer competitive packages."
            />
            <FeatureCard
              icon={<FiTrendingUp />}
              title="Career Growth"
              description="Access resources, mentorship opportunities, and skill-building workshops to advance your career."
            />
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Featured Developer Jobs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <JobCard
              company="TechCorp"
              position="Senior Full Stack Developer"
              location="Remote"
              salary="$120k - $160k"
            />
            <JobCard
              company="StartupX"
              position="React Native Developer"
              location="New York, NY"
              salary="$100k - $130k"
            />
            <JobCard
              company="DataDriven"
              position="Machine Learning Engineer"
              location="San Francisco, CA"
              salary="$130k - $180k"
            />
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              View All Jobs
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
      <div className="text-blue-600 mb-4">{React.cloneElement(icon, { size: 36 })}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function JobCard({ company, position, location, salary }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{position}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{company}</p>
      <div className="flex flex-col sm:flex-row justify-between text-sm">
        <span className="text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">{location}</span>
        <span className="text-blue-600 dark:text-blue-400 font-semibold">{salary}</span>
      </div>
    </div>
  );
}

export default MainContent;