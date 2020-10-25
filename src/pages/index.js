import React from "react"
import Layout from "../layout/layout"
import Link from "gatsby-link"

const HomePage = () => {
  return (
    <Layout>
      <main className="theme-hero flex h-full items-center px-6 sm:px-12 lg:px-32 z-0">
        <div className="w-full md:w-9/12 lg:w-9/12 xl:w-8/12 z-10">
          <h1 className="text-theme mb-2 text-3xl sm:text-5xl font-medium leading-none tracking-tightest">
            Accountable.org.ng
          </h1>
          <h1 className="mb-8 text-gray-800 text-2xl sm:text-4xl font-medium leading-tight tracking-tightest">
            Hold your government, politicians, institutions, public office
            holders & citizens accountable…
          </h1>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 lg:w-1/3 sm:mr-6">
              <div className="mb-5 hidden sm:visible sm:flex flex-col">
                <h1 className="text-theme text-2xl font-medium tracking-tightest">
                  Report A Crime
                </h1>
                <p className="text-lg">
                  Tell us about a crime committed to you
                </p>
              </div>
              <Link
                className="bg-theme block rounded-lg px-6 py-4 text-white font-medium"
                to="/report"
              >
                <span>Report Crime</span>
                <div className="float-right">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    clip-rule="evenodd"
                  >
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 mt-4 sm:mt-0">
              <div className="mb-5 hidden sm:visible sm:flex flex-col">
                <h1 className="text-theme text-2xl font-medium tracking-tightest">
                  Crimes Database
                </h1>
                <p className="text-lg">
                  See all crimes as reported by every one
                </p>
              </div>
              <Link
                className="bg-black block rounded-lg px-6 py-4 text-white font-medium"
                to="/crimes"
              >
                <span>See All Crimes</span>
                <div className="float-right">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    clip-rule="evenodd"
                  >
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer class="px-6 sm:px-12 lg:px-32 py-4 lg:py-8 flex flex-wrap items-center absolute bottom-0 w-screen">
        <p class="text-tertiary text-lg">
          Accountable.org.ng &copy; 2020. All Rights Reserved.
        </p>
      </footer>
    </Layout>
  )
}

export default HomePage
