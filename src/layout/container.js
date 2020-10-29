import React from "react"

const Container = props => {
  return (
    <main
      class={`w-full px-6 sm:px-10 xl:px-20 xxl:px-40 pt-32 sm:pt-40 xxl:pt-48 pb-16 ${props.animation}`}
    >
      {props.children}
    </main>
  )
}

export default Container
