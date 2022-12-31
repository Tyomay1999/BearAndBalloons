class Service {
    users = [
        {
            id: process.env.REACT_APP_USER_ID,
            user_name: "Lana",
            inst: "@lana_08.08",
            message: {
                line_1: "Congratulations dear @Lana. Your instagram nickname won special Gift from our newly opened company.Happy New year, May your dreams and wishes come to reality!!",
                line_2:"Let this year be with full of Balloon’s And Bears."
            }
        },
        {
            id: process.env.REACT_APP_USER_ID - 2,
            user_name: "Any name here",
            inst: "@any_account",
            message: "Any text here"
        }
    ]
    server_url = process.env.REACT_APP_SERVER_URL;

    check_user_id( id ) {
        if ( this.users[ 0 ].id === id ) {
            return 0
        }
        if ( this.users[ 1 ].id === id ) {
            return 1
        }
        return false
    }

    get_user( id ) {
        return this.users[ id ]
    }
}

export default new Service()