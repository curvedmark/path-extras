# path-extras

A drop-in replacement for the `path` module. Provide more methods.

## Installation

	npm install path-extras

## API

### path.isAbsolute()

`path.isAbsolute()` is added in Node 0.11. This is a shim.

### path.isDir()

Test if path is ended with a slash.

### path.foldername()

Like `dirname`, but return the original path if it's ended with a slash.