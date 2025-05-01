import {
    Company,
    Contact,
    ContactNote,
    Deal,
    DealNote,
    Pitch,
    Sale,
    Tag,
    Task,
} from '../../../types';

export interface Db {
    companies: Required<Company>[];
    contacts: Required<Contact>[];
    contactNotes: ContactNote[];
    deals: Deal[];
    dealNotes: DealNote[];
    pitches: Pitch[];
    sales: Sale[];
    tags: Tag[];
    tasks: Task[];
}
