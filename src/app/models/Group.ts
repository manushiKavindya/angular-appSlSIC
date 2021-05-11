export class Group {
    _id: string;
    division_id: string;
    section_id: string;
    group_id: string;
    group_description: string;
    division_description: string;
    section_description: string;
    sub_list: [sub[]];
    is_deleted: boolean;


}
export class sub {
    class_id: string;
    class_description: string;
}