export interface FragmentParam {
    id?: string;
    headPhoto: string;
    firstName?: string;
    lastName?: string;
    nickName?: string;
    status: string[];
    quote: string;
    photos: string[];
    interview: string[];
    date?: Date;
}

export interface FragmentState {
    isOpen: boolean;
}