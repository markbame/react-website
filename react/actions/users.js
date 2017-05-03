exports.getUser = (user) => {
     return {
        type: 'GET_USER',
        user
    }
}

exports.getUsers = (userid) => {
     return {
        type: 'GET_USERS',
        userid
    }
}

exports.deleteUser = (id) => {
     return {
        type: 'DELETE_USER',
        id
    }
}

exports.checkLocalStorage = () => {
     return {
        type: 'CHECK_LOCAL_STORAGE',
    }
}

exports.loginUser = (email, password) => {
     return {
        type: 'LOGIN_USER',
        email, password
    }
}

exports.logOut = () => {
     return {
        type: 'LOGOUT_USER'
    }
}

exports.addUser = (username, email, password, image, privilege, rank, rating, items) => {
     return {
        type: 'ADD_USER',
        username, email, password, image, privilege, rank, rating, items
    }
}

exports.updateItem = (username, email, password, image, privilege, rank, rating, items) => {
     return {
        type: 'UPDATE_USER',
        username, email, password, image, privilege, rank, rating, items
    }
}
