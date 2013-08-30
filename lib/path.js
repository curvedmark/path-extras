var Path = Object.create(require('path'));
module.exports = Path;

if (!Path.isAbsolute) {
	Path.isAbsolute = function (path) {
		return Path.resolve(path) === path;
	};
}

Path.isDir = function (path) {
	return path.charAt(path.length - 1) === Path.sep;
};

Path.foldername = function (path) {
	if (Path.isDir(path)) return Path.normalize(path);
	return Path.dirname(path);
};