export interface FragmentParam {
    id: string;
    firstName: string;
    lastName: string;
    nickName: string;
    status: string[];
    quote: string;
    headPhoto: string;
    photos: string[];
    interview: string[];
    data: Date
}

export interface FragmentState {
    fragments: FragmentParam[];
    selected: boolean;
}

export interface FragmentLoadParams {
    fragments: FragmentParam[];
}