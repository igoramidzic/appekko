import React, { PropsWithChildren } from 'react'
import { EFlagSizes, EFlagTypes } from '../../../core/enums/flags'
import './flag.scss';

interface FlagProps {
    type: EFlagTypes;
    size: EFlagSizes;
}

export default function Flag(props: PropsWithChildren<FlagProps>) {

    const { type, size } = props;

    const getTypeClass = (): string => {
        switch (type) {
            case EFlagTypes.Project:
                return 'flag-project';
            default:
                return '';
        }
    }

    const getTypeLabel = (): string => {
        switch (type) {
            case EFlagTypes.Project:
                return 'New Project';
            default:
                return '';
        }
    }

    const getSizeClass = (): string => {
        switch (size) {
            case EFlagSizes.Small:
                return 'flag-sm';
            case EFlagSizes.Medium:
                return 'flag-md';
            case EFlagSizes.Large:
                return 'flag-lg';
            default:
                return '';
        }
    }

    switch (type) {
        case EFlagTypes.Project:
            return <div style={{ whiteSpace: 'nowrap' }} className={'flag ' + getTypeClass() + ' ' + getSizeClass()}>{getTypeLabel()}</div>
        default:
            return <span></span>;
    }
}
