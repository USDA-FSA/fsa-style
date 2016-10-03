# FSA Style

USDA Farm Service Agency's **Visual Language** and **HTML/CSS Framework**, as documented by the [FSA Design System](http://usda-fsa.github.io/fsa-design-system/) which is maintained is a [separate repository](https://github.com/USDA-FSA/fsa-design-system).

## Background

The components and style guide of the FSA Design System follow industry-standard web accessibility guidelines and use the best practices of existing style libraries and modern web design.

It was created and maintained by the USA-FSA Office of Architecture, and is heavily influenced by the [Draft U.S. Web Design Standards](https://standards.usa.gov/) created and maintained by the wonderful folks at [18F](https://18f.gsa.gov/).

They are designed for use by FSA product teams who want to create beautiful, easy-to-use online experiences.

## Recent updates

Information about the most recent release can always be found in the [release history](https://github.com/USDA-FSA/fsa-style/releases). We include details about significant updates and any backwards incompatible changes along with a list of all changes.

## Using these assets

Two options are available for usage of fsa-style HTML, CSS, Images, and Web Fonts: **NPM Install** or **Download**.

### NPM

(steps to `npm install` and incorporate)

### Download

First, download the assets:

https://github.com/usda-fsa/fsa-style/releases/download/v0.2.5/fsa-style-0.2.5.zip

#### Visual Index

The `index.html` included is a Visual Index (think "Kitchen Sink") of available HTML/CSS, also viewable at http://usda-fsa.github.io/fsa-style/index.html.

#### Boilerplate

A basic `boilerplate.html` is available for immediate use and includes the HTML structure most typically required of an FSA digital product. It is also viewable at
http://usda-fsa.github.io/fsa-style/boilerplate.html.

#### Manually adding to your project

First, add the following folders into a relevant place in your code base — likely a directory where you keep third-party libraries:

```
fsa-style-0.2.5/
├── js/
│   └── vendor/
├── css/
│   ├── fsa-style.min.css.map
│   ├── fsa-style.min.css
│   └── fsa-style.css
├── img/
└── fonts/
```

Second, use `boilerplate.html` as a reference for the key HTML structure required, generally summarized below:

doctype
ltie html el
meta:ie edge
meta:viewport
CSS reference
ltie js deps
browser upgrade
skipnav
main



## Building and Running Locally

### tl;dr

```sh
npm install
npm start
```

### Build Assets

First, you'll need to Command Line Interface for Grunt...

```sh
npm install --global grunt-cli
```

...then...

```sh
npm install
```

...and then...

```sh
npm start
```

## Contributing

For complete instructions on how to contribute code, please read [CONTRIBUTING.md](CONTRIBUTING.md).

If you have questions or concerns about our contributing workflow, please contact us by [filing a GitHub issue](#https://github.com/usda=fsa/fsa-design-system/issues) or [emailing our team](#mailto:username@usda.gov).


## Reuse of open-source style guides

This Design System was initially based on the [Draft U.S. Web Design Standards](https://playbook.cio.gov/designstandards/) created and maintained by the [U.S. Digital Service](https://www.whitehouse.gov/digital/united-states-digital-service) and [18F](https://18f.gsa.gov/) designers and developers. The Draft U.S. Web Design Standards are designed for use by government product teams who want to create beautiful, easy-to-use online experiences for the public. To learn more about the project, check out [their blog post](https://18f.gsa.gov/2015/09/28/web-design-standards/).

* Consumer Financial Protection Bureau’s [Design Manual](https://cfpb.github.io/design-manual/)
* U.S. Patent and Trademark Office’s [Design Patterns](http://uspto.github.io/designpatterns/)
* Healthcare.gov [Style Guide](http://styleguide.healthcare.gov/)
* UK’s Government Digital Service’s [UI Elements](http://govuk-elements.herokuapp.com/)
* Code for America’s Chime [Styleguide](https://github.com/chimecms/chime-starter)
* Pivotal Labs [Component Library](http://styleguide.cfapps.io/)

ch ch ch changes
