export class User {
    _id?: String;
    name: {
        first_name: String;
        last_name: String;
    };
    username: string;
    password: string
    email: String;
    phone_number: String;
    is_deleted?: Boolean;
    // modification_notes: ModificationNote[]

}