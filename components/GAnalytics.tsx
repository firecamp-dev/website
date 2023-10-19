import Script from 'next/script'
 
function Home() {
  return (
    <div className="container">
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
        `}
      </Script>
    </div>
  )
}
 
export default Home
