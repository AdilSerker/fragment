import axios, { AxiosResponse } from 'axios';
import { FragmentParam } from '../../store/fragment/types/fragment';


export class FragmentApi {
    public static async getFragments(): Promise<{ fragments: FragmentParam[] }> {
        const res = await axios.get('http://localhost:3000/fragment');
        return res.data;
    }
}