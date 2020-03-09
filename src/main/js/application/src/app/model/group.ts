import { User } from "./user";

export class Group {
    id: string;
    groupname: string;
    mentor: string;
    users: User[];
}
