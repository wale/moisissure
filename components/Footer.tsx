export const Footer = () => {
    return (
        <footer className="bg-base-dawn dark:bg-base">
            <div className="py-12 px-12 max-w-screen-xl text-center lg:py-16 lg:px-12">
                <p className="text-sm text-muted-dawn dark:text-muted">
                    © {new Date().getFullYear()} Duale Siad
                </p>
                <p className="text-sm text-muted-dawn dark:text-muted">
                    Made with ❤️, TypeScript and Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};
