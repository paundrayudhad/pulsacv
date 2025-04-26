import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Dummy
import { pertanyaanPertanyaan } from "@/dummy";

const FAQAccordion = () => {
  const items = pertanyaanPertanyaan;

  return (
    <Accordion type="single" collapsible className="w-full">
      {items?.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="w-full">
          <AccordionTrigger className="w-full text-start text-sm font-semibold text-primary-foreground">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="w-full text-start text-sm">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
