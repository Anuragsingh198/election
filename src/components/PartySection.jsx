import { PARTY_LEADER_IMAGE_URL } from '../constants/images'

function PartySection() {
  return (
    <section className="bg-election-red text-white py-4 px-4">
      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
        <div className="w-12 h-12 md:w-16 lg:w-20 lg:h-20 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30 overflow-hidden">
          {PARTY_LEADER_IMAGE_URL ? (
            <img src={PARTY_LEADER_IMAGE_URL} alt="राष्ट्रीय अध्यक्ष" className="w-full h-full object-cover" />
          ) : (
            <span className="text-lg md:text-xl lg:text-2xl">👤</span>
          )}
        </div>
        <div className="flex-1">
          <p className="text-xs md:text-sm lg:text-base text-election-yellow mb-1">प्रगतिशील मानव समाज पार्टी</p>
          <p className="text-xs md:text-sm lg:text-base opacity-90">के प्रदेश सचिव</p>
        </div>
      </div>
    </section>
  )
}

export default PartySection
