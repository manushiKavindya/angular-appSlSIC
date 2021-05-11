export class Scn {
    _id: string;
    section_id: string;
    section_description: string;
    sub_list: [sub[]];
    is_deleted: boolean;

}
export class sub {
    division_id: string;
    division_description: string;
}