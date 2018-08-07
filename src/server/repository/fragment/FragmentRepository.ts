import { Fragment } from '../../models/fragment/FragmentModel';
import { Model, Document } from 'mongoose';

export class FragmentRepository {
    public static async save(frag: Document): Promise<void> {
        frag.save();
    }
}