


// define the dictionary
$.i18n().load( {
    'fr' : {
      'key' : 'value',
    },
    'en': {
    }
})

// set the locale
$.i18n( {
    locale: 'en'
    //locale : navigator.language
} );



let model = undefined;

let controller = new Controller(model);
