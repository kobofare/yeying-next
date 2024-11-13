/**
 * @fileoverview gRPC-Web generated client stub for yeying.api.identity
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.0
// source: yeying/api/identity/identity.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var yeying_api_common_message_pb = require('../../../yeying/api/common/message_pb.cjs')

var yeying_api_common_code_pb = require('../../../yeying/api/common/code_pb.cjs')
const proto = {};
proto.yeying = {};
proto.yeying.api = {};
proto.yeying.api.identity = require('./identity_pb.cjs');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.yeying.api.identity.IdentityClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.yeying.api.identity.IdentityPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yeying.api.identity.DepositRequest,
 *   !proto.yeying.api.identity.DepositResponse>}
 */
const methodDescriptor_Identity_Deposit = new grpc.web.MethodDescriptor(
  '/yeying.api.identity.Identity/Deposit',
  grpc.web.MethodType.UNARY,
  proto.yeying.api.identity.DepositRequest,
  proto.yeying.api.identity.DepositResponse,
  /**
   * @param {!proto.yeying.api.identity.DepositRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yeying.api.identity.DepositResponse.deserializeBinary
);


/**
 * @param {!proto.yeying.api.identity.DepositRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yeying.api.identity.DepositResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yeying.api.identity.DepositResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yeying.api.identity.IdentityClient.prototype.deposit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yeying.api.identity.Identity/Deposit',
      request,
      metadata || {},
      methodDescriptor_Identity_Deposit,
      callback);
};


/**
 * @param {!proto.yeying.api.identity.DepositRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yeying.api.identity.DepositResponse>}
 *     Promise that resolves to the response
 */
proto.yeying.api.identity.IdentityPromiseClient.prototype.deposit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yeying.api.identity.Identity/Deposit',
      request,
      metadata || {},
      methodDescriptor_Identity_Deposit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yeying.api.identity.RetrieveRequest,
 *   !proto.yeying.api.identity.RetrieveResponse>}
 */
const methodDescriptor_Identity_Retrieve = new grpc.web.MethodDescriptor(
  '/yeying.api.identity.Identity/Retrieve',
  grpc.web.MethodType.UNARY,
  proto.yeying.api.identity.RetrieveRequest,
  proto.yeying.api.identity.RetrieveResponse,
  /**
   * @param {!proto.yeying.api.identity.RetrieveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yeying.api.identity.RetrieveResponse.deserializeBinary
);


/**
 * @param {!proto.yeying.api.identity.RetrieveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yeying.api.identity.RetrieveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yeying.api.identity.RetrieveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yeying.api.identity.IdentityClient.prototype.retrieve =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yeying.api.identity.Identity/Retrieve',
      request,
      metadata || {},
      methodDescriptor_Identity_Retrieve,
      callback);
};


/**
 * @param {!proto.yeying.api.identity.RetrieveRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yeying.api.identity.RetrieveResponse>}
 *     Promise that resolves to the response
 */
proto.yeying.api.identity.IdentityPromiseClient.prototype.retrieve =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yeying.api.identity.Identity/Retrieve',
      request,
      metadata || {},
      methodDescriptor_Identity_Retrieve);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yeying.api.identity.QueryRequest,
 *   !proto.yeying.api.identity.QueryResponse>}
 */
const methodDescriptor_Identity_Query = new grpc.web.MethodDescriptor(
  '/yeying.api.identity.Identity/Query',
  grpc.web.MethodType.UNARY,
  proto.yeying.api.identity.QueryRequest,
  proto.yeying.api.identity.QueryResponse,
  /**
   * @param {!proto.yeying.api.identity.QueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yeying.api.identity.QueryResponse.deserializeBinary
);


/**
 * @param {!proto.yeying.api.identity.QueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yeying.api.identity.QueryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yeying.api.identity.QueryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yeying.api.identity.IdentityClient.prototype.query =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yeying.api.identity.Identity/Query',
      request,
      metadata || {},
      methodDescriptor_Identity_Query,
      callback);
};


/**
 * @param {!proto.yeying.api.identity.QueryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yeying.api.identity.QueryResponse>}
 *     Promise that resolves to the response
 */
proto.yeying.api.identity.IdentityPromiseClient.prototype.query =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yeying.api.identity.Identity/Query',
      request,
      metadata || {},
      methodDescriptor_Identity_Query);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yeying.api.identity.ShareRequest,
 *   !proto.yeying.api.identity.ShareResponse>}
 */
const methodDescriptor_Identity_Share = new grpc.web.MethodDescriptor(
  '/yeying.api.identity.Identity/Share',
  grpc.web.MethodType.UNARY,
  proto.yeying.api.identity.ShareRequest,
  proto.yeying.api.identity.ShareResponse,
  /**
   * @param {!proto.yeying.api.identity.ShareRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yeying.api.identity.ShareResponse.deserializeBinary
);


/**
 * @param {!proto.yeying.api.identity.ShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yeying.api.identity.ShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yeying.api.identity.ShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yeying.api.identity.IdentityClient.prototype.share =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yeying.api.identity.Identity/Share',
      request,
      metadata || {},
      methodDescriptor_Identity_Share,
      callback);
};


/**
 * @param {!proto.yeying.api.identity.ShareRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yeying.api.identity.ShareResponse>}
 *     Promise that resolves to the response
 */
proto.yeying.api.identity.IdentityPromiseClient.prototype.share =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yeying.api.identity.Identity/Share',
      request,
      metadata || {},
      methodDescriptor_Identity_Share);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yeying.api.identity.CancelRequest,
 *   !proto.yeying.api.identity.CancelResponse>}
 */
const methodDescriptor_Identity_Cancel = new grpc.web.MethodDescriptor(
  '/yeying.api.identity.Identity/Cancel',
  grpc.web.MethodType.UNARY,
  proto.yeying.api.identity.CancelRequest,
  proto.yeying.api.identity.CancelResponse,
  /**
   * @param {!proto.yeying.api.identity.CancelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yeying.api.identity.CancelResponse.deserializeBinary
);


/**
 * @param {!proto.yeying.api.identity.CancelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yeying.api.identity.CancelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yeying.api.identity.CancelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yeying.api.identity.IdentityClient.prototype.cancel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yeying.api.identity.Identity/Cancel',
      request,
      metadata || {},
      methodDescriptor_Identity_Cancel,
      callback);
};


/**
 * @param {!proto.yeying.api.identity.CancelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yeying.api.identity.CancelResponse>}
 *     Promise that resolves to the response
 */
proto.yeying.api.identity.IdentityPromiseClient.prototype.cancel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yeying.api.identity.Identity/Cancel',
      request,
      metadata || {},
      methodDescriptor_Identity_Cancel);
};


module.exports = proto.yeying.api.identity;

