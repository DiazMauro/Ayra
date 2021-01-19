const mainController = {
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    },
    home: (req, res) => {
        res.render('home')
    },
    products: (req, res) => {
        res.render('products')
    },
    shoppingCart: (req, res) => {
        res.render('ShoppingCart')
    },
}

module.exports = mainController;