import { FaSuitcase } from "react-icons/fa";
import { SectionContainerBorderless } from "../ui/section-container";
import { SectionHeader } from "../ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ExperienceCard, ExperienceCardRow } from "../ui/section-card";
import { work } from "@/data/work";
import { studies } from "@/data/studies";

export function ExperienceSection() {
  return (
    <SectionContainerBorderless id="experience">
      <div className="flex-col space-y-4">
        <SectionHeader
          icon={<FaSuitcase className="w-4 h-4"/>}
          title="experience"
          description="my work experience and studies"
        />

        <Tabs defaultValue="account">
          <TabsList className="w-full rounded-lg bg-transparent border">
            <TabsTrigger value="work">work</TabsTrigger>
            <TabsTrigger value="studies">studies</TabsTrigger>
          </TabsList>
          <TabsContent value="work">
            <ExperienceCard>
              {work.map((work, index) => (
                <ExperienceCardRow
                  key={index}
                  image={work.image}
                  institute={work.institute}
                  link={work.link}
                  period={work.period}
                  work={work.work}
                  description={work.description}
                  points={work.points}
                />
              ))}
            </ExperienceCard>
          </TabsContent>
          <TabsContent value="studies">
            <ExperienceCard>
              {studies.map((study, index) => (
                <ExperienceCardRow
                  key={index}
                  image={study.image}
                  institute={study.institute}
                  link={study.link}
                  period={study.period}
                  work={study.work}
                  description={study.description}
                  points={study.points}
                />
              ))}
            </ExperienceCard>
          </TabsContent>
        </Tabs>
    

      </div>
    </SectionContainerBorderless>
  )
}