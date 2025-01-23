// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file yeying/api/service/service.proto (package yeying.api.service, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { MessageHeader, RequestPage, ResponseStatus, ServiceMetadata } from "../common/message_pb";
import { file_yeying_api_common_message } from "../common/message_pb";
import type { ServiceCodeEnum } from "../common/code_pb";
import { file_yeying_api_common_code } from "../common/code_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/service/service.proto.
 */
export const file_yeying_api_service_service: GenFile = /*@__PURE__*/
  fileDesc("CiB5ZXlpbmcvYXBpL3NlcnZpY2Uvc2VydmljZS5wcm90bxISeWV5aW5nLmFwaS5zZXJ2aWNlInoKD1JlZ2lzdGVyUmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjUKBGJvZHkYAiABKAsyJy55ZXlpbmcuYXBpLnNlcnZpY2UuUmVnaXN0ZXJSZXF1ZXN0Qm9keSJKChNSZWdpc3RlclJlcXVlc3RCb2R5EjMKB3NlcnZpY2UYASABKAsyIi55ZXlpbmcuYXBpLmNvbW1vbi5TZXJ2aWNlTWV0YWRhdGEifAoQUmVnaXN0ZXJSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjYKBGJvZHkYAiABKAsyKC55ZXlpbmcuYXBpLnNlcnZpY2UuUmVnaXN0ZXJSZXNwb25zZUJvZHkiSQoUUmVnaXN0ZXJSZXNwb25zZUJvZHkSMQoGc3RhdHVzGAIgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMidgoNU2VhcmNoUmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjMKBGJvZHkYAiABKAsyJS55ZXlpbmcuYXBpLnNlcnZpY2UuU2VhcmNoUmVxdWVzdEJvZHkieQoRU2VhcmNoUmVxdWVzdEJvZHkSNgoJY29uZGl0aW9uGAEgASgLMiMueWV5aW5nLmFwaS5zZXJ2aWNlLlNlYXJjaENvbmRpdGlvbhIsCgRwYWdlGAIgASgLMh4ueWV5aW5nLmFwaS5jb21tb24uUmVxdWVzdFBhZ2UiUgoPU2VhcmNoQ29uZGl0aW9uEjAKBGNvZGUYASABKA4yIi55ZXlpbmcuYXBpLmNvbW1vbi5TZXJ2aWNlQ29kZUVudW0SDQoFb3duZXIYAiABKAkieAoOU2VhcmNoUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI0CgRib2R5GAIgASgLMiYueWV5aW5nLmFwaS5zZXJ2aWNlLlNlYXJjaFJlc3BvbnNlQm9keSJ9ChJTZWFyY2hSZXNwb25zZUJvZHkSMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMSNAoIc2VydmljZXMYAiADKAsyIi55ZXlpbmcuYXBpLmNvbW1vbi5TZXJ2aWNlTWV0YWRhdGEifgoRVW5yZWdpc3RlclJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI3CgRib2R5GAIgASgLMikueWV5aW5nLmFwaS5zZXJ2aWNlLlVucmVnaXN0ZXJSZXF1ZXN0Qm9keSIkChVVbnJlZ2lzdGVyUmVxdWVzdEJvZHkSCwoDZGlkGAEgASgJIoABChJVbnJlZ2lzdGVyUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI4CgRib2R5GAIgASgLMioueWV5aW5nLmFwaS5zZXJ2aWNlLlVucmVnaXN0ZXJSZXNwb25zZUJvZHkiSwoWVW5yZWdpc3RlclJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1czKUAgoHU2VydmljZRJXCghSZWdpc3RlchIjLnlleWluZy5hcGkuc2VydmljZS5SZWdpc3RlclJlcXVlc3QaJC55ZXlpbmcuYXBpLnNlcnZpY2UuUmVnaXN0ZXJSZXNwb25zZSIAElEKBlNlYXJjaBIhLnlleWluZy5hcGkuc2VydmljZS5TZWFyY2hSZXF1ZXN0GiIueWV5aW5nLmFwaS5zZXJ2aWNlLlNlYXJjaFJlc3BvbnNlIgASXQoKVW5yZWdpc3RlchIlLnlleWluZy5hcGkuc2VydmljZS5VbnJlZ2lzdGVyUmVxdWVzdBomLnlleWluZy5hcGkuc2VydmljZS5VbnJlZ2lzdGVyUmVzcG9uc2UiAEIUWhJ5ZXlpbmcvYXBpL3NlcnZpY2ViBnByb3RvMw", [file_yeying_api_common_message, file_yeying_api_common_code]);

