exports.getItem = (item) => {
     return {
        type: 'GET_ITEM',
        item
    }
}

exports.getItems = (userid) => {
     return {
        type: 'GET_ITEMS_USER',
        userid
    }
}

exports.deleteItem = (id) => {
     return {
        type: 'DELETE_ITEM',
        id
    }
}

exports.addItem = (userid, title, description, deal, price, condition, category, tags, images=[]) => {
     return {
        type: 'ADD_ITEM',
        userid, title, description, deal, price, condition, category, tags, images: images
    }
}

exports.updateItem = (id, userid, title, description, deal, price, condition, category, tags, images=[]) => {
     return {
        type: 'UPDATE_ITEM',
        id, userid, title, description, deal, price, condition, category, tags, images: images
    }
}
