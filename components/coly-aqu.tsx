import commonQuestions from "@/data/common-questions";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const ColyAqu = () => {

    return (
        <div className="flex flex-col gap-y-5" id="colyaqu">
            <div>
                <h1 className="text-xl lg:text-2xl font-bold">COLY AQU (Commonly Asked Questions)</h1>
                <p className="text-sm lg:text-lg text-slate-400">
                    Beberapa pertanyaan yang sering ditanyakan teman-teman
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
                {commonQuestions.map((qu) => (
                    <AccordionItem value={qu.question} key={qu.id}>
                        <AccordionTrigger>
                            {qu.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="whitespace-pre-line">{qu.answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}

            </Accordion>
        </div>
    )
}

export default ColyAqu;