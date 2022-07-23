export const Project = ({children}: ProjectProps) => {
    return (
        <section className="bg-surface-dawn dark:bg-surface">
            <div className="flex flex-col py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12 gap-2">
                {children}
            </div>
        </section>
    )
}

interface ProjectProps {
    children: React.ReactNode;
}

export const ProjectCard = ({name, description}: ProjectCardProps) => {
    return (
        <figure className="md:flex bg-overlay-dawn rounded-xl md:rounded-md p-4 md:p-0 dark:bg-overlay">
            <div className="lg:pt-2 md:p-2 text-left md:text-left">
                <figcaption className="font-bold text-xl md:text-lg">
                    <div className="text-iris-dawn dark:text-iris">
                        {name}
                    </div>
                    <blockquote>
                        <p className="text-sm font-medium text-text-dawn dark:text-text">
                            {description}
                        </p>
                    </blockquote>
                </figcaption>
            </div>
        </figure>
    )
}

interface ProjectCardProps {
    name: string;
    description: string;
}