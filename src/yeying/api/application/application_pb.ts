// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file yeying/api/application/application.proto (package yeying.api.application, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { MessageHeader, RequestPage, ResponsePage, ResponseStatus } from "../common/message_pb";
import { file_yeying_api_common_message } from "../common/message_pb";
import type { ApplicationCodeEnum, ApplicationStatusEnum } from "../common/code_pb";
import { file_yeying_api_common_code } from "../common/code_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/application/application.proto.
 */
export const file_yeying_api_application_application: GenFile = /*@__PURE__*/
  fileDesc("Cih5ZXlpbmcvYXBpL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLnByb3RvEhZ5ZXlpbmcuYXBpLmFwcGxpY2F0aW9uInoKDVNlYXJjaFJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI3CgRib2R5GAIgASgLMikueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5TZWFyY2hSZXF1ZXN0Qm9keSJ9ChFTZWFyY2hSZXF1ZXN0Qm9keRI6Cgljb25kaXRpb24YASABKAsyJy55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLlNlYXJjaENvbmRpdGlvbhIsCgRwYWdlGAIgASgLMh4ueWV5aW5nLmFwaS5jb21tb24uUmVxdWVzdFBhZ2UikAEKD1NlYXJjaENvbmRpdGlvbhI0CgRjb2RlGAEgASgOMiYueWV5aW5nLmFwaS5jb21tb24uQXBwbGljYXRpb25Db2RlRW51bRI4CgZzdGF0dXMYAiABKA4yKC55ZXlpbmcuYXBpLmNvbW1vbi5BcHBsaWNhdGlvblN0YXR1c0VudW0SDQoFb3duZXIYAyABKAkifAoOU2VhcmNoUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI4CgRib2R5GAIgASgLMioueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5TZWFyY2hSZXNwb25zZUJvZHkiuQEKElNlYXJjaFJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cxJBCgxhcHBsaWNhdGlvbnMYAiADKAsyKy55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkFwcGxpY2F0aW9uTWV0YWRhdGESLQoEcGFnZRgDIAEoCzIfLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlUGFnZSJ6Cg1DcmVhdGVSZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISNwoEYm9keRgCIAEoCzIpLnlleWluZy5hcGkuYXBwbGljYXRpb24uQ3JlYXRlUmVxdWVzdEJvZHkiVQoRQ3JlYXRlUmVxdWVzdEJvZHkSQAoLYXBwbGljYXRpb24YASABKAsyKy55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkFwcGxpY2F0aW9uTWV0YWRhdGEifAoOQ3JlYXRlUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI4CgRib2R5GAIgASgLMioueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5DcmVhdGVSZXNwb25zZUJvZHkiRwoSQ3JlYXRlUmVzcG9uc2VCb2R5EjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzInoKDURldGFpbFJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI3CgRib2R5GAIgASgLMikueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5EZXRhaWxSZXF1ZXN0Qm9keSIxChFEZXRhaWxSZXF1ZXN0Qm9keRILCgNkaWQYASABKAkSDwoHdmVyc2lvbhgCIAEoDSJ8Cg5EZXRhaWxSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjgKBGJvZHkYAiABKAsyKi55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkRldGFpbFJlc3BvbnNlQm9keSLGAQoSRGV0YWlsUmVzcG9uc2VCb2R5EjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzEjsKCWFwcFN0YXR1cxgDIAEoDjIoLnlleWluZy5hcGkuY29tbW9uLkFwcGxpY2F0aW9uU3RhdHVzRW51bRJACgthcHBsaWNhdGlvbhgCIAEoCzIrLnlleWluZy5hcGkuYXBwbGljYXRpb24uQXBwbGljYXRpb25NZXRhZGF0YSJ8Cg5PZmZsaW5lUmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjgKBGJvZHkYAiABKAsyKi55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLk9mZmxpbmVSZXF1ZXN0Qm9keSIyChJPZmZsaW5lUmVxdWVzdEJvZHkSCwoDZGlkGAEgASgJEg8KB3ZlcnNpb24YAiABKA0ifgoPT2ZmbGluZVJlc3BvbnNlEjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISOQoEYm9keRgCIAEoCzIrLnlleWluZy5hcGkuYXBwbGljYXRpb24uT2ZmbGluZVJlc3BvbnNlQm9keSJIChNPZmZsaW5lUmVzcG9uc2VCb2R5EjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzInoKDU9ubGluZVJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI3CgRib2R5GAIgASgLMikueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5PbmxpbmVSZXF1ZXN0Qm9keSIxChFPbmxpbmVSZXF1ZXN0Qm9keRILCgNkaWQYASABKAkSDwoHdmVyc2lvbhgCIAEoDSJ8Cg5PbmxpbmVSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjgKBGJvZHkYAiABKAsyKi55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLk9ubGluZVJlc3BvbnNlQm9keSJHChJPbmxpbmVSZXNwb25zZUJvZHkSMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMiUQoRQXBwbGljYXRpb25FeHRlbmQSPAoIY29tbWVudHMYASADKAsyKi55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkFwcGxpY2F0aW9uQ29tbWVudCJZChJBcHBsaWNhdGlvbkNvbW1lbnQSDwoHYXVkaXRvchgBIAEoCRIPCgdjb21tZW50GAIgASgJEg4KBnBhc3NlZBgDIAEoCBIRCglzaWduYXR1cmUYBCABKAkiywIKE0FwcGxpY2F0aW9uTWV0YWRhdGESDQoFb3duZXIYASABKAkSDwoHbmV0d29yaxgCIAEoCRIPCgdhZGRyZXNzGAMgASgJEgsKA2RpZBgEIAEoCRIPCgd2ZXJzaW9uGAUgASgNEgwKBGhhc2gYBiABKAkSDAoEbmFtZRgHIAEoCRI0CgRjb2RlGAggASgOMiYueWV5aW5nLmFwaS5jb21tb24uQXBwbGljYXRpb25Db2RlRW51bRITCgtkZXNjcmlwdGlvbhgJIAEoCRIQCghsb2NhdGlvbhgKIAEoCRIUCgxzZXJ2aWNlQ29kZXMYCyABKAkSDgoGYXZhdGFyGAwgASgJEg4KBmV4dGVuZBgNIAEoCRIPCgdjcmVhdGVkGA4gASgJEhIKCmNoZWNrcG9pbnQYDyABKAkSEQoJc2lnbmF0dXJlGBAgASgJInoKDURlbGV0ZVJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI3CgRib2R5GAIgASgLMikueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5EZWxldGVSZXF1ZXN0Qm9keSIxChFEZWxldGVSZXF1ZXN0Qm9keRILCgNkaWQYASABKAkSDwoHdmVyc2lvbhgCIAEoDSJ8Cg5EZWxldGVSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjgKBGJvZHkYAiABKAsyKi55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkRlbGV0ZVJlc3BvbnNlQm9keSJHChJEZWxldGVSZXNwb25zZUJvZHkSMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMieAoMQXVkaXRSZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISNgoEYm9keRgCIAEoCzIoLnlleWluZy5hcGkuYXBwbGljYXRpb24uQXVkaXRSZXF1ZXN0Qm9keSJPChBBdWRpdFJlcXVlc3RCb2R5EjsKB2NvbW1lbnQYASABKAsyKi55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkFwcGxpY2F0aW9uQ29tbWVudCJCCg1BdWRpdFJlc3BvbnNlEjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzMooFCgtBcHBsaWNhdGlvbhJZCgZTZWFyY2gSJS55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLlNlYXJjaFJlcXVlc3QaJi55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLlNlYXJjaFJlc3BvbnNlIgASVgoFQXVkaXQSJC55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkF1ZGl0UmVxdWVzdBolLnlleWluZy5hcGkuYXBwbGljYXRpb24uQXVkaXRSZXNwb25zZSIAElkKBkNyZWF0ZRIlLnlleWluZy5hcGkuYXBwbGljYXRpb24uQ3JlYXRlUmVxdWVzdBomLnlleWluZy5hcGkuYXBwbGljYXRpb24uQ3JlYXRlUmVzcG9uc2UiABJZCgZEZXRhaWwSJS55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkRldGFpbFJlcXVlc3QaJi55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkRldGFpbFJlc3BvbnNlIgASXAoHT2ZmbGluZRImLnlleWluZy5hcGkuYXBwbGljYXRpb24uT2ZmbGluZVJlcXVlc3QaJy55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLk9mZmxpbmVSZXNwb25zZSIAElkKBk9ubGluZRIlLnlleWluZy5hcGkuYXBwbGljYXRpb24uT25saW5lUmVxdWVzdBomLnlleWluZy5hcGkuYXBwbGljYXRpb24uT25saW5lUmVzcG9uc2UiABJZCgZEZWxldGUSJS55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkRlbGV0ZVJlcXVlc3QaJi55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkRlbGV0ZVJlc3BvbnNlIgBCGFoWeWV5aW5nL2FwaS9hcHBsaWNhdGlvbmIGcHJvdG8z", [file_yeying_api_common_message, file_yeying_api_common_code]);

