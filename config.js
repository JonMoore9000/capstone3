exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
						//'mongodb://localhost/adventures';
            'mongodb://<dbuser>:<dbpassword>@ds149501.mlab.com:49501/capstonethree';
exports.PORT = process.env.PORT || 8080;
