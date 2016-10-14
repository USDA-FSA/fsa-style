# FSA Style

USDA Farm Service Agency's **Visual Language** and **HTML/CSS Framework**, as documented by the [FSA Design System](http://usda-fsa.github.io/fsa-design-system/).

## Background

The components and style guide of the FSA Design System follow industry-standard web accessibility guidelines and use the best practices of existing style libraries and modern web design. They are designed for use by FSA product teams who want to create beautiful, easy-to-use,  online experiences that are consistent to the FSA Style.

It was created and maintained by the USA-FSA Office of Architecture, and is heavily influenced by the [Draft U.S. Web Design Standards](https://standards.usa.gov/) created and maintained by the wonderful folks at [18F](https://18f.gsa.gov/).

## Recent updates

Information about the most recent release can always be found in the [release history](https://github.com/USDA-FSA/fsa-style/releases). We include details about significant updates and any backwards incompatible changes along with a list of all changes.

## Using fsa-style assets

Two options are available for usage of fsa-style HTML, CSS, Images, and Web Fonts:

* **[NPM Install](#install-using-npm)**
* **[Download ZIP](#download-zip)**

### Install using NPM

If you have `node` installed on your machine, you can use npm to install the Standards. Add `fsa-style`
to your project’s `package.json` as a dependency:

```shell
npm install --save fsa-style
```

The package will be installed in `node_modules/fsa-style`. You can either use the un-compiled files
found in the `src/` or the compiled files in the `dist/` directory. For example, if you're interested in using the SASS files (`.scss`) you would use the `src/` directory; otherwise, `dist/` is what you want.

```
node_modules/fsa-style/
├── dist/
│   ├── css/
│   ├── fonts/
│   ├── img/
│   ├── js/
│   ├── boilerplate.html
│   └── index.html
└── src/
    ├── fonts/
    ├── img/
    ├── js/
    ├── stylesheets/
    ├── boilerplate.html
    └── index.html
```

The main Sass (SCSS) source file is here:

```
node_modules/fsa-style/src/stylesheets/all.scss
```

The compiled and minified  CSS files' location:

```
node_modules/fsa-style/dist/css/fsa-style.css
node_modules/fsa-style/dist/css/fsa-style.min.css
```

Lastly, refer to [Using the Boilerplate](#using-the-boilerplate) for basic guidance on HTML structure.

### Download ZIP

If you don't have Node or the ability to incorporate source files into a build process (Grunt, Gulp, etc), follow these steps to manually use the FSA Style.

Download the latest assets: **https://github.com/usda-fsa/fsa-style/releases/download/0.2.7/fsa-style-0.2.7.zip**

#### 1. Visual Index

`index.html` is a Visual Index of this CSS Framework's Visual Language, including basic HTML elements expressed in that style. Viewable at http://usda-fsa.github.io/fsa-style/index.html.

#### 2. Boilerplate

`boilerplate.html` provides a non-designed starting point. It serves as general guidance for the HTML structure most typically required of an FSA digital product. Viewable at
http://usda-fsa.github.io/fsa-style/boilerplate.html.

#### 3. Manually adding to your project

Add the downloaded ZIP's assets to a relevant place in your code base — likely a directory where you keep third-party libraries:

```sh
fsa-style-0.2.7/
├── css/
│   ├── fsa-style.css
│   ├── fsa-style.css.map
│   ├── fsa-style.min.css
│   └── fsa-style.min.css.map
├── fonts/
├── img/
└── js/
    └── vendor/
```

Note that `fonts` and `img` must be alongside `css` as the CSS files reference them at a specific relative path; e.g., `../img/file.png`

Refer to [Using the Boilerplate](#using-the-boilerplate) for further steps.

## Using the Boilerplate

http://usda-fsa.github.io/fsa-style/boilerplate.html

Reference this basic list for the general requirements for your typical HTML structure. Reviewing this list is perhaps best done while viewing its [HTML source](https://github.com/USDA-FSA/fsa-style/blob/master/src/boilerplate.html).

1. HTML5 doctype: `<!DOCTYPE html>`.
1. Wrap `<html>` start element in IE conditional comment.
1. Enable Responsive Web Design via `<meta name="viewport" content="width=device-width, initial-scale=1">`.
1. Reference CSS file(s) via `<link>` tag.
1. Reference IE conditional commented JS files to polyfill features below IE9.
1. Include IE conditional commented Browser Upgrade message.
1. Include "skipnav" anchor link, with `href` attribute pointing to `<main>` element.
1. Wrap primary contents with `<main id="main-content">...</main>`.
1. Build your thing!

## Contributing

For complete instructions on how to contribute code, please read [CONTRIBUTING.md](CONTRIBUTING.md).

If you have questions or concerns about our contributing workflow, please contact us by [filing a GitHub issue](https://github.com/usda=fsa/fsa-style/issues).

## Reuse of open-source style guides

This Design System was initially based on the [Draft U.S. Web Design Standards](https://playbook.cio.gov/designstandards/) created and maintained by the [U.S. Digital Service](https://www.whitehouse.gov/digital/united-states-digital-service) and [18F](https://18f.gsa.gov/) designers and developers.

The Draft U.S. Web Design Standards are designed for use by government product teams who want to create beautiful, easy-to-use online experiences for the public. To learn more about the project, check out [their blog post](https://18f.gsa.gov/2015/09/28/web-design-standards/).

## Other inspiration

Further Design System sources of inspiration - some government-oriented, some not.

* UK’s Government Digital Service’s [UI Elements](http://govuk-elements.herokuapp.com/)
* Consumer Financial Protection Bureau’s [Design Manual](https://cfpb.github.io/design-manual/)
* U.S. Patent and Trademark Office’s [Design Patterns](http://uspto.github.io/designpatterns/)
* Healthcare.gov [Style Guide](http://styleguide.healthcare.gov/)
* Vets.gov [Playbook: Design](https://www.vets.gov/playbook/design/)
* SalesForce - [Lightning Design System](https://www.lightningdesignsystem.com/)
* MailChimp - [Patterns](http://ux.mailchimp.com/patterns)
* Code for America - [Website Style Guide](https://style.codeforamerica.org/)
* Google - [Material Design](https://material.google.com/)