/**
 * @generated from message yeying.api.application.SearchRequest
 */
export type SearchRequest = Message<"yeying.api.application.SearchRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.SearchRequestBody body = 2;
   */
  body?: SearchRequestBody;
};

/**
 * Describes the message yeying.api.application.SearchRequest.
 * Use `create(SearchRequestSchema)` to create a new message.
 */
export const SearchRequestSchema: GenMessage<SearchRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 0);

/**
 * @generated from message yeying.api.application.SearchRequestBody
 */
export type SearchRequestBody = Message<"yeying.api.application.SearchRequestBody"> & {
  /**
   * @generated from field: yeying.api.application.SearchCondition condition = 1;
   */
  condition?: SearchCondition;

  /**
   * @generated from field: yeying.api.common.RequestPage page = 2;
   */
  page?: RequestPage;
};

/**
 * Describes the message yeying.api.application.SearchRequestBody.
 * Use `create(SearchRequestBodySchema)` to create a new message.
 */
export const SearchRequestBodySchema: GenMessage<SearchRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 1);

/**
 * @generated from message yeying.api.application.SearchCondition
 */
export type SearchCondition = Message<"yeying.api.application.SearchCondition"> & {
  /**
   * @generated from field: yeying.api.common.ApplicationCodeEnum code = 1;
   */
  code: ApplicationCodeEnum;

  /**
   * @generated from field: yeying.api.common.ApplicationStatusEnum status = 2;
   */
  status: ApplicationStatusEnum;

  /**
   * @generated from field: string owner = 3;
   */
  owner: string;
};

