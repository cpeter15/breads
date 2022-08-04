const React = require('react');
const Default = require('./layouts/default');

const NotFound = (req, res) => {
    return (
        <Default>
            <h1>404</h1>
            <a href='/breads'> Go Home</a>
        </Default>
    )
}

module.exports = NotFound;