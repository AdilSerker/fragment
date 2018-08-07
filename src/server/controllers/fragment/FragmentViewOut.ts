import { IFragmentModel } from '../../models/fragment/FragmentModel';

export interface FragmentResponse {
    
}

export interface FragmentListResponse{
    
}

export class FragmentViewOut {
    public static makeResponse(frag: IFragmentModel): FragmentResponse {
        
        return {
            fragment: this.createView(frag)
        };
    }

    public static makeListResponse(frags: IFragmentModel[]): FragmentListResponse {
        return {
            fragments: frags.map(item => this.createView(item))
        }
    }

    private static createView(frag: IFragmentModel) {
        return {
            id: frag.id,
            firstName: frag.firstName,
            lastName: frag.lastName,
            nickName: frag.nickName,
            status: frag.status,
            quote: frag.quote,
            headPhoto: frag.headPhoto,
            photos: frag.photos
        }
    }
}