/**
 * Describes the message yeying.api.application.SearchCondition.
 * Use `create(SearchConditionSchema)` to create a new message.
 */
export const SearchConditionSchema: GenMessage<SearchCondition> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 2);

/**
 * @generated from message yeying.api.application.SearchResponse
 */
export type SearchResponse = Message<"yeying.api.application.SearchResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.SearchResponseBody body = 2;
   */
  body?: SearchResponseBody;
};

/**
 * Describes the message yeying.api.application.SearchResponse.
 * Use `create(SearchResponseSchema)` to create a new message.
 */
export const SearchResponseSchema: GenMessage<SearchResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 3);

/**
 * @generated from message yeying.api.application.SearchResponseBody
 */
export type SearchResponseBody = Message<"yeying.api.application.SearchResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: repeated yeying.api.application.ApplicationMetadata applications = 2;
   */
  applications: ApplicationMetadata[];

  /**
   * @generated from field: yeying.api.common.ResponsePage page = 3;
   */
  page?: ResponsePage;
};

/**
 * Describes the message yeying.api.application.SearchResponseBody.
 * Use `create(SearchResponseBodySchema)` to create a new message.
 */
export const SearchResponseBodySchema: GenMessage<SearchResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 4);

/**
 * @generated from message yeying.api.application.CreateRequest
 */
