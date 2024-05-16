/** @jsx jsx */

import React from "react";
import { jsx, Image, Flex, Link } from "theme-ui"
import { ReactComponent as Github } from "../../../../static/Icons/github.svg"
import { ReactComponent as Velog } from "../../../../static/Icons/velog.svg"
import { ReactComponent as Threads } from "../../../../static/Icons/threads.svg"

const FooterAvatar = () => (
        <Flex sx={{ alignItems: `center`, mb: 4 }}>
            <Image src="/Images/profileImg.PNG" alt="profile image" sx={{
                maxWidth: 120,
                height: "auto",
                borderRadius: "50%",
                boxShadow: `lg`,
                marginRight: 4,
            }} />
            <Flex sx={{
                flexDirection: `column`,
                justifyContent: `space-between`,
                alignItems: `start`,
            }}>
                <p sx={{
                    fontSize: 3,
                    fontWeight: `bold`,
                    my: 0
                }}>@dev_frogsoo</p>
                <p sx={{
                    fontSize: 1,
                    mt: 0
                }}>흥미롭고 재미있는 이야기들을 모아둔 공간입니다.</p>
                <Flex>
                    <Link href="https://github.com/stu442" sx={{ color : `inherit` }}><Github style={{ width: 30, height: 30, marginRight: 8, cursor: `pointer` }} /></Link>
                    <Link href="https://velog.io/@stu442/posts" sx={{ color : `inherit` }}><Velog style={{ width: 30, height: 30, marginRight: 8, cursor: `pointer` }} /></Link>
                    <Link href="https://www.threads.net/@dev_frogsoo" sx={{ color : `inherit` }}><Threads style={{ width: 30, height: 30, cursor: `pointer` }} /></Link>
                </Flex>
            </Flex>
        </Flex>
)

export default FooterAvatar;