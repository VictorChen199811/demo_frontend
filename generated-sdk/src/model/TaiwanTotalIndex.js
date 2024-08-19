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

import ApiClient from '../ApiClient';

/**
 * The TaiwanTotalIndex model module.
 * @module model/TaiwanTotalIndex
 * @version 1.0
 */
class TaiwanTotalIndex {
    /**
     * Constructs a new <code>TaiwanTotalIndex</code>.
     * @alias module:model/TaiwanTotalIndex
     */
    constructor() { 
        
        TaiwanTotalIndex.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaiwanTotalIndex</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaiwanTotalIndex} obj Optional instance to populate.
     * @return {module:model/TaiwanTotalIndex} The populated <code>TaiwanTotalIndex</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaiwanTotalIndex();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('openingIndex')) {
                obj['openingIndex'] = ApiClient.convertToType(data['openingIndex'], 'String');
            }
            if (data.hasOwnProperty('highestIndex')) {
                obj['highestIndex'] = ApiClient.convertToType(data['highestIndex'], 'String');
            }
            if (data.hasOwnProperty('lowestIndex')) {
                obj['lowestIndex'] = ApiClient.convertToType(data['lowestIndex'], 'String');
            }
            if (data.hasOwnProperty('closingIndex')) {
                obj['closingIndex'] = ApiClient.convertToType(data['closingIndex'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TaiwanTotalIndex</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TaiwanTotalIndex</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['openingIndex'] && !(typeof data['openingIndex'] === 'string' || data['openingIndex'] instanceof String)) {
            throw new Error("Expected the field `openingIndex` to be a primitive type in the JSON string but got " + data['openingIndex']);
        }
        // ensure the json data is a string
        if (data['highestIndex'] && !(typeof data['highestIndex'] === 'string' || data['highestIndex'] instanceof String)) {
            throw new Error("Expected the field `highestIndex` to be a primitive type in the JSON string but got " + data['highestIndex']);
        }
        // ensure the json data is a string
        if (data['lowestIndex'] && !(typeof data['lowestIndex'] === 'string' || data['lowestIndex'] instanceof String)) {
            throw new Error("Expected the field `lowestIndex` to be a primitive type in the JSON string but got " + data['lowestIndex']);
        }
        // ensure the json data is a string
        if (data['closingIndex'] && !(typeof data['closingIndex'] === 'string' || data['closingIndex'] instanceof String)) {
            throw new Error("Expected the field `closingIndex` to be a primitive type in the JSON string but got " + data['closingIndex']);
        }

        return true;
    }


}



/**
 * @member {Date} date
 */
TaiwanTotalIndex.prototype['date'] = undefined;

/**
 * @member {String} openingIndex
 */
TaiwanTotalIndex.prototype['openingIndex'] = undefined;

/**
 * @member {String} highestIndex
 */
TaiwanTotalIndex.prototype['highestIndex'] = undefined;

/**
 * @member {String} lowestIndex
 */
TaiwanTotalIndex.prototype['lowestIndex'] = undefined;

/**
 * @member {String} closingIndex
 */
TaiwanTotalIndex.prototype['closingIndex'] = undefined;






export default TaiwanTotalIndex;

