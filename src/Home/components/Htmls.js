import React from "react";
import { Html } from "@react-three/drei";
import HtmlWelcome from "./htmls/HtmlWelcome";

export default function Htmls(props) {
    return (
        <Html
            prepend
        >
            <HtmlWelcome />
        </Html>
    )
}