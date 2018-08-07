import { Schema, Model, model, Document } from 'mongoose';
import { IFragment } from './IFragment';

export interface IFragmentModel extends IFragment, Document {

}

const FragmentSchema: Schema = new Schema({
    firstName: String,
    lastName: String,
    nickName: String,
    status: [String],
    quote: String,
    date: Date,
    headPhoto: String,
    photos: [String]
});

FragmentSchema.pre('save', (next) => {
    let now = new Date();
    if (!this.date) {
        this.date = now;
    }

    next();
});


export const Fragment: Model<IFragmentModel> = model<IFragmentModel>('Fragment', FragmentSchema);
