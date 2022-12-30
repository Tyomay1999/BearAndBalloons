class Service {
    server_url_local = process.env.REACT_APP_SERVER_URL_LOCAL;
    server_url = process.env.REACT_APP_SERVER_URL;

    get_server_url() {
        return this.server_url
    }
}

export default new Service()