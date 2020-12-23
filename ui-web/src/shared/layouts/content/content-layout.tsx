import React, { PropsWithChildren } from 'react'

export default function ContentLayout(props: PropsWithChildren<{}>) {
    return (
        <div>
            {props.children}
        </div>
    )
}
