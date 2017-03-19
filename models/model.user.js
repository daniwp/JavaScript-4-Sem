var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    }, password: {
        type: String
    }

});

var User = module.exports = mongoose.model('User', UserSchema);

/**
 * Ensures the password is hashed and salted before saving a User.
 */
UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

/**
 * Compares the candidate password with the hashed and salted password.
 * @param candidatePassword
 * @param callback
 */
UserSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};

module.exports.getUsers = function(query, callback, limit) {
    User.find(query, callback).limit(limit).sort([['email', 'ascending']]);
};

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};

module.exports.getUserByEmail = function (email, callback) {
    User.findOne({email: email}, callback);
};

module.exports.addUser = function (user, callback) {
    User.create(user, callback);
};

module.exports.updateUser = function(query, update, options, callback) {
    User.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeUser = function(query, options, callback) {
    User.findOneAndRemove(query, options, callback);
};