export type CreateRequest = Message<"yeying.api.application.CreateRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.CreateRequestBody body = 2;
   */
  body?: CreateRequestBody;
};

/**
 * Describes the message yeying.api.application.CreateRequest.
 * Use `create(CreateRequestSchema)` to create a new message.
 */
export const CreateRequestSchema: GenMessage<CreateRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 5);

/**
 * @generated from message yeying.api.application.CreateRequestBody
 */
export type CreateRequestBody = Message<"yeying.api.application.CreateRequestBody"> & {
  /**
   * @generated from field: yeying.api.application.ApplicationMetadata application = 1;
   */
  application?: ApplicationMetadata;
};

/**
 * Describes the message yeying.api.application.CreateRequestBody.
 * Use `create(CreateRequestBodySchema)` to create a new message.
 */
export const CreateRequestBodySchema: GenMessage<CreateRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 6);

/**
 * @generated from message yeying.api.application.CreateResponse
 */
export type CreateResponse = Message<"yeying.api.application.CreateResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.CreateResponseBody body = 2;
   */
  body?: CreateResponseBody;
};

/**
 * Describes the message yeying.api.application.CreateResponse.
 * Use `create(CreateResponseSchema)` to create a new message.
 */
export const CreateResponseSchema: GenMessage<CreateResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 7);

/**
 * @generated from message yeying.api.application.CreateResponseBody
 */
export type CreateResponseBody = Message<"yeying.api.application.CreateResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.application.CreateResponseBody.
 * Use `create(CreateResponseBodySchema)` to create a new message.
 */
export const CreateResponseBodySchema: GenMessage<CreateResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 8);

/**
 * @generated from message yeying.api.application.DetailRequest
 */
export type DetailRequest = Message<"yeying.api.application.DetailRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.DetailRequestBody body = 2;
   */
  body?: DetailRequestBody;
};

/**
 * Describes the message yeying.api.application.DetailRequest.
 * Use `create(DetailRequestSchema)` to create a new message.
 */
export const DetailRequestSchema: GenMessage<DetailRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 9);

/**
 * @generated from message yeying.api.application.DetailRequestBody
 */
export type DetailRequestBody = Message<"yeying.api.application.DetailRequestBody"> & {
  /**
   * @generated from field: string did = 1;
   */
  did: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;
};

/**
 * Describes the message yeying.api.application.DetailRequestBody.
 * Use `create(DetailRequestBodySchema)` to create a new message.
 */
export const DetailRequestBodySchema: GenMessage<DetailRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 10);

/**
 * @generated from message yeying.api.application.DetailResponse
 */
export type DetailResponse = Message<"yeying.api.application.DetailResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.DetailResponseBody body = 2;
   */
  body?: DetailResponseBody;
};

/**
 * Describes the message yeying.api.application.DetailResponse.
 * Use `create(DetailResponseSchema)` to create a new message.
 */
export const DetailResponseSchema: GenMessage<DetailResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 11);

/**
 * @generated from message yeying.api.application.DetailResponseBody
 */
export type DetailResponseBody = Message<"yeying.api.application.DetailResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: yeying.api.common.ApplicationStatusEnum appStatus = 3;
   */
  appStatus: ApplicationStatusEnum;

  /**
   * @generated from field: yeying.api.application.ApplicationMetadata application = 2;
   */
  application?: ApplicationMetadata;
};

/**
 * Describes the message yeying.api.application.DetailResponseBody.
 * Use `create(DetailResponseBodySchema)` to create a new message.
 */
export const DetailResponseBodySchema: GenMessage<DetailResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 12);

/**
 * @generated from message yeying.api.application.OfflineRequest
 */
export type OfflineRequest = Message<"yeying.api.application.OfflineRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.OfflineRequestBody body = 2;
   */
  body?: OfflineRequestBody;
};

