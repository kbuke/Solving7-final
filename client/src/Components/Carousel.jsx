import { useState, useRef } from "react"

export function Carousel({
  items,
  renderItem,
  height = "h-92 sm:h-96"
}) {
  const [index, setIndex] = useState(0)
  const startX = useRef(null)

  if (!items?.length) return null

  const clampIndex = (newIndex) => {
    if (newIndex < 0) return items.length - 1
    if (newIndex >= items.length) return 0
    return newIndex
  }

  const next = () => setIndex(i => clampIndex(i + 1))
  const prev = () => setIndex(i => clampIndex(i - 1))

  const handleStart = (x) => {
    startX.current = x
  }

  const handleEnd = (x) => {
    if (startX.current === null) return

    const diff = startX.current - x

    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
    }

    startX.current = null
  }

  return (
    <div className="relative w-full">
      {/* VIEWPORT */}
      <div
        className="overflow-hidden w-full touch-pan-y"
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={(e) => handleEnd(e.clientX)}
      >
        {/* TRACK */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`w-full shrink-0 flex items-center justify-center ${height}`}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      {/* ARROWS (desktop only) */}
      <button
        onClick={prev}
        className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2
                   bg-white/80 hover:bg-white shadow rounded-full p-3 h-10 w-10 items-center text-black"
      >
        ←
      </button>

      <button
        onClick={next}
        className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2
                   bg-white/80 hover:bg-white shadow rounded-full p-3 h-10 w-10 items-center text-black"
      >
        →
      </button>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition
              ${i === index ? "bg-green-700 scale-110" : "bg-gray-300"}
            `}
          />
        ))}
      </div>
    </div>
  )
}

