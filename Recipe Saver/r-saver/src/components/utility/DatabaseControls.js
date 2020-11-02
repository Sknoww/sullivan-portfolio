import faunadb from "faunadb";

const adminClient = new faunadb.Client({
    secret: "fnADyGyuzeACDYztAkRD0ZCuQXJXjQunoTxpr8Zf",
});

let q = faunadb.query;

export default class DatabaseControls {
    constructor(user, recipe) {
        this.user = user;
        this.recipes = [recipe];
        this.createUsersFirstRecipe = this.createNewUsersDocument.bind(this);
        this.getRecipes = this.getRecipes.bind(this);
    }

    async createNewUsersDocument(email) {
        const data = {
            user: email,
            recipes: [],
        };
        await adminClient
            .query(q.Call(q.Function("createNewUsersDocument"), data))
            .then(function (response) {
                console.log(response);
            })
            .catch((error) => {
                console.log("COULD NOT CREATE NEW DOCUMENT");
                throw error;
            });
    }

    async updateUsersRecipes(ref, recipes) {
        const data = { recipes: recipes };
        await adminClient
            .query(q.Call(q.Function("updateUsersRecipes"), ref, data))
            .then(function (response) {
                console.log(response);
            })
            .catch((error) => {
                console.log("COULD NOT UPDATE RECIPE");
                throw error;
            });
    }

    async getRecipes() {
        const recipes = await adminClient
            .query(q.Call(q.Function("getUsersRecipes"), this.user.email))
            .then(function (response) {
                return {
                    recipes: response.data.recipes,
                    ref: response.ref.value.id,
                };
            })
            .catch((error) => {
                console.log("COULD NOT GET RECIPES");
                throw error;
            });
        return recipes;
    }
}
