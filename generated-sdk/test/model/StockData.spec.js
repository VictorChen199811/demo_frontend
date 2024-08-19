/**
 * 測試用-Swagger UI 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * Contact: skyi989@ymail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerUi);
  }
}(this, function(expect, SwaggerUi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerUi.StockData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StockData', function() {
    it('should create an instance of StockData', function() {
      // uncomment below and update the code to test StockData
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be.a(SwaggerUi.StockData);
    });

    it('should have the property code (base name: "Code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property tradeVolume (base name: "TradeVolume")', function() {
      // uncomment below and update the code to test the property tradeVolume
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property tradeValue (base name: "TradeValue")', function() {
      // uncomment below and update the code to test the property tradeValue
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property openingPrice (base name: "OpeningPrice")', function() {
      // uncomment below and update the code to test the property openingPrice
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property highestPrice (base name: "HighestPrice")', function() {
      // uncomment below and update the code to test the property highestPrice
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property lowestPrice (base name: "LowestPrice")', function() {
      // uncomment below and update the code to test the property lowestPrice
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property closingPrice (base name: "ClosingPrice")', function() {
      // uncomment below and update the code to test the property closingPrice
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property change (base name: "Change")', function() {
      // uncomment below and update the code to test the property change
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property transaction (base name: "Transaction")', function() {
      // uncomment below and update the code to test the property transaction
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property tradeVolume (base name: "tradeVolume")', function() {
      // uncomment below and update the code to test the property tradeVolume
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property tradeValue (base name: "tradeValue")', function() {
      // uncomment below and update the code to test the property tradeValue
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property openingPrice (base name: "openingPrice")', function() {
      // uncomment below and update the code to test the property openingPrice
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property highestPrice (base name: "highestPrice")', function() {
      // uncomment below and update the code to test the property highestPrice
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property lowestPrice (base name: "lowestPrice")', function() {
      // uncomment below and update the code to test the property lowestPrice
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property closingPrice (base name: "closingPrice")', function() {
      // uncomment below and update the code to test the property closingPrice
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property transaction (base name: "transaction")', function() {
      // uncomment below and update the code to test the property transaction
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property change (base name: "change")', function() {
      // uncomment below and update the code to test the property change
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new SwaggerUi.StockData();
      //expect(instance).to.be();
    });

  });

}));
