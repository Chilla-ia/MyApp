import React from "react";
import { Logo } from "./styles";

export default function HeaderLogo() {
    return (
        <Logo>
            <a href="/" alt="hello">
                <img alt="hello" href="/" src="/assets/img/logo.jpg" />
            </a>
        </Logo>
    );
}

