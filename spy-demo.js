var sinon = require('sinon');
var object = {
    get myProperty() {
        return 'fb41a645-24fb-4580-b4c0-17d71ecc1c74';
    } 
};

var descriptor = sinon.spy(object, 'myProperty', ['get']);
var value = object.myProperty;

console.log('callCount:', descriptor.get.callCount); // callCount: 1
