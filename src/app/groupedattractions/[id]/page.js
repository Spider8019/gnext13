import React from 'react'
import Link from 'next/link'

async function groupedAtt(id) {
  let data = await fetch(
    'https://ap-south-1.aws.data.mongodb-api.com/app/ghumakkadapplication-fqtdx/endpoint/quickAttractions',
  )
  data = await data.json()
  return data.filter((item) => {
    return item._id === id
  })[0]
}

export default async function page({ params }) {
  const data = await groupedAtt(params.id)
  return (
    <div
      className="w-full grid place-items-center bg-slate-200"
      style={{
        minHeight: 'calc(100vh - 120px)',
      }}
    >
      <div className="m-4 sm:m-20 grid sm:grid-cols-2 grid-cols-1 sm:gap-20">
        <img
          src={data.coverImage}
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
            <p className="text-2xl sm:text-l">{data.labelForTitle}</p>
            <p className="text-3xl font-semibold">{data.title}</p>
          </div>
          <div className="mt-8 ">
            <p className="text-xl text-center sm:text-left">List of places</p>
            <div>
              {data.attractions.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex p-4 my-4 bg-white rounded-xl items-center gap-8"
                  >
                    <img
                      src={item.placeImage}
                      alt="Place"
                      className="h-12 w-12 rounded-xl"
                    />
                    <div>
                      <p className="text-xl font-semibold">{item.placeName}</p>
                      <p className="text-m sm:text-xl">{item.placeCity}</p>
                    </div>
                  </div>
                )
              })}
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
  const data = await groupedAtt(params.id)
  return {
    title: data.title,
    description: data.labelForTitle,
    icons: {
      icon: data.coverImage,
    },
    keywords: data.attractions
      .map((item) => item.placeName)
      .join(', ')
      .toString(),
    openGraph: {
      title: data.title,
      description: data.labelForTitle,
      type: 'article',
      images: [
        {
          url: data.coverImage, // Must be an absolute URL
        },
      ],
    },
  }
}
