import React from 'react'
import './app-status.scss';

export default function AppStatus() {
    return (
        <div className="d-flex align-items-center">
            <div className="status-indicator status-indicator-online mr-1"></div>
            <span className="hint">Onine</span>
        </div>
    )
}
