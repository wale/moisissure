import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const Navbar = ({ left, right }: NavbarProps) => {
    return (
        <nav className="flex justify-between p-2 space-x-4">
            <div className="flex">{left}</div>
            <div className="flex">{right}</div>
        </nav>
    );
};

interface INavbarChild {
    name?: string;
    href: string;
    alt?: string;
}

interface NavbarIconProps extends INavbarChild {
    icon: IconProp;
}

interface NavbarProps {
    left?:
        | React.ReactElement<INavbarChild>
        | React.ReactElement<INavbarChild>[];
    right?:
        | React.ReactElement<INavbarChild>
        | React.ReactElement<INavbarChild>[];
}

export class NavbarLink<P extends INavbarChild> extends React.Component<P> {
    public render() {
        const { name, href } = this.props;
        return (
            <a
                href={href}
                className="font-medium px-3 py-2 text-text-dawn dark:text-text 
                rounded-lg hover:bg-overlay-dawn dark:hover:bg-overlay hover:font-semibold"
            >
                {name}
            </a>
        );
    }
}

export class NavbarIcon<P extends NavbarIconProps> extends React.Component<P> {
    public render() {
        const { href, icon } = this.props;

        return (
            <a
                href={href}
                className="font-medium px-3 py-2 text-text-dawn dark:text-text 
                rounded-lg hover:bg-overlay-dawn dark:hover:bg-overlay hover:font-semibold"
            >
                <FontAwesomeIcon icon={icon} />
            </a>
        );
    }
}
