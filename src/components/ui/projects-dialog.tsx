import { DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { StackBadge } from "./section-card";
import { ProjectCardProps } from "./section-card";
import { SourceCodeButton } from "./custom-button";
import ProjectsCarousel from "./projects-carousel";

export function ProjectsDialog({ app_name, description, formality, image, stack, job, source_code }: ProjectCardProps) {
    return (
        <DialogContent className="sm:max-w-md md:max-w-lvh">
            <DialogHeader>
                <DialogTitle className="text-md">{app_name}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
                <ProjectsCarousel images={image} app_name={app_name} />
                
                <div className="flex flex-wrap gap-2">
                    {stack.map((stack, index) => (
                        <StackBadge key={index} icon={stack.icon} stack={stack.stack} frontend={stack.frontend} />
                    ))}
                </div>

                <div className="flex gap-4 text-sm">
                    <div className="w-3/4">
                        <h3 className="font-medium">desc</h3>
                        <p className="text-grey-light">{description}</p>
                    </div>
                    <div className="w-1/4">
                        <h3 className="font-medium">type</h3>
                        <p className="text-grey-light">{formality}</p>
                    </div>
                </div>

                <div className="text-sm">
                    <h3 className="font-medium">task</h3>
                    <ul className="list-disc text-grey-light ml-5">
                        {job.map((job, index) => (
                            <li key={index}>
                                <p>{job}</p>
                            </li>
                        ))}
                    </ul> 
                </div>

                <div className="mt-auto">
                    <div className="flex justify-end">
                        <SourceCodeButton source={source_code} />
                    </div>
                </div>
               
            </div>
        </DialogContent>
    );
}