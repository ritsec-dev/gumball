# Operator - Front

*Navi calls this Gumball.*

## Flow:

1. User requests a page.
2. Gumball gives them the page.
3. Page probably requests things from somewhere else.

## Repo Structure

- Home Page
	- index.html
	- style.css
- less/
	- Holds LESS source.
	- build.sh
		- Compiles LESS source into all the style.css files.
- other folders
	- One for each additional page
	- contain index.html
	- contain style.css
