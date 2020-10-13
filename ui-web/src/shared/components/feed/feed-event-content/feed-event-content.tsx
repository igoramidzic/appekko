import React, { useState } from 'react'
import Truncate from 'react-truncate';

export default function FeedEventContent(props: { text: string }) {
    const { text } = props;

    const [expanded, setExpanded] = useState(false);

    const toggleLines = (event: any) => {
        event.preventDefault();
        setExpanded(!expanded);
    }

    return (
        <p className="feed-event-content">
            <Truncate lines={!expanded && 2} ellipsis={(
                <span>... <a style={{ fontWeight: 500, fontSize: '0.9rem' }} href='#' onClick={toggleLines}>Show More</a></span>
            )}>
                {text}
            </Truncate>
        </p>
    );
}
