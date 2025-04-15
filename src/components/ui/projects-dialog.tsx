import { DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { StackBadge, StackBadgeProps } from "./section-card";
import ProjectsCarousel from "./projects-carousel";

type ProjectDialogProps = {
    app_name: string;
    image: string[];
    stack: StackBadgeProps[];
}

export function ProjectsDialog({ app_name, image, stack }: ProjectDialogProps) {
    return (
        <DialogContent className="sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[70vw] xl:max-w-[60vw] 2xl:max-w-[55vw] p-4 md:p-6">
            <DialogHeader>
                <DialogTitle className="text-md md:text-lg font-semibold">{app_name}</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col space-y-3 md:space-y-4">
                {/* Carousel with AspectRatio */}
                <div className="w-full">
                    <ProjectsCarousel images={image} app_name={app_name} />
                </div>
                
                {/* Stack badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                    {stack.map((stack, index) => (
                        <StackBadge key={index} icon={stack.icon} stack={stack.stack} frontend={stack.frontend} />
                    ))}
                </div>            
            </div>
        </DialogContent>
    );
}