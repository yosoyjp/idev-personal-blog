import React from "react"

interface Props{
  pageProps: any,
  Component: React.FC,
}

const MyApp : React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
