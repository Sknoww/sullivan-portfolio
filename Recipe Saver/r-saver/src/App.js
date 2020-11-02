import React, { Component } from "react";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { Nav } from "react-bootstrap";
import GoTrue from "gotrue-js";

//Pages
import Welcome from "./pages/Welcome";
import RecipeSaver from "./pages/RecipeSaver";
import Settings from "./pages/Settings";
import LoginSignUp from "./pages/LoginSignUp";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/404";

//Utility
import DatabaseControls from "./components/utility/DatabaseControls";
import PasswordReset from "./pages/PasswordReset";

const auth = new GoTrue({
    APIUrl: "https://snowsrecipesaver.netlify.app/.netlify/identity",
    audience: "",
    setCookie: false,
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoggedIn: false,
            user: {},
            usersRecipes: [],
            userRef: "",
            errors: "",
        };
        this.handleUserLogin = this.handleUserLogin.bind(this);
        this.handleRecipeUpdate = this.handleRecipeUpdate.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleLoggedInNavBar = this.handleLoggedInNavBar.bind(this);
    }

    async handleUserLogin(user) {
        const dbControls = new DatabaseControls(user);
        let recipes = [];
        let ref = "";
        try {
            const userData = await dbControls.getRecipes();
            recipes = userData.recipes;
            ref = userData.ref;
        } catch (error) {}

        this.setState({
            user: user,
            userLoggedIn: true,
            usersRecipes: recipes,
            userRef: ref,
        });

        localStorage.setItem("RECIPES", JSON.stringify(recipes));
        localStorage.setItem("REF", ref);
    }

    async handleRecipeUpdate(recipe) {
        const { usersRecipes } = this.state;
        usersRecipes.push(recipe);
        this.setState({
            usersRecipes: usersRecipes,
        });
        const dbControls = new DatabaseControls(this.state.user);
        await dbControls.updateUsersRecipes(this.state.userRef, usersRecipes);
        localStorage.setItem("RECIPES", JSON.stringify(usersRecipes));
    }

    handleLogout() {
        this.setState({
            userLoggedIn: false,
            user: {},
            usersRecipes: [],
            userRef: "",
        });
        localStorage.clear();
    }

    handleLoggedInNavBar() {
        const { userLoggedIn } = this.state;
        if (userLoggedIn) {
            return (
                <Nav.Link className="navBarLink" href="/Dashboard">
                    Dashboard
                </Nav.Link>
            );
        } else {
            return (
                <Nav.Link className="navBarLink" href="/Login">
                    Login
                </Nav.Link>
            );
        }
    }

    componentDidMount() {
        if (localStorage.getItem("RECIPES") != null) {
            console.log("LOGGED IN");
            this.setState({
                userLoggedIn: true,
                user: auth.currentUser(),
                usersRecipes: JSON.parse(localStorage.getItem("RECIPES")),
                userRef: localStorage.getItem("REF"),
            });
        } else {
            console.log("LOGGED OUT");
            this.setState({
                userLoggedIn: false,
            });
        }
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <div className="navBarStyle">
                            <NavigationBar
                                handleLoggedInNavBar={this.handleLoggedInNavBar()}
                            />
                        </div>
                        <Switch>
                            <Route exact path="/" component={Welcome} />
                            <Route
                                exact
                                path={"/RecipeSaver"}
                                render={(props) => (
                                    <RecipeSaver
                                        {...props}
                                        handleRecipeUpdate={
                                            this.handleRecipeUpdate
                                        }
                                        user={this.state.user}
                                        userLoggedIn={this.state.userLoggedIn}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/Settings"
                                component={Settings}
                            />
                            <Route
                                exact
                                path="/Login"
                                render={(props) => (
                                    <LoginSignUp
                                        {...props}
                                        auth={auth}
                                        handleUserLogin={this.handleUserLogin}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/Dashboard"
                                render={(props) => (
                                    <Dashboard
                                        {...props}
                                        auth={auth}
                                        user={this.state.user}
                                        recipes={this.state.usersRecipes}
                                        handleLogout={this.handleLogout}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/passwordRecovery/:token"
                                render={(props) => (
                                    <PasswordReset {...props} auth={auth} />
                                )}
                            />
                            <Route exact path="/404" component={NotFoundPage} />
                            <Redirect to="/404" />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
