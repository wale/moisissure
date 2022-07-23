import React, {useState} from "react";

import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const Navbar = ({ left, right }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="flex justify-between p-2 space-x-4">
            <div className="hidden md:block">
                <div className="ml-4 flex items-baseline space-x-4">
                    {left}
                </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-inherit text-text-dawn dark:text-text inline-flex items-center justify-center p-2 rounded-md"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-1 pt-2 pb-3 space-y-1 sm:px-3">
                {left}
              </div>
            </div>
          )}
        </Transition>

            <div className="flex pr-2">{right}</div>
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
                className="font-medium px-2 py-2 text-text-dawn dark:text-text 
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
                className="font-medium px-2 py-2 text-text-dawn dark:text-text 
                rounded-lg hover:bg-overlay-dawn dark:hover:bg-overlay hover:font-semibold"
            >
                <FontAwesomeIcon icon={icon} />
            </a>
        );
    }
}
