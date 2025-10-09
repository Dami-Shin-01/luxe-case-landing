import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-600">Premium Case</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-neutral-700 hover:text-primary-600 transition-colors">
              제품
            </a>
            <a href="#designers" className="text-neutral-700 hover:text-primary-600 transition-colors">
              디자이너
            </a>
            <a href="#about" className="text-neutral-700 hover:text-primary-600 transition-colors">
              소개
            </a>
            <Button variant="primary" size="sm">
              문의하기
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-primary-600 p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#products"
                className="block text-neutral-700 hover:text-primary-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                제품
              </a>
              <a
                href="#designers"
                className="block text-neutral-700 hover:text-primary-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                디자이너
              </a>
              <a
                href="#about"
                className="block text-neutral-700 hover:text-primary-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                소개
              </a>
              <Button variant="primary" size="sm" className="w-full">
                문의하기
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
