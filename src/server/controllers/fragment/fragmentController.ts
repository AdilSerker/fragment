import {
    JsonController,
    Get,
    Post,
    Body,
    UploadedFile,
    Req
} from 'routing-controllers';

import { FragmentRepository } from '../../repository/fragment/FragmentRepository';
import { FragmentFactory } from './FragmentFactory';
import { FragmentViewOut, FragmentResponse } from './FragmentViewOut';
import { Fragment } from '../../models/fragment/FragmentModel';

@JsonController('/fragment')
export class FragmentController {
    
    @Get('/')
    public async getFragments(): Promise<any> {
        const frags = await Fragment.find();
        return FragmentViewOut.makeListResponse(frags);
    }

    @Post('/')
    public async createFragment(
        @Body() params: {
            firstName: string,
            lastName: string,
            nickName: string,
            status: string[],
            quote: string
        },
        @UploadedFile("file") file: File
    ): Promise<FragmentResponse> {

        const fragment = FragmentFactory.create({ ...params, headPhoto: null, photos: [] });
        await FragmentRepository.save(fragment);
        
        return FragmentViewOut.makeResponse(fragment);
    }
}