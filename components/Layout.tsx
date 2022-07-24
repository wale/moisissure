import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { LinkButton } from "./Links";

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <main className="bg-base-dawn dark:bg-base">
                <Navbar
                    left={
                        <>
                            <LinkButton name="Blog" href="/blog" />
                            <LinkButton name="About" href="/about" />
                            <LinkButton name="Contact" href="/contact" />
                        </>
                    }
                />
                {children}
            </main>
            <Footer />
            <div className="h-2 w-full bg-gradient-to-r from-pine-dawn dark:from-pine to-rose-dawn dark:to-rose"></div>
        </>
    );
};

interface LayoutProps {
    children: React.ReactNode;
}
