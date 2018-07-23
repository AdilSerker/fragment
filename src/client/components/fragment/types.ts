export interface FragmentProps {
    headerPhoto: string;
    firstName?: string;
    lastName?: string;
    nickName?: string;
    status: string[];
    quote: string;
    allPhotos: string[];
    interview: string[];
    date?: Date;
}

export interface FragmentState {
    isOpen: boolean;
}