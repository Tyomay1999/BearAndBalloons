class Service {
    server_url_local = process.env.REACT_APP_SERVER_URL_LOCAL;
    server_url = process.env.REACT_APP_SERVER_URL;
    server_domain = process.env.REACT_APP_SERVER_DOMAIN;

    get_server_url() {
        return this.server_domain
    }
}

export default new Service()