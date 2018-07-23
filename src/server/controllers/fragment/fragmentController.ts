import {
    JsonController,
    Get
} from 'routing-controllers';

@JsonController('/fragment')
export class FragmentController {
    
    @Get('/')
    public async getFragments(): Promise<any> {
        const fragments = require('../../../../data/fixtures.json');
        return fragments;
    }

}