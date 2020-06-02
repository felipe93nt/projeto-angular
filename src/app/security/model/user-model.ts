import { UserProfileModel } from './user-profile-model.enum';
import { UserBankAccountModel } from './user-bank-account-model';

export interface UserModel {

    nome?:string;

    sobrenome?:string;

    email?:string;
    
    usuario?:string;
    
    senha?:string;

    dtNascimento?:Date;

    conta?:UserBankAccountModel[];

    perfil?:UserProfileModel;


}
