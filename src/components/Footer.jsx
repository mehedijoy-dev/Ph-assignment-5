export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 text-center md:text-left md:grid-cols-4">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white font-bold text-sm">
              DS
            </span>
            <span className="font-bold text-lg text-gray-900">Dev Stack</span>
          </div>
          <p className="mt-4 text-sm text-gray-500 max-w-xs mx-auto md:mx-0">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-5 flex items-center justify-center md:justify-start gap-3 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Twitter
            </a>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:contents">
          <div>
            <h4 className="text-xs font-semibold text-gray-400 tracking-wide mb-3 sm:mb-4">
              PRODUCT
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-600">
              <li>
                <a
                  href="#home"
                  className="hover:text-gray-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="hover:text-gray-900 transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-400 tracking-wide mb-3 sm:mb-4">
              COMPANY
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-400 tracking-wide mb-3 sm:mb-4">
              LEGAL
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
