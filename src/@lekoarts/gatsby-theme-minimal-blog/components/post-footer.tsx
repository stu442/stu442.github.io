/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import type { MBPostProps } from "./post"
import useGiscusScript from "../hooks/useGiscusScript";
import useGiscusTheme from "../hooks/useGiscusTheme";
import FooterAvatar from "./footer-avatar";

const PostFooter = ({ post }: MBPostProps) => {
    const giscusRef = useGiscusScript();
    useGiscusTheme();

    return (
        <>
            <div>
                <FooterAvatar />
            </div>
            <div id="giscus-box">
                <div ref={giscusRef} />
            </div>
        </>
    )
}

export default PostFooter
