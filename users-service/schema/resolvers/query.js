const models = require('../../models'); 

const Query = {
    me: async (perant, args, context, info) => {
        const id = 1;
        const me = await models.User.findByPk(id);

        return me;
    },
    user: async (perant, args, context, info) => {
        const userId = args.id;
        const user = await models.User.findByPk(userId);

        if(!user){
            throw new Error("Can not Find This User");
        }
        else{
            return user;
        }
    },
    users: async (perant, args, context, info) => {
        const users = await models.User.findAll();

        return users;
    }
}

export default Query;