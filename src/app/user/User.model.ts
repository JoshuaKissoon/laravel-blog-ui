/**
 * Class representation of a user
 * 
 * @author Joshua Kissoon
 * @since 20170605
 */
export class User
{
    uid: number;
    userId: string;
    password: string;
    passwordConfirm: string;
    named: string;
    usid: number;
    createdTs: string;

    status: string;

    loadFromMap(data: any)
    {
        this.uid = data.uid;
        this.userId = data.userId;
        this.password = data.password;
        this.named = data.named;
        this.usid = data.usid;
        this.createdTs = data.createdTs;
    }

}
