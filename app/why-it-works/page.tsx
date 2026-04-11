import type { Metadata } from 'next'
import WhyItWorks from '../components/WhyItWorks/WhyItWorks'

export const metadata: Metadata = {
  title: 'Why It Works — Women Beyond Cancer',
  description:
    'The evidence behind the Women Beyond Cancer programme — why guided journaling, forest bathing, and peer community help women recover after cancer treatment.',
}

export default function WhyItWorksPage() {
  return <WhyItWorks />
}
