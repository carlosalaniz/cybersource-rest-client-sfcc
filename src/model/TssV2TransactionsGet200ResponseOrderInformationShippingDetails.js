/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponseOrderInformationShippingDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseOrderInformationShippingDetails model module.
   * @module model/TssV2TransactionsGet200ResponseOrderInformationShippingDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseOrderInformationShippingDetails</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseOrderInformationShippingDetails
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseOrderInformationShippingDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseOrderInformationShippingDetails} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseOrderInformationShippingDetails} The populated <code>TssV2TransactionsGet200ResponseOrderInformationShippingDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('giftWrap')) {
        obj['giftWrap'] = ApiClient.convertToType(data['giftWrap'], 'Boolean');
      }
      if (data.hasOwnProperty('shippingMethod')) {
        obj['shippingMethod'] = ApiClient.convertToType(data['shippingMethod'], 'String');
      }
    }
    return obj;
  }

  /**
   * The description for this field is not available.
   * @member {Boolean} giftWrap
   */
  exports.prototype['giftWrap'] = undefined;
  /**
   * Shipping method for the product. Possible values:   - lowcost: Lowest-cost service  - sameday: Courier or same-day service  - oneday: Next-day or overnight service  - twoday: Two-day service  - threeday: Three-day service  - pickup: Store pick-up  - other: Other shipping method  - none: No shipping method because product is a service or subscription 
   * @member {String} shippingMethod
   */
  exports.prototype['shippingMethod'] = undefined;



  return exports;
}));

