import { FooterSection } from '@/ui/FooterSection';
import { Navigation } from '@/ui/Navigation';
import { HelpSection } from '@/ui/Sections/HelpSection';

import { SolutionsChoose } from '@/components/SolutionsChoose';
import { TestimonialsCard } from '@/ui/Cards/TestimonialsCard';
import { cardItems } from '@/constants/testimonialCards';
import { Carousel } from '@/ui/Carousel';
import { solutionsItems } from '@/constants/solutions';
import { SpecialContainer } from '@/containers/SpecialContainer';
import { DescriptionSection } from '@/ui/Sections/DescriptionSection';

export const SolutionsPage = () => (
  <>
    <Navigation />
    <DescriptionSection
      description="Getting ready for your success, we provide truly outstanding IT
        solutions."
      heading="Data analytics solutions"
      link="solutions"
      name="Solutions"
    />
    <SpecialContainer cards={solutionsItems} link="/solutions/" />
    <SolutionsChoose />
    <Carousel
      Card={TestimonialsCard}
      cards={cardItems}
      heading="Testimonials"
      type="close"
    />
    <HelpSection />
    <FooterSection />
  </>
);
