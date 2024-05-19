import React from 'react'
import Link from 'next/link'

async function placefromacity(placeName) {
  let data = await fetch(
    'https://ap-south-1.aws.data.mongodb-api.com/app/ghumakkadapplication-fqtdx/endpoint/attractionInACity?placeName='+placeName,
  )
  return await data.json()
}

export default async function page({ params }) {
  const data = await placefromacity(params.placeName)
  console.log(data)
  return (
    <div
      className="w-full grid place-items-center bg-slate-200"
      style={{
        minHeight: 'calc(100vh - 120px)',
      }}
    >
      <div className="m-4 sm:m-20 grid sm:grid-cols-2 grid-cols-1 sm:gap-20">
        <img
          src={data.placeImage}
          alt="Cover"
          className="w-full rounded-xl bg-white sm:sticky sm:top-8"
        />
        <div className="block sm:hidden">
          <div className="flex justify-center w-full gap-4 mt-8 flex-row mb-8">
            <Link
              href="https://play.google.com/store/apps/details?id=com.spydar.tour"
              target="_blank"
              className=""
            >
              <p className="p-2 sm:p-4 bg-[#5271FF] w-full sm:w-fit rounded-xl text-xl sm:text-2xl text-white cursor-pointer shadow-xl">
                Download .APK from Playstore
              </p>
            </Link>
          </div>
          <div className="flex justify-center w-full gap-4 mb-8">
            <Link
              href="https://play.google.com/store/apps/details?id=com.spydar.tour"
              target="_blank"
              className=""
            >
              <p className="p-2 sm:p-4 bg-[#5271FF] w-full sm:w-fit rounded-xl text-xl sm:text-2xl text-white cursor-pointer shadow-xl">
                Download .APK from Playstore
              </p>
            </Link>
          </div>
        </div>

        <div>
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-l">{data.placeName}</p>
            <p className="text-3xl font-semibold my-2">{data.placeCity}</p>
            <p className='text-2xl sm:text-l'>{data.placeLocation.text}</p>
          </div>
          <div className="mt-8 ">
          <div className="flex gap-4 mt-8 justify-center sm:justify-start flex-row">
            <Link
              href="https://play.google.com/store/apps/details?id=com.spydar.tour"
              target="_blank"
            >
              <p className="p-2 sm:p-4 bg-[#5271FF] w-full sm:w-fit rounded-xl text-xl sm:text-2xl text-white cursor-pointer shadow-xl">
                Download .APK from Playstore
              </p>
            </Link>
          </div>                
          
          </div>
          <div className="flex gap-4 mt-8 justify-center sm:justify-start flex-row">
            <Link
              href="https://play.google.com/store/apps/details?id=com.spydar.tour"
              target="_blank"
            >
              <p className="p-2 sm:p-4 bg-[#5271FF] w-full sm:w-fit rounded-xl text-xl sm:text-2xl text-white cursor-pointer shadow-xl">
                Download .APK from Playstore
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }) {
  const data = await placefromacity(params.placeName)
  console.log(data)
  return {
    title: data.placeName + " - "+data.placeCity,
    description: data.placeContent.content_1,
    icons: {
      icon: data.placeImage,
    },
    keywords: data,
    openGraph: {
      title: data.placeName,
      description: data.placeContent.content_1.split("<p>")[1].slice(0,-3),
      type: 'article',
      images: [
        {
          url: data.placeImage, // Must be an absolute URL
        },
      ],
    },
  }
}
