const models = require('../../models'); 
import bcrypt from 'bcryptjs';

const Mutation = {
    //insert data
    insert: async (perant, args, context, info) => {
        const {username, email, password, imageURL} = args;

        //check email in DB
        const existEmail = await models.User.findOne({
            where: {
                email: email
            }
        });
        if(existEmail){
            throw new Error("This email is already used by someone else.");
        }

        //check username in DB
        const existUsername = await models.User.findOne({
            where: {
                username: username
            }
        });
        if(existUsername){
            throw new Error("This username is already used by someone else.");
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);


        //insert user
        const user = {
            username: username,
            email: email,
            password: hashPassword,
            imageURL: imageURL
        };
        const isAdd = await models.User.create(user);

        if(!isAdd){
            throw new Error("Insert Data Is Failed.")
        }else{
            return isAdd;
        }
    },

    //update data
    update: async (perant, args, context, info) => {
        const {id, username, email, password, imageURL} = args;

        //find user by id
        const checkId = await models.User.findOne({
            where: {
                id: id
            }
        });
        if(!checkId){
            throw new Error("Do not find user by your id");
        }

        //update user in DB
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt) ;
        const user = {
            username: username,
            email: email,
            password: hashPassword,
            imageURL: imageURL
        };
        const isUpdate = await models.User.update(user,{
            where: {
                id: id
            }
        });
        if(!isUpdate){
            throw new Error("Update Data Is Failed.")
        }else{
            const data = {
                data: "Update Data Is Successful."
            }

            return data;
        }
    },

    //delete data
    delete: async (perant, args, context, info) => {
        const {id} = args;
        const user = await models.User.findByPk(id);

        if(!user){
            throw new Error("Can not find user by your id");
        }

        //delet data in db
        const isDelete = await models.User.destroy({
            where: {
                id: id
            }
        });

        if(!isDelete){
            throw new Error("Delete User is Failed.")
        }
        else{
            return {
                data: "Delete User is Succesful."
            };
        }
    }
}

export default Mutation;