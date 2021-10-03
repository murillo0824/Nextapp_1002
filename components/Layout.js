import Head from "next/head";
import Link from "next/link";

export default function Layout({children,title="hp by next js"}){
  return(
    <div className="text-gray-600 flex flex-col justify-center items-center min-h-screen text-sm font-mono">
      <Head>
        <title>
          {title}
        </title>
      </Head>
      <header>
          <nav className="bg-gray-800">
            <div className="flex items-center pl-8 h-14 w-screen flex-row sm:flex-col sm:h-auto sm:pl-0">
              <div className="flex space-x-4">
                <Link href="/">
                  <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded sm:w-full">
                    Home
                  </a>
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link href="/blog-page">
                  <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded sm:w-full">
                    Blog
                  </a>
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link href="/contact-page">
                  <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded sm:w-full sm:block">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex flex-1 flex-col justify-center items-center">
          {children}
        </main>
    </div>
  )
}