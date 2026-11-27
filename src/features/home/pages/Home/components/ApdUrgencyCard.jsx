
export default function ApdUrgencyCard({
  title,
  paragraph
}) {
  return (
    // <div className="max-w-[400px]">
    <div className={`relative bg-clip-border rounded-2xl w-80 bg-forest-700 aspect-video cursor-pointer`}>

      <div className="p-6">
        <div className="flex items-center justify-between text-white">
          <h3 className="block leading-relaxed text-white text-left">
            {title}
          </h3>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="80%" viewBox="0 0 250 6" fill="none" class="services-card__line-svg"><path d="M2.0019 3.05432C84.0122 2.70675 166.022 2.34756 248.04 2C244.505 2.66037 240.969 3.32077 237.434 3.98115" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>

        <p className="text-left font-sans text-sm antialiased font-normal leading-normal mt-4 text-white">
          {paragraph}
        </p>
      </div>

    </div>

  )
}
