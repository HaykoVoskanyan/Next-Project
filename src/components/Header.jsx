import Link from "next/link";
import ManuItem from "./ManuItem";
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'


export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <ManuItem title='home' adress='/' Icon={AiFillHome} />
        <ManuItem title='about' adress='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <Link href='/' className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-2 px-2">IMDB</span>
        <span className="text-xl hidden sm:inline">CLONE</span>
      </Link>
    </div>
  )
}
