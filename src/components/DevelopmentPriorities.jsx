function DevelopmentPriorities() {
  const priorities = [
    { title: 'सड़कें', icon: '🛣️', desc: 'गाँव की सभी सड़कों का पक्का निर्माण' },
    { title: 'पानी', icon: '💧', desc: 'स्वच्छ पेयजल की व्यवस्था' },
    { title: 'किसान', icon: '🌾', desc: 'किसानों के लिए बेहतर सुविधाएं' },
    { title: 'स्वास्थ्य', icon: '🏥', desc: 'गाँव में स्वास्थ्य केंद्र की स्थापना' },
    { title: 'शिक्षा', icon: '📚', desc: 'शिक्षा सुविधाओं में सुधार' },
    { title: 'स्वच्छता', icon: '🧹', desc: 'गाँव की स्वच्छता और सफाई' },
  ]

  return (
    <section className="bg-gradient-to-b from-election-yellow/20 to-white py-4 md:py-6 lg:py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-election-red mb-3 md:mb-4 lg:mb-6 text-center">
          विकास की प्राथमिकताएं
        </h2>
        <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4 xl:gap-6">
          {priorities.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg p-2 md:p-3 lg:p-4 xl:p-6 shadow-lg border-2 border-election-red/20 hover:border-election-red transition-all"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 md:mb-3 text-center">{item.icon}</div>
              <h3 className="text-xs md:text-sm lg:text-xl xl:text-2xl font-bold text-election-red mb-1 md:mb-2 text-center">{item.title}</h3>
              <p className="text-gray-700 text-xs md:text-xs lg:text-sm xl:text-base text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DevelopmentPriorities
