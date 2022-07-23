export const Hero = ({ children }: HeroProps) => {
    return (
        <section className="bg-inherit">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">
                {children}
            </div>
        </section>
    );
};

interface HeroProps {
    children: React.ReactNode;
}
