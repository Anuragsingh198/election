import { CANDIDATE_IMAGE_URL } from '../constants/images'

function HeroSection() {
  return (
    <section className="relative pt-0 pb-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-row items-start gap-2 md:gap-4 lg:gap-6">
          {/* Left Content */}
          <div className="w-[60%] text-left space-y-2 md:space-y-4">
            {/* Candidate Name */}
            <h1 
              className="text-lg md:text-2xl lg:text-4xl xl:text-6xl font-extrabold text-white drop-shadow-2xl" 
              style={{ 
                textShadow: '2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
                WebkitTextStroke: '1px #000'
              }}
            >
              मनिक बहादुर सिंह
            </h1>

            {/* Ward Badge and Post */}
            <div className="flex flex-row items-center justify-start gap-2 md:gap-4 my-2 md:my-4">
              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-white text-xs md:text-base lg:text-xl font-semibold">वार्ड संख्या</span>
                <div className="w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 rounded-full bg-election-navy text-white flex items-center justify-center text-xs md:text-lg lg:text-3xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <div className="text-white text-xs md:text-base lg:text-xl font-semibold">से</div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-4 mb-2 md:mb-4">
              <p className="text-white text-xs md:text-base lg:text-2xl font-bold mb-1 md:mb-2">जिला पंचायत सदस्य</p>
              <p className="text-election-yellow text-xs md:text-sm lg:text-xl font-semibold">(भावी उम्मीदवार)</p>
            </div>

            {/* Campaign Commitment */}
            <div className="bg-election-yellow text-election-red rounded-lg p-2 md:p-4 lg:p-6 shadow-lg border-2 border-election-red/20">
              <h2 className="text-xs md:text-base lg:text-3xl font-extrabold text-election-red mb-2 md:mb-3 text-left">
                मेरा संकल्प
              </h2>
              <div className="space-y-1 md:space-y-2 lg:space-y-3">
                <p className="text-xs md:text-sm lg:text-lg font-semibold text-election-red flex items-start gap-1 md:gap-2">
                  <span className="text-sm md:text-lg lg:text-2xl">✓</span>
                  <span>गाँव के विकास के लिए पूर्ण समर्पण</span>
                </p>
                <p className="text-xs md:text-sm lg:text-lg font-semibold text-election-red flex items-start gap-1 md:gap-2">
                  <span className="text-sm md:text-lg lg:text-2xl">✓</span>
                  <span>पारदर्शिता और जवाबदेही की गारंटी</span>
                </p>
                <p className="text-xs md:text-sm lg:text-lg font-semibold text-election-red flex items-start gap-1 md:gap-2">
                  <span className="text-sm md:text-lg lg:text-2xl">✓</span>
                  <span>हर नागरिक की आवाज़ सुनी जाएगी</span>
                </p>
                <p className="text-xs md:text-sm lg:text-lg font-semibold text-election-red flex items-start gap-1 md:gap-2">
                  <span className="text-sm md:text-lg lg:text-2xl">✓</span>
                  <span>सड़क, पानी, स्वास्थ्य, शिक्षा - सभी प्राथमिकता</span>
                </p>
              </div>
              <div className="mt-2 md:mt-4 pt-2 md:pt-4 border-t-2 border-election-red/30">
                <p className="text-xs md:text-sm lg:text-xl font-bold text-election-red text-left">
                  "आपका विश्वास, मेरी जिम्मेदारी"
                </p>
              </div>
            </div>
          </div>

          {/* Right Image - 40% width on all screens */}
          <div className="w-[40%] flex justify-end">
            <div className="relative w-full max-w-full">
              <div className="w-full h-auto bg-white/10 backdrop-blur-sm rounded-lg border-4 border-white/30 shadow-2xl overflow-hidden">
                {CANDIDATE_IMAGE_URL ? (
                  <img 
                    src={CANDIDATE_IMAGE_URL} 
                    alt="मनिक बहादुर सिंह" 
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <div className="w-full h-96 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-48 h-60 md:w-56 md:h-72 mx-auto bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                        <span className="text-6xl">👤</span>
                      </div>
                      <p className="text-white text-sm md:text-base font-semibold">मनिक बहादुर सिंह</p>
                      <p className="text-white/80 text-xs md:text-sm">पीले पगड़ी, पीले कुर्ता, काले चश्मे</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
