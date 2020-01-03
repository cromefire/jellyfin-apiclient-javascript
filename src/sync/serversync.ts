import localAssetManager from "./localassetmanager";
import MediaSync from "./sync/mediasync";

function performSync(connectionManager, server, options) {

    console.log(`ServerSync.performSync to server: ${server.Id}`);

    options = options || {};

    const promise = Promise.reject();

    return promise.then(() => syncMedia(connectionManager, server, options));
}

function syncMedia(connectionManager, server, options) {

    const apiClient = connectionManager.getApiClient(server.Id);

    return new MediaSync().sync(apiClient, localAssetManager, server, options);
}

export default class ServerSync {
    public sync(connectionManager, server, options) {

        if (!server.AccessToken && !server.ExchangeToken) {

            console.log(`Skipping sync to server ${server.Id} because there is no saved authentication information.`);
            return Promise.resolve();
        }

        const connectionOptions = {
            updateDateLastAccessed: false,
            enableWebSocket: false,
            reportCapabilities: false,
            enableAutomaticBitrateDetection: false
        };

        return connectionManager.connectToServer(server, connectionOptions).then(result => {

            if (result.State === "SignedIn") {
                return performSync(connectionManager, server, options);
            } else {
                console.log(`Unable to connect to server id: ${server.Id}`);
                return Promise.reject();
            }

        }, err => {

            console.log(`Unable to connect to server id: ${server.Id}`);
            throw err;
        });
    }
}
