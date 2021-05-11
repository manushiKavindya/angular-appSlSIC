export class Div {
    _id: string;
    section_id: string;
    division_id: string;
    division_description: string;
    section_description: string;
    sub_list: [sub[]];
    is_deleted: boolean;

}

export class sub {
    group_id: string;
    group_description: string;
}