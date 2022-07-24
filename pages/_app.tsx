import { AppProps } from "next/app";

import "~/styles/globals.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function App({ Component, pageProps }: AppProps) {
    library.add(fab, fas);
    return <Component {...pageProps} />;
}
