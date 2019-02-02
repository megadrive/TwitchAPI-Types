
import Axios from "axios";
import { config } from "dotenv";
config();

import { constructHttpQuery } from "../helpers";

const helixApi = "https://api.twitch.tv/helix/";

/**
 * Throws a generic HTTP error.
 */
export const throwHttpError = (e: any): never => {
    throw Error(e);
};

/**
 * Performs an API call to Twitch.
 * @param endpoint the Twitch API endpoint
 * @param implementedInterface An implemented Interface provided by this library.
 */
export const api = async (endpoint: string, implementedInterface?: any) => {
    return Axios(helixApi + endpoint + (implementedInterface ? constructHttpQuery(implementedInterface) : ""), {
        headers: {
            Authorization: "Bearer " + process.env.TEST_REFRESH_TOKEN
        },
    });
};
