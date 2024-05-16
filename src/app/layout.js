import './globals.css'
import Link from 'next/link'

export const metadata = {
  title:"ghumakkad - Discover iconic, landmarks, vibrant culture of Uttar Pradesh",
  description:"Embark on a journey of faith and excitement with \"Ghumakkad,\" your perfect partner for discovering the cultural marvels and activities in Uttar Pradesh Darshan. Our app is crafted to be your guide, providing a wealth of information on the state's most enchanting destinations. From the splendor of the magnificent Ram Mandir in Ayodhya to the lively atmosphere of bustling Hazratganj markets and the mesmerizing Ganga Aarti in Varanasi, \"Ghumakkad\" is your gateway to immersing yourself in the essence of Uttar Pradesh Darshan's vibrant heritage.",
  keywords:"ayodhya lucknow varanasi uttar pradesh UP tourism tour car booking aarti timings thingstodo ram mandir",
  icons: {
    icon: "https://i.pinimg.com/736x/8f/35/3c/8f353cf52588e3cb1fac5d07c8ab0dd1.jpg"
  },
}
const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 sm:py-4 sm:px-20 bg-white shadow">
      <Link href="/">
        <img
          src="https://i.pinimg.com/736x/8f/35/3c/8f353cf52588e3cb1fac5d07c8ab0dd1.jpg"
          alt="logo"
          className="h-16 w-16 object-contain"
        />
      </Link>
      <div className="flex gap-4">
        <Link href="/contact">
          <p className="text-xl font-semibold">Contacts</p>
        </Link>
      </div>
    </div>
  )
}
const Footer = () => {
  return (
    <div className="shadow px-4 sm:px-20 py-4 bg-white">
      <div className="flex justify-between text-gray-600">
        <p>ghumakkad</p>
        <div>
          <p>All Rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <section className='bg-slate-200'>{children}</section>
        <Footer />
      </body>
    </html>
  )
}
