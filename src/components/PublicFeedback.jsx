function PublicFeedback() {
  return (
    <section className="bg-white py-4 md:py-6 lg:py-8 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-election-red mb-2 md:mb-3 lg:mb-4">
          आपकी राय महत्वपूर्ण है
        </h2>
        <p className="text-gray-700 text-xs md:text-sm lg:text-base xl:text-lg mb-3 md:mb-4 lg:mb-6 max-w-2xl mx-auto">
          मनीक बहादुर सिंह आपकी सभी समस्याओं और सुझावों को सुनने के लिए तैयार हैं। 
          आपकी आवाज़ हमारी प्राथमिकता है।
        </p>
        <div className="bg-gradient-to-r from-election-red to-election-yellow rounded-lg p-3 md:p-4 lg:p-6 xl:p-8 text-white">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-1 md:mb-2">
            साथ चलें, साथ बढ़ें
          </p>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg">
            एक बेहतर गाँव के लिए
          </p>
        </div>
      </div>
    </section>
  )
}

export default PublicFeedback
