import {Response} from '../common/Response';
import { Case } from '../entities/Case.entity';
import { Client } from '../entities/Client.entity';
import { Consultation } from '../entities/Consultation.entity';
import { Contract } from '../entities/Contract.entity';
import { Matter } from '../entities/Matter.entity';
import { MatterType } from '../entities/MatterType.entity';
import { Tag } from '../entities/Tag.entity';


export class PutClientMatterResponse extends Response implements Matter {
    id: string;
    createDateTime: Date;
    updateDateTime: Date;
    createdBy: string;
    isDeleted: boolean;
    client: Client;
    matterType: MatterType;
    cases: Case[];
    contracts: Contract[];
    consultations: Consultation[];
    tags: Tag[];
}