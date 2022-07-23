import { Navbar, NavbarIcon, NavbarLink } from "./Navbar";

export const Layout = ({ children }: LayoutProps) => {
    return (
        <main className="bg-base-dawn dark:bg-base">
            <Navbar
                left={
                    <>
                        <NavbarLink name="Blog" href="/blog" />
                        <NavbarLink name="About" href="/about" />
                        <NavbarLink name="Contact" href="/contact" />
                    </>
                }
                right={
                    <>
                        <NavbarIcon
                            href="https://twitter.com/spellsaidwrong"
                            icon={["fab", "twitter"]}
                        />
                        <NavbarIcon
                            href="https://github.com/wale"
                            icon={["fab", "github"]}
                        />
                        <NavbarIcon
                            href="https://unsplash.com/@spellsaidwrong"
                            icon={["fab", "unsplash"]}
                        />
                    </>
                }
            />
            {children}
        </main>
    );
};

interface LayoutProps {
    children: React.ReactNode;
}
