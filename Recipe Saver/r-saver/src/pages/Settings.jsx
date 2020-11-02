import React from "react";
import MainContainer from "../components/bundles/containers/MainContainer";
import SettingsBody from "../components/bundles/settings/SettingsBody";
const Settings = () => {
    return (
        <React.Fragment>
            <main className="container">
                <MainContainer header="Settings" body={<SettingsBody />} />
            </main>
        </React.Fragment>
    );
};

export default Settings;