/**
 * Describes the message yeying.api.application.OfflineRequest.
 * Use `create(OfflineRequestSchema)` to create a new message.
 */
export const OfflineRequestSchema: GenMessage<OfflineRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 13);

/**
 * @generated from message yeying.api.application.OfflineRequestBody
 */
export type OfflineRequestBody = Message<"yeying.api.application.OfflineRequestBody"> & {
  /**
   * @generated from field: string did = 1;
   */
  did: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;
};

/**
 * Describes the message yeying.api.application.OfflineRequestBody.
 * Use `create(OfflineRequestBodySchema)` to create a new message.
 */
export const OfflineRequestBodySchema: GenMessage<OfflineRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 14);

/**
 * @generated from message yeying.api.application.OfflineResponse
 */
export type OfflineResponse = Message<"yeying.api.application.OfflineResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.OfflineResponseBody body = 2;
   */
  body?: OfflineResponseBody;
};

/**
 * Describes the message yeying.api.application.OfflineResponse.
 * Use `create(OfflineResponseSchema)` to create a new message.
 */
export const OfflineResponseSchema: GenMessage<OfflineResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 15);

/**
 * @generated from message yeying.api.application.OfflineResponseBody
 */
export type OfflineResponseBody = Message<"yeying.api.application.OfflineResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.application.OfflineResponseBody.
 * Use `create(OfflineResponseBodySchema)` to create a new message.
 */
export const OfflineResponseBodySchema: GenMessage<OfflineResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 16);

/**
 * @generated from message yeying.api.application.OnlineRequest
 */
export type OnlineRequest = Message<"yeying.api.application.OnlineRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.OnlineRequestBody body = 2;
   */
  body?: OnlineRequestBody;
};

/**
 * Describes the message yeying.api.application.OnlineRequest.
 * Use `create(OnlineRequestSchema)` to create a new message.
 */
export const OnlineRequestSchema: GenMessage<OnlineRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 17);

/**
 * @generated from message yeying.api.application.OnlineRequestBody
 */
export type OnlineRequestBody = Message<"yeying.api.application.OnlineRequestBody"> & {
  /**
   * @generated from field: string did = 1;
   */
  did: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;
};

/**
 * Describes the message yeying.api.application.OnlineRequestBody.
 * Use `create(OnlineRequestBodySchema)` to create a new message.
 */
export const OnlineRequestBodySchema: GenMessage<OnlineRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 18);

/**
 * @generated from message yeying.api.application.OnlineResponse
 */
export type OnlineResponse = Message<"yeying.api.application.OnlineResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.OnlineResponseBody body = 2;
   */
  body?: OnlineResponseBody;
};

/**
 * Describes the message yeying.api.application.OnlineResponse.
 * Use `create(OnlineResponseSchema)` to create a new message.
 */
export const OnlineResponseSchema: GenMessage<OnlineResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 19);

/**
 * @generated from message yeying.api.application.OnlineResponseBody
 */
export type OnlineResponseBody = Message<"yeying.api.application.OnlineResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.application.OnlineResponseBody.
 * Use `create(OnlineResponseBodySchema)` to create a new message.
 */
export const OnlineResponseBodySchema: GenMessage<OnlineResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 20);

/**
 * @generated from message yeying.api.application.ApplicationExtend
 */
export type ApplicationExtend = Message<"yeying.api.application.ApplicationExtend"> & {
  /**
   * 审批意见 
   *
   * @generated from field: repeated yeying.api.application.ApplicationComment comments = 1;
   */
  comments: ApplicationComment[];
};

/**
 * Describes the message yeying.api.application.ApplicationExtend.
 * Use `create(ApplicationExtendSchema)` to create a new message.
 */
export const ApplicationExtendSchema: GenMessage<ApplicationExtend> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 21);

/**
 * @generated from message yeying.api.application.ApplicationComment
 */
