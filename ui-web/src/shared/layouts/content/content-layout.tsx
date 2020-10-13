import React, { PropsWithChildren } from 'react'
import MainNavbar from '../../components/navs/main-navbar';

export default function ContentLayout(props: PropsWithChildren<{}>) {
    return (
        <div>
            {props.children}
        </div>
    )
}
