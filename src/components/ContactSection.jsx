function ContactSection() {
  return (
    <section className="bg-gradient-to-b from-election-yellow to-election-red text-white py-4 md:py-6 lg:py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-base md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 md:mb-4 lg:mb-6 text-center">संपर्क करें</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 lg:p-6 xl:p-8 border-2 border-white/20 max-w-2xl mx-auto">
          <div className="space-y-4 text-left">
            <div>
              <p className="text-sm md:text-base lg:text-xl font-bold mb-2">निवास:</p>
              <p className="text-xs md:text-sm lg:text-lg">ग्रा० व पो०-गोगाँव, जि०-मीरजापुर</p>
            </div>
            <div className="pt-4 border-t border-white/20">
              <p className="text-sm md:text-base lg:text-xl font-bold mb-2">मोबाइल:</p>
              <div className="flex flex-row gap-3 justify-start">
                <a href="tel:9616141314" className="text-xs md:text-sm lg:text-lg hover:text-election-yellow transition-colors">
                  📱 9616141314
                </a>
                <a href="tel:9450633629" className="text-xs md:text-sm lg:text-lg hover:text-election-yellow transition-colors">
                  📱 9450633629
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
