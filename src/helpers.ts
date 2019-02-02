
/**
 * Create a HTTP options string from an Interface provided by these interfaces.
 *
 * @param {any} queryInterface The Interface object that we are querying.
 * @returns {string} String for use in a Twitch API call.
 *
 * @example
 * const streamsInterface: IStreamsQuery = {language: ["en"]};
 * const apiUrl = `https://api.twitch.tv/streams?${constructHttpQuery(query)}`;
 */
export const constructHttpQuery = (queryInterface: any): string => {
    let rv = "";

    // tslint:disable-next-line:forin
    for (const key in queryInterface) {
        if (Array.isArray(queryInterface[key])) {
            rv += key + "=";
            rv += queryInterface[key].join("&" + key + "=");
        } else {
            rv += key + "=" + queryInterface[key];
        }

        rv += "&";
    }

    return rv.slice(0, -1);
};
