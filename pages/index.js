import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
   const sendEmail = () => {
    const emailAddress = "arnaldogn@gmail.com";
    const subject = "Support Request";
    const body = "Hello, I need help with ";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Labeling!" />
        <p className="description">
          <a href="javascript:void(0);" onclick={sendEmail}>Contact Support</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}