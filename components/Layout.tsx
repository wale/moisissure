import { Navbar, NavbarLink } from "./Navbar";

export const Layout = ({children}: LayoutProps) => {
    return (
        <main className="bg-base-dawn dark:bg-base">
            <Navbar left={
                <>
                    <NavbarLink name="Blog" href="/blog" />
                    <NavbarLink name="About" href="/about" />
                    <NavbarLink name="Contact" href="/contact" />
                </>
            }
            right={
                <>
                    <NavbarLink name="Blog" href="/blog" />
                    <NavbarLink name="About" href="/about" />
                    <NavbarLink name="Contact" href="/contact" />
                </>
            }/>
            {children}
        </main>
    )
}


interface LayoutProps {
    children: React.ReactNode;
}