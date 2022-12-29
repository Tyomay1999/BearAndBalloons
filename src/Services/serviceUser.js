class Service {
    users = [
        {
            id: process.env.REACT_APP_USER_ID,
            user_name: "Lana",
            instagram_account: "@lana_08.08",
            message: "Any text here"
        },
        {
            id: process.env.REACT_APP_USER_ID - 2,
            user_name: "Any name here",
            instagram_account: "@any_account",
            message: "Any text here"
        }
    ]
    server_url = process.env.REACT_APP_SERVER_URL;

    check_user_id( id ) {
        if ( this.users[ 0 ].id === id ) {
            return 0
        }
        if ( this.users[ 0 ].id === id ) {
            return 1
        }
        return null
    }

    get_user( id ) {
        return this.users[ id ]
    }
}

export default new Service()