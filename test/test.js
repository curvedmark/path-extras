var assert = require('assert');
var Path = require('..');

test("isDir()", function () {
	assert.equal(Path.isDir('/a/'), true);
	assert.equal(Path.isDir('/a'), false);
	assert.equal(Path.isDir('/'), true);
	assert.equal(Path.isDir('.'), false);
	assert.equal(Path.isDir(''), false);
	assert.equal(Path.isDir('a'), false);
	assert.equal(Path.isDir('a/'), true);
});

test("foldername()", function () {
	assert.equal(Path.foldername('/a/'), '/a/');
	assert.equal(Path.foldername('/a'), '/');
	assert.equal(Path.foldername('/'), '/');
	assert.equal(Path.foldername('.'), '.');
	assert.equal(Path.foldername(''), '.');
	assert.equal(Path.foldername('a'), '.');
	assert.equal(Path.foldername('a/'), 'a/');
});