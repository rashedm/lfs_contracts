import {Response} from '../common/Response';
import { Client } from '../entities/Client.entity';
import { Firm } from '../entities/Firm.entity';
import { IndividualClient } from '../entities/IndividualClient.entity';
import { ClientType } from '../entities/lookups/ClientTypes.lookup';
import { Matter } from '../entities/Matter.entity';
import { OrganizationClient } from '../entities/OrganizationClient.entity';
import { Tag } from '../entities/Tag.entity';
import {Document} from '../entities/Document.entity';

export class GetClientResponse extends Response implements Client {
    id: string;
    createDateTime: Date;
    updateDateTime: Date;
    createdBy: string;
    isDeleted: boolean;
    clientType:ClientType;
    firm: Firm;
    matters: Matter[];
    documents: Document[];
    individual:IndividualClient[];
    organization: OrganizationClient[];
    tags: Tag[];
}