# Contentful Locale Assets

When translating your content on Contentful assets don't have a *fallback locale*, that means you have to **manually set the file for each new locale**. 

More often than not we need the same file for all our locales, this script takes care of that.

The base idea was found in this [Medium's post](https://dannorton.medium.com/multi-locale-assets-in-contentful-with-one-upload-hooray-13bfad911cf9]),but that was on a *per asset* basis, this script will copy **all your assets to all your locales**.

## Usage

### Clone this repo and install the dependencies

```javascript
npm i
```
or 

```javascript
yarn
```

### Set the .env variables

- Rename the `.env.example` file to `.env`
- Replace your `Contentful Access Token` (management type) and your `Contentful Space ID`. 


### Run the script

```javascript
npm run start
```
or 

```javascript
yarn start
```

You may get a `Rate limit error occurred. Waiting for X ms before retrying..` error while running this, you can dismiss this error and wait for the script to end.


