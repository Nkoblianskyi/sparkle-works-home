import Link from "next/link"
import type { Service } from "@/data/services"

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 1
  const buttonColor = index % 2 === 0 ? "from-blue-600 to-red-600" : "from-red-600 to-blue-600"
  const gradientColor = index % 2 === 0 ? "from-blue-600 to-red-600" : "from-red-600 to-blue-600"

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
        isEven ? "lg:mt-8" : ""
      } h-[520px] flex flex-col`}
    >
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={service.image || "/placeholder.svg"}
          alt={`${service.title} Service`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-2 h-8 bg-gradient-to-b ${gradientColor} rounded-full`}></div>
          <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{service.shortDescription}</p>
        <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-1">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div
                className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${idx % 2 === 0 ? "bg-blue-600" : "bg-red-600"}`}
              ></div>
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={`/services/${service.slug}`} className="block mt-auto">
          <button
            className={`w-full bg-gradient-to-r ${buttonColor} text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg`}
          >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  )
}
