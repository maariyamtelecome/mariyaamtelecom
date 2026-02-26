import { useRef } from 'react'
import Faqheader from './components/Faqheader'
import FAQPage from './components/Faqquestion'

const FaqPage = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div>
      <Faqheader onContactClick={scrollToContact} />
      <div ref={contactRef}>
        <FAQPage />
      </div>
    </div>
  )
}

export default FaqPage