export type ApplicationComment = Message<"yeying.api.application.ApplicationComment"> & {
  /**
   * 审批人 
   *
   * @generated from field: string auditor = 1;
   */
  auditor: string;

  /**
   * 审批意见 
   *
   * @generated from field: string comment = 2;
   */
  comment: string;

  /**
   * 是否通过 
   *
   * @generated from field: bool passed = 3;
   */
  passed: boolean;

  /**
   * 审批人签名 
   *
   * @generated from field: string signature = 4;
   */
  signature: string;
};

/**
 * Describes the message yeying.api.application.ApplicationComment.
 * Use `create(ApplicationCommentSchema)` to create a new message.
 */
export const ApplicationCommentSchema: GenMessage<ApplicationComment> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 22);

/**
 * @generated from message yeying.api.application.ApplicationMetadata
 */
export type ApplicationMetadata = Message<"yeying.api.application.ApplicationMetadata"> & {
  /**
   * 应用所有者 
   *
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * 身份所在网络 
   *
   * @generated from field: string network = 2;
   */
  network: string;

  /**
   * 身份地址 
   *
   * @generated from field: string address = 3;
   */
  address: string;

  /**
   * 应用身份 
   *
   * @generated from field: string did = 4;
   */
  did: string;

  /**
   * 应用版本 
   *
   * @generated from field: uint32 version = 5;
   */
  version: number;

  /**
   * 应用哈希 
   *
   * @generated from field: string hash = 6;
   */
  hash: string;

  /**
   * 应用名称 
   *
   * @generated from field: string name = 7;
   */
  name: string;

  /**
   * 应用编号 
   *
   * @generated from field: yeying.api.common.ApplicationCodeEnum code = 8;
   */
  code: ApplicationCodeEnum;

  /**
   * 应用描述 
   *
   * @generated from field: string description = 9;
   */
  description: string;

  /**
   * 访问路径 
   *
   * @generated from field: string location = 10;
   */
  location: string;

  /**
   * 应用依赖的服务编码，用,隔开 
   *
   * @generated from field: string serviceCodes = 11;
   */
  serviceCodes: string;

  /**
   * 应用头像 
   *
   * @generated from field: string avatar = 12;
   */
  avatar: string;

  /**
   * 应用扩展信息 
   *
   * @generated from field: string extend = 13;
   */
  extend: string;

  /**
   * 应用创建时间 
   *
   * @generated from field: string created = 14;
   */
  created: string;

  /**
   * 应用的检查点 
   *
   * @generated from field: string checkpoint = 15;
   */
  checkpoint: string;

  /**
   * 签名
   *
   * @generated from field: string signature = 16;
   */
  signature: string;
};

/**
 * Describes the message yeying.api.application.ApplicationMetadata.
 * Use `create(ApplicationMetadataSchema)` to create a new message.
 */
export const ApplicationMetadataSchema: GenMessage<ApplicationMetadata> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 23);

/**
 * @generated from message yeying.api.application.DeleteRequest
 */
export type DeleteRequest = Message<"yeying.api.application.DeleteRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.DeleteRequestBody body = 2;
   */
  body?: DeleteRequestBody;
};

/**
 * Describes the message yeying.api.application.DeleteRequest.
 * Use `create(DeleteRequestSchema)` to create a new message.
 */
export const DeleteRequestSchema: GenMessage<DeleteRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 24);

/**
 * @generated from message yeying.api.application.DeleteRequestBody
 */
export type DeleteRequestBody = Message<"yeying.api.application.DeleteRequestBody"> & {
  /**
   * @generated from field: string did = 1;
   */
  did: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;
};

/**
 * Describes the message yeying.api.application.DeleteRequestBody.
 * Use `create(DeleteRequestBodySchema)` to create a new message.
 */
export const DeleteRequestBodySchema: GenMessage<DeleteRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 25);

/**
 * @generated from message yeying.api.application.DeleteResponse
 */
export type DeleteResponse = Message<"yeying.api.application.DeleteResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.DeleteResponseBody body = 2;
   */
  body?: DeleteResponseBody;
};

