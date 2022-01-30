const config = {
  // This object contais the params connect to the Rest API
  API_PORT: 8080,
  API_ROOMS: "api/v1/rooms",
  API_EVENTS: "api/v1/events",
};
const URL_ROOMS = `http://localhost:${config.API_PORT}/${config.API_ROOMS}`;
const URL_EVENTS = `http://localhost:${config.API_PORT}/${config.API_EVENTS}`;

export { URL_EVENTS, URL_ROOMS };
