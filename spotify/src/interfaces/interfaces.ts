import { ReactElement } from "react";

export interface NavItemInterface {
    label: string,
    classes: string,
    icon: ReactElement
}

export interface FooterItemInterface {
    label: string
}

export interface ButtonInterface {
    styles?: string,
    text: string
}

export interface PlayListInterface {
    classes?: string,
    url: string,
    title: string,
    description: string
}

export interface PlayListInfoInterface {
    title: string,
    description: string
}

export interface PlayListCoverInterface {
    url?: string
}

export interface PlayListContextMenuInterface {
    onClose: EventListener
}