/**
 * @generated from message yeying.api.service.RegisterRequest
 */
export type RegisterRequest = Message<"yeying.api.service.RegisterRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.service.RegisterRequestBody body = 2;
   */
  body?: RegisterRequestBody;
};

/**
 * Describes the message yeying.api.service.RegisterRequest.
 * Use `create(RegisterRequestSchema)` to create a new message.
 */
export const RegisterRequestSchema: GenMessage<RegisterRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 0);

/**
 * @generated from message yeying.api.service.RegisterRequestBody
 */
export type RegisterRequestBody = Message<"yeying.api.service.RegisterRequestBody"> & {
  /**
   * @generated from field: yeying.api.common.ServiceMetadata service = 1;
   */
  service?: ServiceMetadata;
};

/**
 * Describes the message yeying.api.service.RegisterRequestBody.
 * Use `create(RegisterRequestBodySchema)` to create a new message.
 */
export const RegisterRequestBodySchema: GenMessage<RegisterRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 1);

/**
 * @generated from message yeying.api.service.RegisterResponse
 */
export type RegisterResponse = Message<"yeying.api.service.RegisterResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.service.RegisterResponseBody body = 2;
   */
  body?: RegisterResponseBody;
};

/**
 * Describes the message yeying.api.service.RegisterResponse.
 * Use `create(RegisterResponseSchema)` to create a new message.
 */
export const RegisterResponseSchema: GenMessage<RegisterResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 2);

/**
 * @generated from message yeying.api.service.RegisterResponseBody
 */
export type RegisterResponseBody = Message<"yeying.api.service.RegisterResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 2;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.service.RegisterResponseBody.
 * Use `create(RegisterResponseBodySchema)` to create a new message.
 */
export const RegisterResponseBodySchema: GenMessage<RegisterResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 3);

/**
 * @generated from message yeying.api.service.SearchRequest
 */
export type SearchRequest = Message<"yeying.api.service.SearchRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.service.SearchRequestBody body = 2;
   */
  body?: SearchRequestBody;
};

/**
 * Describes the message yeying.api.service.SearchRequest.
 * Use `create(SearchRequestSchema)` to create a new message.
 */
export const SearchRequestSchema: GenMessage<SearchRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 4);

/**
 * @generated from message yeying.api.service.SearchRequestBody
 */
export type SearchRequestBody = Message<"yeying.api.service.SearchRequestBody"> & {
  /**
   * @generated from field: yeying.api.service.SearchCondition condition = 1;
   */
  condition?: SearchCondition;

  /**
   * @generated from field: yeying.api.common.RequestPage page = 2;
   */
  page?: RequestPage;
};

/**
 * Describes the message yeying.api.service.SearchRequestBody.
 * Use `create(SearchRequestBodySchema)` to create a new message.
 */
export const SearchRequestBodySchema: GenMessage<SearchRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 5);

/**
 * @generated from message yeying.api.service.SearchCondition
 */
export type SearchCondition = Message<"yeying.api.service.SearchCondition"> & {
  /**
   * @generated from field: yeying.api.common.ServiceCodeEnum code = 1;
   */
  code: ServiceCodeEnum;

  /**
   * @generated from field: string owner = 2;
   */
  owner: string;
};

/**
 * Describes the message yeying.api.service.SearchCondition.
 * Use `create(SearchConditionSchema)` to create a new message.
 */
