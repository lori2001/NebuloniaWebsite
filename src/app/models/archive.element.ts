import { PresidentsElement } from './presidents.element';
import { LinkElement } from './link.element';

export interface ArchiveElement {
    year: string;
    presidents?: PresidentsElement[];
    images?: LinkElement[];
}
