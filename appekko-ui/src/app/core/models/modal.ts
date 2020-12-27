import { EModalSizes } from "../enums/modal";

export interface IModalConfig {
    size: EModalSizes,
    /** Whether the dialog has a backdrop. */
    hasBackdrop?: boolean;
    /** Whether the user can use escape or clicking on the backdrop to close the modal. */
    disableClose?: boolean;
    /** Position overrides. */
    position?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
    };
    /** Data being injected into the child component. */
    data?: any | null;
    /** Whether the dialog should focus the first focusable element on open. */
    autoFocus?: boolean;
    /**
     * Whether the dialog should restore focus to the
     * previously-focused element, after it's closed.
     */
    restoreFocus?: boolean;
    /**
     * Whether the dialog should close when the user goes backwards/forwards in history.
     * Note that this usually doesn't include clicking on links (unless the user is using
     * the `HashLocationStrategy`).
     */
    closeOnNavigation?: boolean;
}