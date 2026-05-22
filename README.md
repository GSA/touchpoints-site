# Touchpoints Website

This repository is for the website at https://touchpoints.digital.gov.
This site contains information and support materials for the Touchpoints product.

## How this application is hosted

This Touchpoints product website is hosted at [touchpoints.digital.gov](https://touchpoints.digital.gov).
It is a [Federalist](https://federalist.18f.gov/) site hosted on cloud.gov.

Merges to `main` are deployed to https://touchpoints.digital.gov.

## Development

#### How to install this site locally

After cloning the repo, navigate to the correct folder and install
USWDS, Jekyll, and necessary dependencies using:

```
npm start
```

Then, to run the site locally:

```
npm run serve
```

If all goes well, visit the site at http://localhost:4000.

USWDS assets are in `assets/uswds/fonts` and `assets/uswds/img`.

SASS files are kept in the `/_sass` directory. To watch for changes and recompile the styles, run:

```
npm run watch
```
