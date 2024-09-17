//this file keeps the secret part of the JWT token super secret

module.exports = {
    jwt: process.env.JWT_SECRET,
}