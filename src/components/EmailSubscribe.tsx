import { motion } from 'framer-motion'

interface EmailSubscribeProps {
  tallyFormId?: string
}

export default function EmailSubscribe({ tallyFormId = 'YOUR_TALLY_FORM_ID' }: EmailSubscribeProps) {
  return (
    <section id="subscribe" className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            신제품 소식 받기
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            한정판 출시 정보와 독점 할인 혜택을 가장 먼저 받아보세요
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Tally Form Embed */}
          <iframe
            src={`https://tally.so/embed/${tallyFormId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            width="100%"
            height="400"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="이메일 구독"
            className="min-h-[400px]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-neutral-500 mt-6"
        >
          언제든지 구독을 취소할 수 있습니다. 개인정보는 안전하게 보호됩니다.
        </motion.p>
      </div>
    </section>
  )
}
