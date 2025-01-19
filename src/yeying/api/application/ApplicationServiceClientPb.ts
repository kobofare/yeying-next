/**
 * @fileoverview gRPC-Web generated client stub for yeying.api.application
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: yeying/api/application/application.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as yeying_api_application_application_pb from '../../../yeying/api/application/application_pb'; // proto import: "yeying/api/application/application.proto"


export class ApplicationClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSearch = new grpcWeb.MethodDescriptor(
    '/yeying.api.application.Application/Search',
    grpcWeb.MethodType.UNARY,
    yeying_api_application_application_pb.SearchRequest,
    yeying_api_application_application_pb.SearchResponse,
    (request: yeying_api_application_application_pb.SearchRequest) => {
      return request.serializeBinary();
    },
    yeying_api_application_application_pb.SearchResponse.deserializeBinary
  );

  search(
    request: yeying_api_application_application_pb.SearchRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_application_application_pb.SearchResponse>;

  search(
    request: yeying_api_application_application_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.SearchResponse) => void): grpcWeb.ClientReadableStream<yeying_api_application_application_pb.SearchResponse>;

  search(
    request: yeying_api_application_application_pb.SearchRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.SearchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.application.Application/Search',
        request,
        metadata || {},
        this.methodDescriptorSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.application.Application/Search',
    request,
    metadata || {},
    this.methodDescriptorSearch);
  }

  methodDescriptorAudit = new grpcWeb.MethodDescriptor(
    '/yeying.api.application.Application/Audit',
    grpcWeb.MethodType.UNARY,
    yeying_api_application_application_pb.AuditRequest,
    yeying_api_application_application_pb.AuditResponse,
    (request: yeying_api_application_application_pb.AuditRequest) => {
      return request.serializeBinary();
    },
    yeying_api_application_application_pb.AuditResponse.deserializeBinary
  );

  audit(
    request: yeying_api_application_application_pb.AuditRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_application_application_pb.AuditResponse>;

  audit(
    request: yeying_api_application_application_pb.AuditRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.AuditResponse) => void): grpcWeb.ClientReadableStream<yeying_api_application_application_pb.AuditResponse>;

  audit(
    request: yeying_api_application_application_pb.AuditRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.AuditResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.application.Application/Audit',
        request,
        metadata || {},
        this.methodDescriptorAudit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.application.Application/Audit',
    request,
    metadata || {},
    this.methodDescriptorAudit);
  }

  methodDescriptorCreate = new grpcWeb.MethodDescriptor(
    '/yeying.api.application.Application/Create',
    grpcWeb.MethodType.UNARY,
    yeying_api_application_application_pb.CreateRequest,
    yeying_api_application_application_pb.CreateResponse,
    (request: yeying_api_application_application_pb.CreateRequest) => {
      return request.serializeBinary();
    },
    yeying_api_application_application_pb.CreateResponse.deserializeBinary
  );

  create(
    request: yeying_api_application_application_pb.CreateRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_application_application_pb.CreateResponse>;

  create(
    request: yeying_api_application_application_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.CreateResponse) => void): grpcWeb.ClientReadableStream<yeying_api_application_application_pb.CreateResponse>;

  create(
    request: yeying_api_application_application_pb.CreateRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.application.Application/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.application.Application/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorDetail = new grpcWeb.MethodDescriptor(
    '/yeying.api.application.Application/Detail',
    grpcWeb.MethodType.UNARY,
    yeying_api_application_application_pb.DetailRequest,
    yeying_api_application_application_pb.DetailResponse,
    (request: yeying_api_application_application_pb.DetailRequest) => {
      return request.serializeBinary();
    },
    yeying_api_application_application_pb.DetailResponse.deserializeBinary
  );

  detail(
    request: yeying_api_application_application_pb.DetailRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_application_application_pb.DetailResponse>;

  detail(
    request: yeying_api_application_application_pb.DetailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.DetailResponse) => void): grpcWeb.ClientReadableStream<yeying_api_application_application_pb.DetailResponse>;

  detail(
    request: yeying_api_application_application_pb.DetailRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.DetailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.application.Application/Detail',
        request,
        metadata || {},
        this.methodDescriptorDetail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.application.Application/Detail',
    request,
    metadata || {},
    this.methodDescriptorDetail);
  }

  methodDescriptorOffline = new grpcWeb.MethodDescriptor(
    '/yeying.api.application.Application/Offline',
    grpcWeb.MethodType.UNARY,
    yeying_api_application_application_pb.OfflineRequest,
    yeying_api_application_application_pb.OfflineResponse,
    (request: yeying_api_application_application_pb.OfflineRequest) => {
      return request.serializeBinary();
    },
    yeying_api_application_application_pb.OfflineResponse.deserializeBinary
  );

  offline(
    request: yeying_api_application_application_pb.OfflineRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_application_application_pb.OfflineResponse>;

  offline(
    request: yeying_api_application_application_pb.OfflineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.OfflineResponse) => void): grpcWeb.ClientReadableStream<yeying_api_application_application_pb.OfflineResponse>;

  offline(
    request: yeying_api_application_application_pb.OfflineRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.OfflineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.application.Application/Offline',
        request,
        metadata || {},
        this.methodDescriptorOffline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.application.Application/Offline',
    request,
    metadata || {},
    this.methodDescriptorOffline);
  }

  methodDescriptorOnline = new grpcWeb.MethodDescriptor(
    '/yeying.api.application.Application/Online',
    grpcWeb.MethodType.UNARY,
    yeying_api_application_application_pb.OnlineRequest,
    yeying_api_application_application_pb.OnlineResponse,
    (request: yeying_api_application_application_pb.OnlineRequest) => {
      return request.serializeBinary();
    },
    yeying_api_application_application_pb.OnlineResponse.deserializeBinary
  );

  online(
    request: yeying_api_application_application_pb.OnlineRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_application_application_pb.OnlineResponse>;

  online(
    request: yeying_api_application_application_pb.OnlineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.OnlineResponse) => void): grpcWeb.ClientReadableStream<yeying_api_application_application_pb.OnlineResponse>;

  online(
    request: yeying_api_application_application_pb.OnlineRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.OnlineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.application.Application/Online',
        request,
        metadata || {},
        this.methodDescriptorOnline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.application.Application/Online',
    request,
    metadata || {},
    this.methodDescriptorOnline);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/yeying.api.application.Application/Delete',
    grpcWeb.MethodType.UNARY,
    yeying_api_application_application_pb.DeleteRequest,
    yeying_api_application_application_pb.DeleteResponse,
    (request: yeying_api_application_application_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    yeying_api_application_application_pb.DeleteResponse.deserializeBinary
  );

  delete(
    request: yeying_api_application_application_pb.DeleteRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_application_application_pb.DeleteResponse>;

  delete(
    request: yeying_api_application_application_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.DeleteResponse) => void): grpcWeb.ClientReadableStream<yeying_api_application_application_pb.DeleteResponse>;

  delete(
    request: yeying_api_application_application_pb.DeleteRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_application_application_pb.DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.application.Application/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.application.Application/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

}

