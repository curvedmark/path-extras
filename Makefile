path.js: lib/path-browser.js
	@echo '!function (exports) {' > $@
	@cat $< >> $@
	@echo '}(window.path = {});' >> $@