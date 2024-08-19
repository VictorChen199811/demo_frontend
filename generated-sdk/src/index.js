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


import ApiClient from './ApiClient';
import StockData from './model/StockData';
import TaiwanTotalIndex from './model/TaiwanTotalIndex';
import StockControllerApi from './api/StockControllerApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SwaggerUi = require('index'); // See note below*.
* var xxxSvc = new SwaggerUi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SwaggerUi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SwaggerUi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SwaggerUi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The StockData model constructor.
     * @property {module:model/StockData}
     */
    StockData,

    /**
     * The TaiwanTotalIndex model constructor.
     * @property {module:model/TaiwanTotalIndex}
     */
    TaiwanTotalIndex,

    /**
    * The StockControllerApi service constructor.
    * @property {module:api/StockControllerApi}
    */
    StockControllerApi
};
