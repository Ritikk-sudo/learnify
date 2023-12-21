import Image from 'next/image'
import Header from "../app/components/Header"
import Caraousel from "@/app/components/Caraousel"
import Card from "@/app/components/Card"

export default function Home() {
  return (
    <>
      
      <Caraousel />
      <div className='ml-5 md:mx-28 mt-14'>
        <h1 className='text-2xl font-semi-bold'>
          Trending courses
        </h1>
      </div>
      <Card />
    </>
  )
}