export const SearchConditionSchema: GenMessage<SearchCondition> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 6);

/**
 * @generated from message yeying.api.service.SearchResponse
 */
export type SearchResponse = Message<"yeying.api.service.SearchResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.service.SearchResponseBody body = 2;
   */
  body?: SearchResponseBody;
};

/**
 * Describes the message yeying.api.service.SearchResponse.
 * Use `create(SearchResponseSchema)` to create a new message.
 */
export const SearchResponseSchema: GenMessage<SearchResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 7);

/**
 * @generated from message yeying.api.service.SearchResponseBody
 */
export type SearchResponseBody = Message<"yeying.api.service.SearchResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: repeated yeying.api.common.ServiceMetadata services = 2;
   */
  services: ServiceMetadata[];
};

/**
 * Describes the message yeying.api.service.SearchResponseBody.
 * Use `create(SearchResponseBodySchema)` to create a new message.
 */
export const SearchResponseBodySchema: GenMessage<SearchResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 8);

/**
 * @generated from message yeying.api.service.UnregisterRequest
 */
export type UnregisterRequest = Message<"yeying.api.service.UnregisterRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.service.UnregisterRequestBody body = 2;
   */
  body?: UnregisterRequestBody;
};

/**
 * Describes the message yeying.api.service.UnregisterRequest.
 * Use `create(UnregisterRequestSchema)` to create a new message.
 */
export const UnregisterRequestSchema: GenMessage<UnregisterRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 9);

/**
 * @generated from message yeying.api.service.UnregisterRequestBody
 */
export type UnregisterRequestBody = Message<"yeying.api.service.UnregisterRequestBody"> & {
  /**
   * @generated from field: string did = 1;
   */
  did: string;
};

/**
 * Describes the message yeying.api.service.UnregisterRequestBody.
 * Use `create(UnregisterRequestBodySchema)` to create a new message.
 */
export const UnregisterRequestBodySchema: GenMessage<UnregisterRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 10);

/**
 * @generated from message yeying.api.service.UnregisterResponse
 */
export type UnregisterResponse = Message<"yeying.api.service.UnregisterResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.service.UnregisterResponseBody body = 2;
   */
  body?: UnregisterResponseBody;
};

/**
 * Describes the message yeying.api.service.UnregisterResponse.
 * Use `create(UnregisterResponseSchema)` to create a new message.
 */
export const UnregisterResponseSchema: GenMessage<UnregisterResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 11);

/**
 * @generated from message yeying.api.service.UnregisterResponseBody
 */
export type UnregisterResponseBody = Message<"yeying.api.service.UnregisterResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.service.UnregisterResponseBody.
 * Use `create(UnregisterResponseBodySchema)` to create a new message.
 */
export const UnregisterResponseBodySchema: GenMessage<UnregisterResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_service_service, 12);

/**
 * *
 * 节点提供服务登记、注销和查询的服务。每个服务都有一个身份，实际向节点登记的是身份信息。构建自己的服务，除了事先开发服务意外，需要以下几件事：
 * 1、创建服务身份
 * 2、使用身份启动服务
 * 3、选择节点登记服务
 * 4、应用绑定该服务
 *
 * @generated from service yeying.api.service.Service
 */
export const Service: GenService<{
  /**
   * @generated from rpc yeying.api.service.Service.Register
   */
  register: {
    methodKind: "unary";
    input: typeof RegisterRequestSchema;
    output: typeof RegisterResponseSchema;
  },
  /**
   * @generated from rpc yeying.api.service.Service.Search
   */
  search: {
    methodKind: "unary";
    input: typeof SearchRequestSchema;
    output: typeof SearchResponseSchema;
  },
  /**
   * @generated from rpc yeying.api.service.Service.Unregister
   */
  unregister: {
    methodKind: "unary";
    input: typeof UnregisterRequestSchema;
    output: typeof UnregisterResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_yeying_api_service_service, 0);

