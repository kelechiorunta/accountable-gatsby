import React from "react"
import Layout from "../layout/layout"

const HomePage = () => {
  return (
    <Layout>
      <main className="landing-screen-bg flex h-full items-center px-6 sm:px-12 lg:px-32 z-0">
        <div className="w-full md:w-9/12 lg:w-9/12 xl:w-8/12 z-10">
          <h1 className="text-theme mb-2 text-3xl sm:text-5xl font-medium leading-none tracking-tightest">
            Accountable.org.ng
          </h1>
          <h1 className="mb-8 text-gray-800 text-2xl sm:text-4xl font-medium leading-tight tracking-tightest">
            Hold your government, politicians, institutions, public office
            holders & citizens accountable…
          </h1>
        </div>
      </main>
    </Layout>
  )
}

export default HomePage
