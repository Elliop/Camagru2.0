import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Camagru 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello Camagru !
    </div>
  );
}
