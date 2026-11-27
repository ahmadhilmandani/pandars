
export default function ApdCard({
  title,
  bgColor = 'bg-white',
  paragraph,
  img,
}) {
  return (
    // <div className="max-w-[400px]">
    <div className={`relative flex flex-col bg-clip-border rounded-2xl w-64 ${bgColor} aspect-[9_/_11] cursor-pointer`}>

      {img && (
        <img
          src={img}
          alt={title}
          className="w-40 h-40 object-contain relative -mt-16"
        />
      )}

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="block leading-relaxed">
            {title}
          </h3>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="80%" viewBox="0 0 250 6" fill="none" className="services-card__line-svg"><path d="M2.0019 3.05432C84.0122 2.70675 166.022 2.34756 248.04 2C244.505 2.66037 240.969 3.32077 237.434 3.98115" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>

        <p className="text-left font-sans text-sm antialiased font-normal leading-normal mt-4">
          {paragraph}
        </p>
      </div>

    </div>

  )
}
