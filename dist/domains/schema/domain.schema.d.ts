import { Document } from 'mongoose';
export declare class Domain extends Document {
    domainName: string;
    ownerName: string;
    ownerId: string;
}
export declare const DomainSchema: import("mongoose").Schema<Domain, import("mongoose").Model<Domain, any, any, any>, {}>;
