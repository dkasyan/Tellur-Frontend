import React, { ReactElement } from "react"
import { Link, IconButton } from "@material-ui/core"
type SocialMediaButtonProps = {
    url: string,
    icon: ReactElement
}
const SocialMediaButton = (props: SocialMediaButtonProps) => {
    const {url,icon} = props
    return(
        <Link href={url}>
            <IconButton>
                {icon}
            </IconButton>
        </Link>
    )
}

export default SocialMediaButton