/**
 * Describes the message yeying.api.application.DeleteResponse.
 * Use `create(DeleteResponseSchema)` to create a new message.
 */
export const DeleteResponseSchema: GenMessage<DeleteResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 26);

/**
 * @generated from message yeying.api.application.DeleteResponseBody
 */
export type DeleteResponseBody = Message<"yeying.api.application.DeleteResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.application.DeleteResponseBody.
 * Use `create(DeleteResponseBodySchema)` to create a new message.
 */
export const DeleteResponseBodySchema: GenMessage<DeleteResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 27);

/**
 * @generated from message yeying.api.application.AuditRequest
 */
export type AuditRequest = Message<"yeying.api.application.AuditRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.AuditRequestBody body = 2;
   */
  body?: AuditRequestBody;
};

/**
 * Describes the message yeying.api.application.AuditRequest.
 * Use `create(AuditRequestSchema)` to create a new message.
 */
export const AuditRequestSchema: GenMessage<AuditRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 28);

/**
 * @generated from message yeying.api.application.AuditRequestBody
 */
export type AuditRequestBody = Message<"yeying.api.application.AuditRequestBody"> & {
  /**
   * @generated from field: yeying.api.application.ApplicationComment comment = 1;
   */
  comment?: ApplicationComment;
};

/**
 * Describes the message yeying.api.application.AuditRequestBody.
 * Use `create(AuditRequestBodySchema)` to create a new message.
 */
export const AuditRequestBodySchema: GenMessage<AuditRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 29);

/**
 * @generated from message yeying.api.application.AuditResponse
 */
export type AuditResponse = Message<"yeying.api.application.AuditResponse"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.application.AuditResponse.
 * Use `create(AuditResponseSchema)` to create a new message.
 */
export const AuditResponseSchema: GenMessage<AuditResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 30);

/**
 * *
 * 节点自带的应用和后面发布的应用，夜莺社区提供一个节点和一组组网协议。当然其他的社团或者个人，也可以基于源代码，发布自己的节点和一组组网协议，当然
 * 也可以加入到夜莺社区的网络。
 * TODO: 一种是节点自带的应用，另一种通过节点发布的应用，需要考虑如何统一起来，做合规审计以及管理。
 *
 * @generated from service yeying.api.application.Application
 */
export const Application: GenService<{
  /**
   * 搜索应用 
   *
   * @generated from rpc yeying.api.application.Application.Search
   */
  search: {
    methodKind: "unary";
    input: typeof SearchRequestSchema;
    output: typeof SearchResponseSchema;
  },
  /**
   * 应用审计 
   *
   * @generated from rpc yeying.api.application.Application.Audit
   */
  audit: {
    methodKind: "unary";
    input: typeof AuditRequestSchema;
    output: typeof AuditResponseSchema;
  },
  /**
   * 创建应用 
   *
   * @generated from rpc yeying.api.application.Application.Create
   */
  create: {
    methodKind: "unary";
    input: typeof CreateRequestSchema;
    output: typeof CreateResponseSchema;
  },
  /**
   * 应用详情 
   *
   * @generated from rpc yeying.api.application.Application.Detail
   */
  detail: {
    methodKind: "unary";
    input: typeof DetailRequestSchema;
    output: typeof DetailResponseSchema;
  },
  /**
   * 下架应用 
   *
   * @generated from rpc yeying.api.application.Application.Offline
   */
  offline: {
    methodKind: "unary";
    input: typeof OfflineRequestSchema;
    output: typeof OfflineResponseSchema;
  },
  /**
   * 上架应用 
   *
   * @generated from rpc yeying.api.application.Application.Online
   */
  online: {
    methodKind: "unary";
    input: typeof OnlineRequestSchema;
    output: typeof OnlineResponseSchema;
  },
  /**
   * 删除应用 
   *
   * @generated from rpc yeying.api.application.Application.Delete
   */
  delete: {
    methodKind: "unary";
    input: typeof DeleteRequestSchema;
    output: typeof DeleteResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_yeying_api_application_application, 0);

