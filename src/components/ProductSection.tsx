import { motion } from 'framer-motion'
import ProductCarousel from './ProductCarousel'
import { products } from '../data/products'

export default function ProductSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            인기 제품
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            디자이너와 함께 만든 특별한 컬렉션을 만나보세요
          </p>
        </motion.div>

        <ProductCarousel products={products} />
      </div>
    </section>
  )
}
