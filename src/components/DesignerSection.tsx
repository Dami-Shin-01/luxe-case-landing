import { motion } from 'framer-motion'
import { designers } from '../data/designers'

export default function DesignerSection() {
  return (
    <section id="designers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            협업 디자이너
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            세계적인 디자이너들과 함께 만들어가는 특별한 케이스
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designers.map((designer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={designer.image}
                  alt={designer.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-1">
                {designer.name}
              </h3>
              <p className="text-primary-600 font-medium mb-2">
                {designer.specialty}
              </p>
              <p className="text-neutral-600 text-sm">
                {designer.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
