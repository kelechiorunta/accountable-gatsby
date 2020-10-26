import React from "react"

const Container = props => {
  return (
    <main class="w-full px-6 sm:px-10 pt-32 sm:pt-40 pb-16">
      {props.children}
    </main>
  )
}

export default Container
