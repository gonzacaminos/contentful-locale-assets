/*
* Copy all Contenful assets to each locale on your space 
* Get all locales
* Get all assets in space and environment
* Copy the default's locale asset into all the other locales
*/


require('dotenv').config();

// import client
const contentful = require('contentful-management');

// initialize client
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});



async function init(){
    const locales = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment('master'))
    .then((environment) => environment.getLocales())
    .then((response) => response.items.map( e => e.code))
   
    await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment('master'))
    .then((environment) => environment.getAssets())
    .then( (data) => data.items.forEach( asset => { 
        const default_locale = locales[0]
        const srcFile = asset.fields.file ? asset.fields.file[default_locale] : null;
        console.log(asset)
        if(srcFile){
            locales.forEach((locale)=>{
                if(typeof asset.fields.file[locale] == 'undefined'){
                  asset.fields.file[locale] = srcFile;
                  
                }
            });
            return asset.update().then(e => e.publish().then( e => console.log(`Succesfully updated asset ${e.fields.title[default_locale]}`)))
        }   
    }))
}


init()