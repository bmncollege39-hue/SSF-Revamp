export default function Footer() {
  return (
    <footer className="relative w-full min-h-screen px-4 py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto lg:px-6 px-4 py-12 bg-black text-white shadow-[6px_6px_0px_gray]">
        {/* Main Footer Content */}
        <div className="w-full min-h-52">
          <div className="flex items-start justify-between gap-12 flex-col lg:flex-row mb-4">
            {/* Logo and Description */}
            <div className="lg:h-48 flex justify-between flex-col gap-10">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <img src="./images/logo.png" alt="" />
                  <h2 className="text-xl font-semibold">
                    Swastik Srijan Foundation
                  </h2>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                  Creating sustainable change through education, health, women
                  empowerment Together, we can build a better tomorrow.
                </p>
              </div>
              <a
                href="mailto:swastiksrijanfoundation@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <img
                  src="./images/mail_icon.png"
                  alt="mail image"
                  className="w-8"
                />
                swastiksrijanfoundation@gmail.com
              </a>
            </div>

            {/* Quick Links */}
            <div className="w-full lg:w-fit">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#campaigns"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Campaigns
                  </a>
                </li>
                <li>
                  <a
                    href="#join"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Join Us
                  </a>
                </li>
                <li>
                  <a
                    href="#donate"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Donate
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="w-full lg:w-fit">
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img
                    src="./images/location.png"
                    alt="location icon"
                    className="text-gray-300 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-300 text-sm flex flex-col">
                      <span>Rewa Madhya </span>
                      <span>Pradesh, India</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img
                    src="./images/phone.png"
                    alt="phone icon"
                    size={20}
                    className="text-gray-300 mt-1 flex-shrink-0"
                  />
                  <div className="space-y-1">
                    <p className="text-gray-300 text-sm">+91 9424626518</p>
                    <p className="text-gray-300 text-sm">+91 9718346691</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <img src="./images/linkedin.png" alt="linkedin img" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <img src="./images/instagram.png" alt="" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="YouTube"
                  >
                    <img src="./images/youtube.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Swastik Srijan Foundation. All rights reserved.
            </p>
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="w-full min-h-36 md:min-h-76 overflow-hidden flex items-center justify-center">
        <img className="absolute md:-bottom-10 -bottom-2" src="./images/SSF.png" alt="" />
      </div>
    </footer>
  );
}
