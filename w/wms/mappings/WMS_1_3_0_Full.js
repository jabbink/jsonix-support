var WMS_1_3_0_Full_Module_Factory = function () {
  var WMS_1_3_0 = {
    name: 'WMS_1_3_0',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/wms',
    dependencies: ['XLink_1_0'],
    typeInfos: [{
        localName: 'Exception',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            collection: true,
            elementName: 'Format'
          }]
      }, {
        localName: 'StyleURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'Layer',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: 'Name'
          }, {
            name: 'title',
            required: true,
            elementName: 'Title'
          }, {
            name: '_abstract',
            elementName: 'Abstract'
          }, {
            name: 'keywordList',
            elementName: 'KeywordList',
            typeInfo: '.KeywordList'
          }, {
            name: 'crs',
            minOccurs: 0,
            collection: true,
            elementName: 'CRS'
          }, {
            name: 'exGeographicBoundingBox',
            elementName: 'EX_GeographicBoundingBox',
            typeInfo: '.EXGeographicBoundingBox'
          }, {
            name: 'boundingBox',
            minOccurs: 0,
            collection: true,
            elementName: 'BoundingBox',
            typeInfo: '.BoundingBox'
          }, {
            name: 'dimension',
            minOccurs: 0,
            collection: true,
            elementName: 'Dimension',
            typeInfo: '.Dimension'
          }, {
            name: 'attribution',
            elementName: 'Attribution',
            typeInfo: '.Attribution'
          }, {
            name: 'authorityURL',
            minOccurs: 0,
            collection: true,
            elementName: 'AuthorityURL',
            typeInfo: '.AuthorityURL'
          }, {
            name: 'identifier',
            minOccurs: 0,
            collection: true,
            elementName: 'Identifier',
            typeInfo: '.Identifier'
          }, {
            name: 'metadataURL',
            minOccurs: 0,
            collection: true,
            elementName: 'MetadataURL',
            typeInfo: '.MetadataURL'
          }, {
            name: 'dataURL',
            minOccurs: 0,
            collection: true,
            elementName: 'DataURL',
            typeInfo: '.DataURL'
          }, {
            name: 'featureListURL',
            minOccurs: 0,
            collection: true,
            elementName: 'FeatureListURL',
            typeInfo: '.FeatureListURL'
          }, {
            name: 'style',
            minOccurs: 0,
            collection: true,
            elementName: 'Style',
            typeInfo: '.Style'
          }, {
            name: 'minScaleDenominator',
            elementName: 'MinScaleDenominator',
            typeInfo: 'Double'
          }, {
            name: 'maxScaleDenominator',
            elementName: 'MaxScaleDenominator',
            typeInfo: 'Double'
          }, {
            name: 'layer',
            minOccurs: 0,
            collection: true,
            elementName: 'Layer',
            typeInfo: '.Layer'
          }, {
            name: 'queryable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'queryable'
            },
            type: 'attribute'
          }, {
            name: 'cascaded',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'cascaded'
            },
            type: 'attribute'
          }, {
            name: 'opaque',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'opaque'
            },
            type: 'attribute'
          }, {
            name: 'noSubsets',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'noSubsets'
            },
            type: 'attribute'
          }, {
            name: 'fixedWidth',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'fixedWidth'
            },
            type: 'attribute'
          }, {
            name: 'fixedHeight',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'fixedHeight'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Capability',
        typeName: null,
        propertyInfos: [{
            name: 'request',
            required: true,
            elementName: 'Request',
            typeInfo: '.Request'
          }, {
            name: 'exception',
            required: true,
            elementName: 'Exception',
            typeInfo: '.Exception'
          }, {
            name: 'extendedCapabilities',
            minOccurs: 0,
            collection: true,
            elementName: '_ExtendedCapabilities',
            typeInfo: 'AnyType'
          }, {
            name: 'layer',
            elementName: 'Layer',
            typeInfo: '.Layer'
          }]
      }, {
        localName: 'Service',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: 'Name'
          }, {
            name: 'title',
            required: true,
            elementName: 'Title'
          }, {
            name: '_abstract',
            elementName: 'Abstract'
          }, {
            name: 'keywordList',
            elementName: 'KeywordList',
            typeInfo: '.KeywordList'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'contactInformation',
            elementName: 'ContactInformation',
            typeInfo: '.ContactInformation'
          }, {
            name: 'fees',
            elementName: 'Fees'
          }, {
            name: 'accessConstraints',
            elementName: 'AccessConstraints'
          }, {
            name: 'layerLimit',
            elementName: 'LayerLimit',
            typeInfo: 'Integer'
          }, {
            name: 'maxWidth',
            elementName: 'MaxWidth',
            typeInfo: 'Integer'
          }, {
            name: 'maxHeight',
            elementName: 'MaxHeight',
            typeInfo: 'Integer'
          }]
      }, {
        localName: 'MetadataURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'type',
            required: true,
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ContactAddress',
        typeName: null,
        propertyInfos: [{
            name: 'addressType',
            required: true,
            elementName: 'AddressType'
          }, {
            name: 'address',
            required: true,
            elementName: 'Address'
          }, {
            name: 'city',
            required: true,
            elementName: 'City'
          }, {
            name: 'stateOrProvince',
            required: true,
            elementName: 'StateOrProvince'
          }, {
            name: 'postCode',
            required: true,
            elementName: 'PostCode'
          }, {
            name: 'country',
            required: true,
            elementName: 'Country'
          }]
      }, {
        localName: 'Get',
        typeName: null,
        propertyInfos: [{
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'Dimension',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'units',
            required: true,
            attributeName: {
              localPart: 'units'
            },
            type: 'attribute'
          }, {
            name: 'unitSymbol',
            attributeName: {
              localPart: 'unitSymbol'
            },
            type: 'attribute'
          }, {
            name: '_default',
            attributeName: {
              localPart: 'default'
            },
            type: 'attribute'
          }, {
            name: 'multipleValues',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'multipleValues'
            },
            type: 'attribute'
          }, {
            name: 'nearestValue',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'nearestValue'
            },
            type: 'attribute'
          }, {
            name: 'current',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'current'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ContactPersonPrimary',
        typeName: null,
        propertyInfos: [{
            name: 'contactPerson',
            required: true,
            elementName: 'ContactPerson'
          }, {
            name: 'contactOrganization',
            required: true,
            elementName: 'ContactOrganization'
          }]
      }, {
        localName: 'Request',
        typeName: null,
        propertyInfos: [{
            name: 'getCapabilities',
            required: true,
            elementName: 'GetCapabilities',
            typeInfo: '.OperationType'
          }, {
            name: 'getMap',
            required: true,
            elementName: 'GetMap',
            typeInfo: '.OperationType'
          }, {
            name: 'getFeatureInfo',
            elementName: 'GetFeatureInfo',
            typeInfo: '.OperationType'
          }, {
            name: 'extendedOperation',
            minOccurs: 0,
            collection: true,
            elementName: '_ExtendedOperation',
            typeInfo: '.OperationType'
          }]
      }, {
        localName: 'HTTP',
        typeName: null,
        propertyInfos: [{
            name: 'get',
            required: true,
            elementName: 'Get',
            typeInfo: '.Get'
          }, {
            name: 'post',
            elementName: 'Post',
            typeInfo: '.Post'
          }]
      }, {
        localName: 'KeywordList',
        typeName: null,
        propertyInfos: [{
            name: 'keyword',
            minOccurs: 0,
            collection: true,
            elementName: 'Keyword',
            typeInfo: '.Keyword'
          }]
      }, {
        localName: 'AuthorityURL',
        typeName: null,
        propertyInfos: [{
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'FeatureListURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'EXGeographicBoundingBox',
        typeName: null,
        propertyInfos: [{
            name: 'westBoundLongitude',
            required: true,
            typeInfo: 'Double'
          }, {
            name: 'eastBoundLongitude',
            required: true,
            typeInfo: 'Double'
          }, {
            name: 'southBoundLatitude',
            required: true,
            typeInfo: 'Double'
          }, {
            name: 'northBoundLatitude',
            required: true,
            typeInfo: 'Double'
          }]
      }, {
        localName: 'WMSCapabilities',
        typeName: null,
        propertyInfos: [{
            name: 'service',
            required: true,
            elementName: 'Service',
            typeInfo: '.Service'
          }, {
            name: 'capability',
            required: true,
            elementName: 'Capability',
            typeInfo: '.Capability'
          }, {
            name: 'version',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'updateSequence',
            attributeName: {
              localPart: 'updateSequence'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DCPType',
        typeName: null,
        propertyInfos: [{
            name: 'http',
            required: true,
            elementName: 'HTTP',
            typeInfo: '.HTTP'
          }]
      }, {
        localName: 'ContactInformation',
        typeName: null,
        propertyInfos: [{
            name: 'contactPersonPrimary',
            elementName: 'ContactPersonPrimary',
            typeInfo: '.ContactPersonPrimary'
          }, {
            name: 'contactPosition',
            elementName: 'ContactPosition'
          }, {
            name: 'contactAddress',
            elementName: 'ContactAddress',
            typeInfo: '.ContactAddress'
          }, {
            name: 'contactVoiceTelephone',
            elementName: 'ContactVoiceTelephone'
          }, {
            name: 'contactFacsimileTelephone',
            elementName: 'ContactFacsimileTelephone'
          }, {
            name: 'contactElectronicMailAddress',
            elementName: 'ContactElectronicMailAddress'
          }]
      }, {
        localName: 'StyleSheetURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'LegendURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'width',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BoundingBox',
        typeName: null,
        propertyInfos: [{
            name: 'crs',
            required: true,
            attributeName: {
              localPart: 'CRS'
            },
            type: 'attribute'
          }, {
            name: 'minx',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'minx'
            },
            type: 'attribute'
          }, {
            name: 'miny',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'miny'
            },
            type: 'attribute'
          }, {
            name: 'maxx',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'maxx'
            },
            type: 'attribute'
          }, {
            name: 'maxy',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'maxy'
            },
            type: 'attribute'
          }, {
            name: 'resx',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'resx'
            },
            type: 'attribute'
          }, {
            name: 'resy',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'resy'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Identifier',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'authority',
            required: true,
            attributeName: {
              localPart: 'authority'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Post',
        typeName: null,
        propertyInfos: [{
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'Attribution',
        typeName: null,
        propertyInfos: [{
            name: 'title',
            elementName: 'Title'
          }, {
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'logoURL',
            elementName: 'LogoURL',
            typeInfo: '.LogoURL'
          }]
      }, {
        localName: 'Style',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: 'Name'
          }, {
            name: 'title',
            required: true,
            elementName: 'Title'
          }, {
            name: '_abstract',
            elementName: 'Abstract'
          }, {
            name: 'legendURL',
            minOccurs: 0,
            collection: true,
            elementName: 'LegendURL',
            typeInfo: '.LegendURL'
          }, {
            name: 'styleSheetURL',
            elementName: 'StyleSheetURL',
            typeInfo: '.StyleSheetURL'
          }, {
            name: 'styleURL',
            elementName: 'StyleURL',
            typeInfo: '.StyleURL'
          }]
      }, {
        localName: 'Keyword',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'vocabulary',
            attributeName: {
              localPart: 'vocabulary'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'LogoURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'width',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'OperationType',
        propertyInfos: [{
            name: 'format',
            required: true,
            collection: true,
            elementName: 'Format'
          }, {
            name: 'dcpType',
            required: true,
            collection: true,
            elementName: 'DCPType',
            typeInfo: '.DCPType'
          }]
      }, {
        localName: 'OnlineResource',
        typeName: null,
        propertyInfos: [{
            name: 'type',
            attributeName: {
              localPart: 'type',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'href',
            attributeName: {
              localPart: 'href',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'role',
            attributeName: {
              localPart: 'role',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'arcrole',
            attributeName: {
              localPart: 'arcrole',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'title',
            attributeName: {
              localPart: 'title',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'show',
            attributeName: {
              localPart: 'show',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'actuate',
            attributeName: {
              localPart: 'actuate',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DataURL',
        typeName: null,
        propertyInfos: [{
            name: 'format',
            required: true,
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            required: true,
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }],
    elementInfos: [{
        elementName: 'AuthorityURL',
        typeInfo: '.AuthorityURL'
      }, {
        elementName: 'LegendURL',
        typeInfo: '.LegendURL'
      }, {
        elementName: 'MetadataURL',
        typeInfo: '.MetadataURL'
      }, {
        elementName: 'Fees'
      }, {
        elementName: 'DCPType',
        typeInfo: '.DCPType'
      }, {
        elementName: 'PostCode'
      }, {
        elementName: 'StateOrProvince'
      }, {
        elementName: 'Keyword',
        typeInfo: '.Keyword'
      }, {
        elementName: 'FeatureListURL',
        typeInfo: '.FeatureListURL'
      }, {
        elementName: 'Style',
        typeInfo: '.Style'
      }, {
        elementName: 'KeywordList',
        typeInfo: '.KeywordList'
      }, {
        elementName: 'Service',
        typeInfo: '.Service'
      }, {
        elementName: 'Dimension',
        typeInfo: '.Dimension'
      }, {
        elementName: 'BoundingBox',
        typeInfo: '.BoundingBox'
      }, {
        elementName: 'HTTP',
        typeInfo: '.HTTP'
      }, {
        elementName: 'Get',
        typeInfo: '.Get'
      }, {
        elementName: '_ExtendedCapabilities',
        typeInfo: 'AnyType'
      }, {
        elementName: 'ContactAddress',
        typeInfo: '.ContactAddress'
      }, {
        elementName: 'Exception',
        typeInfo: '.Exception'
      }, {
        elementName: 'ContactPersonPrimary',
        typeInfo: '.ContactPersonPrimary'
      }, {
        elementName: 'LogoURL',
        typeInfo: '.LogoURL'
      }, {
        elementName: 'ContactPosition'
      }, {
        elementName: 'Request',
        typeInfo: '.Request'
      }, {
        elementName: 'Identifier',
        typeInfo: '.Identifier'
      }, {
        elementName: 'ContactFacsimileTelephone'
      }, {
        elementName: 'WMS_Capabilities',
        typeInfo: '.WMSCapabilities'
      }, {
        elementName: 'StyleURL',
        typeInfo: '.StyleURL'
      }, {
        elementName: 'Address'
      }, {
        elementName: 'GetCapabilities',
        typeInfo: '.OperationType'
      }, {
        elementName: 'GetFeatureInfo',
        typeInfo: '.OperationType'
      }, {
        elementName: 'Layer',
        typeInfo: '.Layer'
      }, {
        elementName: 'ContactOrganization'
      }, {
        elementName: 'ContactInformation',
        typeInfo: '.ContactInformation'
      }, {
        elementName: 'StyleSheetURL',
        typeInfo: '.StyleSheetURL'
      }, {
        elementName: 'Abstract'
      }, {
        elementName: 'Country'
      }, {
        elementName: 'LayerLimit',
        typeInfo: 'Integer'
      }, {
        elementName: 'ContactVoiceTelephone'
      }, {
        elementName: 'EX_GeographicBoundingBox',
        typeInfo: '.EXGeographicBoundingBox'
      }, {
        elementName: 'GetMap',
        typeInfo: '.OperationType'
      }, {
        elementName: 'DataURL',
        typeInfo: '.DataURL'
      }, {
        elementName: 'Capability',
        typeInfo: '.Capability'
      }, {
        elementName: 'AddressType'
      }, {
        elementName: 'ContactPerson'
      }, {
        elementName: '_ExtendedOperation',
        typeInfo: '.OperationType'
      }, {
        elementName: 'City'
      }, {
        elementName: 'Name'
      }, {
        elementName: 'MaxWidth',
        typeInfo: 'Integer'
      }, {
        elementName: 'MaxScaleDenominator',
        typeInfo: 'Double'
      }, {
        elementName: 'Attribution',
        typeInfo: '.Attribution'
      }, {
        elementName: 'CRS'
      }, {
        elementName: 'Post',
        typeInfo: '.Post'
      }, {
        elementName: 'MaxHeight',
        typeInfo: 'Integer'
      }, {
        elementName: 'OnlineResource',
        typeInfo: '.OnlineResource'
      }, {
        elementName: 'Title'
      }, {
        elementName: 'AccessConstraints'
      }, {
        elementName: 'ContactElectronicMailAddress'
      }, {
        elementName: 'MinScaleDenominator',
        typeInfo: 'Double'
      }, {
        elementName: 'Format'
      }]
  };
  var XLink_1_0 = {
    name: 'XLink_1_0',
    defaultElementNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'ShowType',
        values: ['new', 'replace', 'embed', 'other', 'none']
      }, {
        type: 'enumInfo',
        localName: 'ActuateType',
        values: ['onLoad', 'onRequest', 'other', 'none']
      }, {
        type: 'enumInfo',
        localName: 'TypeType',
        values: ['simple', 'extended', 'title', 'resource', 'locator', 'arc']
      }],
    elementInfos: []
  };
  return {
    WMS_1_3_0: WMS_1_3_0,
    XLink_1_0: XLink_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WMS_1_3_0_Full_Module_Factory);
}
else {
  var WMS_1_3_0_Full_Module = WMS_1_3_0_Full_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WMS_1_3_0 = WMS_1_3_0_Full_Module.WMS_1_3_0;
    module.exports.XLink_1_0 = WMS_1_3_0_Full_Module.XLink_1_0;
  }
  else {
    var WMS_1_3_0 = WMS_1_3_0_Full_Module.WMS_1_3_0;
    var XLink_1_0 = WMS_1_3_0_Full_Module.XLink_1_0;
  }
}