export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">Premium Case</h3>
            <p className="text-sm text-neutral-400">
              디자이너와 함께하는<br />프리미엄 폰케이스
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">제품</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">전체 제품</a></li>
              <li><a href="#" className="hover:text-white transition-colors">신상품</a></li>
              <li><a href="#" className="hover:text-white transition-colors">베스트셀러</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">배송정보</a></li>
              <li><a href="#" className="hover:text-white transition-colors">반품/교환</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">회사소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">디자이너 지원</a></li>
              <li><a href="#" className="hover:text-white transition-colors">문의하기</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-sm text-neutral-400">
          <p>&copy; 2024 Premium Case. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
