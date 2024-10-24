export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    address: {
        street: string;
        city: string;
    };
}
