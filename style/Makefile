clean_sprites:
	rm -rf sprites

clean: clean_sprites
	rm -rf build

sprites: clean_sprites
	mkdir -p sprites
	npx spritezero sprites/sprite@2x icons/ --retina
	npx spritezero sprites/sprite icons/

code_format:
	npx prettier --write .

run: sprites
	python3 -m http.server 1776
