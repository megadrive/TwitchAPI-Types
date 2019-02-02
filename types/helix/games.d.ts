
declare namespace TwitchAPI {
    /**
     * Get Games
     *
     * Gets game information by game ID or name.
     *
     * The response has a JSON payload with a data field containing an array of games elements.
     *
     * **Note:** For a query to be valid, name and/or id must be specified.
     *
     * GET https://api.twitch.tv/helix/games
     */

    export interface IGamesGetQuery {
        /**
         * Game ID. At most 100 id values can be specified.
         */
        id?: string[];
        /**
         * Game name. The name must be an exact match. For instance, “Pokemon” will not return a list of Pokemon games;
         * instead, query the specific Pokemon game(s) in which you are interested. At most 100 name values can be
         * specified.
         */
        name?: string[];
    }

    export interface IGamesGetResponse {
        /**
         * Template URL for the game’s box art.
         */
        box_art_url: string;
        /**
         * Game ID.
         */
        id: string;
        /**
         * Game name.
         */
        name: string;
    }
}
