/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import type { MBPostProps } from "./post"

const PostFooter = ({ post }: MBPostProps) => {
    const giscusRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const changeGiscusTheme = (theme: string) => {
            const iframe = document.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
            iframe?.contentWindow?.postMessage(
                {
                    giscus: {
                        setConfig: {
                            theme: theme && theme === 'dark' ? 'dark_high_contrast' : 'light_high_contrast'
                        },
                    },
                },
                "https://giscus.app"
            );
        }

        const handleStorageChange = (event: StorageEvent) => {
            if(event.key) {
                changeGiscusTheme(event.key)
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        }
    }, []);

    React.useEffect(() => {
        const script = document.createElement("script");
        const getColorMode = () => {
            const storageColor = localStorage.getItem("theme-ui-color-mode");
            if (storageColor) {
                return storageColor === 'dark' ? 'dark_high_contrast' : 'light_high_contrast';
            }
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return prefersDark ? 'dark_high_contrast' : 'light_high_contrast';
        }
        script.src = "https://giscus.app/client.js";
        script.setAttribute("data-repo", "stu442/comment_for_blog");
        script.setAttribute("data-repo-id", "R_kgDOL7wVWw");
        script.setAttribute("data-category", "Comments");
        script.setAttribute("data-category-id", "DIC_kwDOL7wVW84CfXvt");
        script.setAttribute("data-mapping", "pathname");
        script.setAttribute("data-strict", "0");
        script.setAttribute("data-reactions-enabled", "1");
        script.setAttribute("data-emit-metadata", "0");
        script.setAttribute("data-input-position", "top");
        script.setAttribute("data-theme", getColorMode());
        script.setAttribute("data-lang", "ko");
        script.setAttribute("data-loading", "lazy");
        script.setAttribute("crossorigin", "anonymous");
        script.async = true;

        if(giscusRef.current) {
            giscusRef.current.appendChild(script);
        }

    }, []);

    return (
        <div id="giscus-box">
            <div ref={giscusRef} />
        </div>
    )
}

export default PostFooter
