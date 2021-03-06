/**
 * Unit test suite.
 *
 * @package randy
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var async   = require('async'),
    test    = require('tap').test,
    bux     = require('codebux');

/**
 * Suite
 */
async.auto({

    debt:   function (callback) {
        bux(__dirname + '/../lib', callback);
    },

    test:       ['debt', function (callback, obj) {
        test("Debt", function (t) {
            t.type(obj.debt, "number", "Results should be a number");
            t.ok(obj.debt > -1, "Total should be greater than -1");
            t.end();
        });

        callback();
    }]

}, function (err, obj) {
    test("Catch errors", function (t) {
        t.equal(err, null, "Errors should be null");
        t.end();
    });
});