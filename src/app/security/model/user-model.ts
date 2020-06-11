import { UserAccountModel } from './user-account-model.enum';

export interface UserModel {

    nome?: string;

    sobrenome?: string;

    email?: string;

    usuario?: string;

    senha?: string;

    dtNascimento?: Date;

    conta?: UserAccountModel;


}
