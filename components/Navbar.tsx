export const Navbar = ({children}) => {
    return (
        <nav className="bg-inherit">
            <div className="flex sm:justify-left space-x-4">
                {children}
            </div>
        </nav>
    )
}

/* 
TODO: refactor navbar to use the INavbarChild notation
export const NavbarLink = ({name, href}: NavbarLinkProps) => {
    return (
        <a href={href} 
            className="font-medium px-3 py-2 text-text-dawn dark:text-text 
            rounded-lg hover:bg-overlay-dawn dark:hover:bg-overlay hover:font-semibold">{name}</a>
    )
}

interface NavbarLinkProps {
    name: string;
    href: string;
} */ 

interface INavbarChild {
    name?: string;
    href: string;
    alt?: string;
}

interface NavbarProps {
  left: React.ReactElement<INavbarChild> | React.ReactElement<INavbarChild>[]
  right: React.ReactElement<INavbarChild> | React.ReactElement<INavbarChild>[]
}