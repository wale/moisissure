import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface LinkChild {
    name?: string;
    href: string;
    alt?: string;
}

export interface LinkIconProps extends LinkChild {
    icon: IconProp;
}

export class LinkButton<P extends LinkChild> extends React.Component<P> {
    public render() {
        const { name, href } = this.props;
        return (
            <a
                href={href}
                className="font-medium px-2 py-2 text-text-dawn dark:text-text 
                rounded-lg hover:bg-overlay-dawn dark:hover:bg-overlay hover:font-semibold"
            >
                {name}
            </a>
        );
    }
}

export class LinkIcon<P extends LinkIconProps> extends React.Component<P> {
    public render() {
        const { href, icon } = this.props;

        return (
            <a
                href={href}
                className="font-medium px-2 py-2 text-text-dawn dark:text-text 
                rounded-lg hover:bg-overlay-dawn dark:hover:bg-overlay hover:font-semibold"
            >
                <FontAwesomeIcon icon={icon} />
            </a>
        );
    }
}
