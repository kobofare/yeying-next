// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file yeying/api/asset/asset.proto (package yeying.api.asset, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { MessageHeader, RequestPage, ResponseStatus } from "../common/message_pb";
import { file_yeying_api_common_message } from "../common/message_pb";
import type { DigitalFormatEnum } from "../common/code_pb";
import { file_yeying_api_common_code } from "../common/code_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/asset/asset.proto.
 */
export const file_yeying_api_asset_asset: GenFile = /*@__PURE__*/
  fileDesc("Chx5ZXlpbmcvYXBpL2Fzc2V0L2Fzc2V0LnByb3RvEhB5ZXlpbmcuYXBpLmFzc2V0InQKDVNlYXJjaFJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchIxCgRib2R5GAIgASgLMiMueWV5aW5nLmFwaS5hc3NldC5TZWFyY2hSZXF1ZXN0Qm9keSJ3ChFTZWFyY2hSZXF1ZXN0Qm9keRI0Cgljb25kaXRpb24YASABKAsyIS55ZXlpbmcuYXBpLmFzc2V0LlNlYXJjaENvbmRpdGlvbhIsCgRwYWdlGAIgASgLMh4ueWV5aW5nLmFwaS5jb21tb24uUmVxdWVzdFBhZ2UiawoPU2VhcmNoQ29uZGl0aW9uEjQKBmZvcm1hdBgBIAEoDjIkLnlleWluZy5hcGkuY29tbW9uLkRpZ2l0YWxGb3JtYXRFbnVtEhMKC2NvbnRlbnRIYXNoGAIgASgJEg0KBXRyYXNoGAMgASgIInYKDlNlYXJjaFJlc3BvbnNlEjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISMgoEYm9keRgCIAEoCzIkLnlleWluZy5hcGkuYXNzZXQuU2VhcmNoUmVzcG9uc2VCb2R5IngKElNlYXJjaFJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cxIvCgZhc3NldHMYAiADKAsyHy55ZXlpbmcuYXBpLmFzc2V0LkFzc2V0TWV0YWRhdGEicAoLU2lnblJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchIvCgRib2R5GAIgASgLMiEueWV5aW5nLmFwaS5hc3NldC5TaWduUmVxdWVzdEJvZHkiQQoPU2lnblJlcXVlc3RCb2R5Ei4KBWFzc2V0GAEgASgLMh8ueWV5aW5nLmFwaS5hc3NldC5Bc3NldE1ldGFkYXRhInIKDFNpZ25SZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjAKBGJvZHkYAiABKAsyIi55ZXlpbmcuYXBpLmFzc2V0LlNpZ25SZXNwb25zZUJvZHkiRQoQU2lnblJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cyJ2Cg5WZXJzaW9uUmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjIKBGJvZHkYAiABKAsyJC55ZXlpbmcuYXBpLmFzc2V0LlZlcnNpb25SZXF1ZXN0Qm9keSJPChJWZXJzaW9uUmVxdWVzdEJvZHkSCwoDdWlkGAEgASgJEiwKBHBhZ2UYAiABKAsyHi55ZXlpbmcuYXBpLmNvbW1vbi5SZXF1ZXN0UGFnZSJ4Cg9WZXJzaW9uUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchIzCgRib2R5GAIgASgLMiUueWV5aW5nLmFwaS5hc3NldC5WZXJzaW9uUmVzcG9uc2VCb2R5InkKE1ZlcnNpb25SZXNwb25zZUJvZHkSMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMSLwoGYXNzZXRzGAIgAygLMh8ueWV5aW5nLmFwaS5hc3NldC5Bc3NldE1ldGFkYXRhInQKDURldGFpbFJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchIxCgRib2R5GAIgASgLMiMueWV5aW5nLmFwaS5hc3NldC5EZXRhaWxSZXF1ZXN0Qm9keSJAChFEZXRhaWxSZXF1ZXN0Qm9keRILCgN1aWQYASABKAkSDwoHdmVyc2lvbhgCIAEoDRINCgV0cmFzaBgDIAEoCCJ2Cg5EZXRhaWxSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjIKBGJvZHkYAiABKAsyJC55ZXlpbmcuYXBpLmFzc2V0LkRldGFpbFJlc3BvbnNlQm9keSJ3ChJEZXRhaWxSZXNwb25zZUJvZHkSMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMSLgoFYXNzZXQYAiABKAsyHy55ZXlpbmcuYXBpLmFzc2V0LkFzc2V0TWV0YWRhdGEidAoNUmVtb3ZlUmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjEKBGJvZHkYAiABKAsyIy55ZXlpbmcuYXBpLmFzc2V0LlJlbW92ZVJlcXVlc3RCb2R5Ij8KEVJlbW92ZVJlcXVlc3RCb2R5EgsKA3VpZBgBIAEoCRIPCgd2ZXJzaW9uGAIgASgNEgwKBGhhcmQYAyABKAgidgoOUmVtb3ZlUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchIyCgRib2R5GAIgASgLMiQueWV5aW5nLmFwaS5hc3NldC5SZW1vdmVSZXNwb25zZUJvZHkiRwoSUmVtb3ZlUmVzcG9uc2VCb2R5EjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzIjoKDUNodW5rTWV0YWRhdGESDQoFaW5kZXgYASABKA0SDAoEaGFzaBgCIAEoCRIMCgRzaXplGAMgASgEIpsDCg1Bc3NldE1ldGFkYXRhEg0KBW93bmVyGAEgASgJEg8KB3ZlcnNpb24YAiABKA0SCwoDdWlkGAMgASgJEgwKBG5hbWUYBCABKAkSEgoKcGFyZW50SGFzaBgFIAEoCRITCgtjb250ZW50SGFzaBgGIAEoCRISCgptZXJnZWRIYXNoGAcgASgJEhMKC2Rlc2NyaXB0aW9uGAggASgJEjQKBmZvcm1hdBgJIAEoDjIkLnlleWluZy5hcGkuY29tbW9uLkRpZ2l0YWxGb3JtYXRFbnVtEgwKBHNpemUYCiABKAQSDwoHY3JlYXRlZBgLIAEoCRISCgpjaGVja3BvaW50GAwgASgJEg8KB2RlbGV0ZWQYDSABKAkSDQoFdG90YWwYDiABKA0SDQoFYmxvY2sYDyABKA0SEQoJZW5jcnlwdGVkGBAgASgIEg4KBmV4dGVuZBgRIAEoCRIvCgZjaHVua3MYEiADKAsyHy55ZXlpbmcuYXBpLmFzc2V0LkNodW5rTWV0YWRhdGESEQoJc2lnbmF0dXJlGBMgASgJMo8DCgVBc3NldBJNCgZTZWFyY2gSHy55ZXlpbmcuYXBpLmFzc2V0LlNlYXJjaFJlcXVlc3QaIC55ZXlpbmcuYXBpLmFzc2V0LlNlYXJjaFJlc3BvbnNlIgASRwoEU2lnbhIdLnlleWluZy5hcGkuYXNzZXQuU2lnblJlcXVlc3QaHi55ZXlpbmcuYXBpLmFzc2V0LlNpZ25SZXNwb25zZSIAElAKB1ZlcnNpb24SIC55ZXlpbmcuYXBpLmFzc2V0LlZlcnNpb25SZXF1ZXN0GiEueWV5aW5nLmFwaS5hc3NldC5WZXJzaW9uUmVzcG9uc2UiABJNCgZEZXRhaWwSHy55ZXlpbmcuYXBpLmFzc2V0LkRldGFpbFJlcXVlc3QaIC55ZXlpbmcuYXBpLmFzc2V0LkRldGFpbFJlc3BvbnNlIgASTQoGUmVtb3ZlEh8ueWV5aW5nLmFwaS5hc3NldC5SZW1vdmVSZXF1ZXN0GiAueWV5aW5nLmFwaS5hc3NldC5SZW1vdmVSZXNwb25zZSIAQhJaEHlleWluZy9hcGkvYXNzZXRiBnByb3RvMw", [file_yeying_api_common_message, file_yeying_api_common_code]);

/**
 * @generated from message yeying.api.asset.SearchRequest
 */
export type SearchRequest = Message<"yeying.api.asset.SearchRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.SearchRequestBody body = 2;
   */
  body?: SearchRequestBody;
};

/**
 * Describes the message yeying.api.asset.SearchRequest.
 * Use `create(SearchRequestSchema)` to create a new message.
 */
export const SearchRequestSchema: GenMessage<SearchRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 0);

/**
 * @generated from message yeying.api.asset.SearchRequestBody
 */
export type SearchRequestBody = Message<"yeying.api.asset.SearchRequestBody"> & {
  /**
   * @generated from field: yeying.api.asset.SearchCondition condition = 1;
   */
  condition?: SearchCondition;

  /**
   * @generated from field: yeying.api.common.RequestPage page = 2;
   */
  page?: RequestPage;
};

/**
 * Describes the message yeying.api.asset.SearchRequestBody.
 * Use `create(SearchRequestBodySchema)` to create a new message.
 */
export const SearchRequestBodySchema: GenMessage<SearchRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 1);

/**
 * @generated from message yeying.api.asset.SearchCondition
 */
export type SearchCondition = Message<"yeying.api.asset.SearchCondition"> & {
  /**
   * 内容格式
   *
   * @generated from field: yeying.api.common.DigitalFormatEnum format = 1;
   */
  format: DigitalFormatEnum;

  /**
   * 内容哈希值
   *
   * @generated from field: string contentHash = 2;
   */
  contentHash: string;

  /**
   * 回收站里搜索
   *
   * @generated from field: bool trash = 3;
   */
  trash: boolean;
};

/**
 * Describes the message yeying.api.asset.SearchCondition.
 * Use `create(SearchConditionSchema)` to create a new message.
 */
export const SearchConditionSchema: GenMessage<SearchCondition> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 2);

/**
 * @generated from message yeying.api.asset.SearchResponse
 */
export type SearchResponse = Message<"yeying.api.asset.SearchResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.SearchResponseBody body = 2;
   */
  body?: SearchResponseBody;
};

/**
 * Describes the message yeying.api.asset.SearchResponse.
 * Use `create(SearchResponseSchema)` to create a new message.
 */
export const SearchResponseSchema: GenMessage<SearchResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 3);

/**
 * @generated from message yeying.api.asset.SearchResponseBody
 */
export type SearchResponseBody = Message<"yeying.api.asset.SearchResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: repeated yeying.api.asset.AssetMetadata assets = 2;
   */
  assets: AssetMetadata[];
};

/**
 * Describes the message yeying.api.asset.SearchResponseBody.
 * Use `create(SearchResponseBodySchema)` to create a new message.
 */
export const SearchResponseBodySchema: GenMessage<SearchResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 4);

/**
 * @generated from message yeying.api.asset.SignRequest
 */
export type SignRequest = Message<"yeying.api.asset.SignRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.SignRequestBody body = 2;
   */
  body?: SignRequestBody;
};

/**
 * Describes the message yeying.api.asset.SignRequest.
 * Use `create(SignRequestSchema)` to create a new message.
 */
export const SignRequestSchema: GenMessage<SignRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 5);

/**
 * 版本统一由后端服务器来生成或者变更，和仓库签约的资产版本，必须是最新的版本号
 *
 * @generated from message yeying.api.asset.SignRequestBody
 */
export type SignRequestBody = Message<"yeying.api.asset.SignRequestBody"> & {
  /**
   * 资产信息
   *
   * @generated from field: yeying.api.asset.AssetMetadata asset = 1;
   */
  asset?: AssetMetadata;
};

/**
 * Describes the message yeying.api.asset.SignRequestBody.
 * Use `create(SignRequestBodySchema)` to create a new message.
 */
export const SignRequestBodySchema: GenMessage<SignRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 6);

/**
 * @generated from message yeying.api.asset.SignResponse
 */
export type SignResponse = Message<"yeying.api.asset.SignResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.SignResponseBody body = 2;
   */
  body?: SignResponseBody;
};

/**
 * Describes the message yeying.api.asset.SignResponse.
 * Use `create(SignResponseSchema)` to create a new message.
 */
export const SignResponseSchema: GenMessage<SignResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 7);

/**
 * @generated from message yeying.api.asset.SignResponseBody
 */
export type SignResponseBody = Message<"yeying.api.asset.SignResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.asset.SignResponseBody.
 * Use `create(SignResponseBodySchema)` to create a new message.
 */
export const SignResponseBodySchema: GenMessage<SignResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 8);

/**
 * @generated from message yeying.api.asset.VersionRequest
 */
export type VersionRequest = Message<"yeying.api.asset.VersionRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.VersionRequestBody body = 2;
   */
  body?: VersionRequestBody;
};

/**
 * Describes the message yeying.api.asset.VersionRequest.
 * Use `create(VersionRequestSchema)` to create a new message.
 */
export const VersionRequestSchema: GenMessage<VersionRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 9);

/**
 * @generated from message yeying.api.asset.VersionRequestBody
 */
export type VersionRequestBody = Message<"yeying.api.asset.VersionRequestBody"> & {
  /**
   * 资产ID
   *
   * @generated from field: string uid = 1;
   */
  uid: string;

  /**
   * @generated from field: yeying.api.common.RequestPage page = 2;
   */
  page?: RequestPage;
};

/**
 * Describes the message yeying.api.asset.VersionRequestBody.
 * Use `create(VersionRequestBodySchema)` to create a new message.
 */
export const VersionRequestBodySchema: GenMessage<VersionRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 10);

/**
 * @generated from message yeying.api.asset.VersionResponse
 */
export type VersionResponse = Message<"yeying.api.asset.VersionResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.VersionResponseBody body = 2;
   */
  body?: VersionResponseBody;
};

/**
 * Describes the message yeying.api.asset.VersionResponse.
 * Use `create(VersionResponseSchema)` to create a new message.
 */
export const VersionResponseSchema: GenMessage<VersionResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 11);

/**
 * @generated from message yeying.api.asset.VersionResponseBody
 */
export type VersionResponseBody = Message<"yeying.api.asset.VersionResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * 返回的资产按照版本从大到小排列
   *
   * @generated from field: repeated yeying.api.asset.AssetMetadata assets = 2;
   */
  assets: AssetMetadata[];
};

/**
 * Describes the message yeying.api.asset.VersionResponseBody.
 * Use `create(VersionResponseBodySchema)` to create a new message.
 */
export const VersionResponseBodySchema: GenMessage<VersionResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 12);

/**
 * @generated from message yeying.api.asset.DetailRequest
 */
export type DetailRequest = Message<"yeying.api.asset.DetailRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.DetailRequestBody body = 2;
   */
  body?: DetailRequestBody;
};

/**
 * Describes the message yeying.api.asset.DetailRequest.
 * Use `create(DetailRequestSchema)` to create a new message.
 */
export const DetailRequestSchema: GenMessage<DetailRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 13);

/**
 * @generated from message yeying.api.asset.DetailRequestBody
 */
export type DetailRequestBody = Message<"yeying.api.asset.DetailRequestBody"> & {
  /**
   * 资产哈希值
   *
   * @generated from field: string uid = 1;
   */
  uid: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;

  /**
   * @generated from field: bool trash = 3;
   */
  trash: boolean;
};

/**
 * Describes the message yeying.api.asset.DetailRequestBody.
 * Use `create(DetailRequestBodySchema)` to create a new message.
 */
export const DetailRequestBodySchema: GenMessage<DetailRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 14);

/**
 * @generated from message yeying.api.asset.DetailResponse
 */
export type DetailResponse = Message<"yeying.api.asset.DetailResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.DetailResponseBody body = 2;
   */
  body?: DetailResponseBody;
};

/**
 * Describes the message yeying.api.asset.DetailResponse.
 * Use `create(DetailResponseSchema)` to create a new message.
 */
export const DetailResponseSchema: GenMessage<DetailResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 15);

/**
 * @generated from message yeying.api.asset.DetailResponseBody
 */
export type DetailResponseBody = Message<"yeying.api.asset.DetailResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: yeying.api.asset.AssetMetadata asset = 2;
   */
  asset?: AssetMetadata;
};

/**
 * Describes the message yeying.api.asset.DetailResponseBody.
 * Use `create(DetailResponseBodySchema)` to create a new message.
 */
export const DetailResponseBodySchema: GenMessage<DetailResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 16);

/**
 * @generated from message yeying.api.asset.RemoveRequest
 */
export type RemoveRequest = Message<"yeying.api.asset.RemoveRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.RemoveRequestBody body = 2;
   */
  body?: RemoveRequestBody;
};

/**
 * Describes the message yeying.api.asset.RemoveRequest.
 * Use `create(RemoveRequestSchema)` to create a new message.
 */
export const RemoveRequestSchema: GenMessage<RemoveRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 17);

/**
 * @generated from message yeying.api.asset.RemoveRequestBody
 */
export type RemoveRequestBody = Message<"yeying.api.asset.RemoveRequestBody"> & {
  /**
   * @generated from field: string uid = 1;
   */
  uid: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;

  /**
   * @generated from field: bool hard = 3;
   */
  hard: boolean;
};

/**
 * Describes the message yeying.api.asset.RemoveRequestBody.
 * Use `create(RemoveRequestBodySchema)` to create a new message.
 */
export const RemoveRequestBodySchema: GenMessage<RemoveRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 18);

/**
 * @generated from message yeying.api.asset.RemoveResponse
 */
export type RemoveResponse = Message<"yeying.api.asset.RemoveResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.RemoveResponseBody body = 2;
   */
  body?: RemoveResponseBody;
};

/**
 * Describes the message yeying.api.asset.RemoveResponse.
 * Use `create(RemoveResponseSchema)` to create a new message.
 */
export const RemoveResponseSchema: GenMessage<RemoveResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 19);

/**
 * @generated from message yeying.api.asset.RemoveResponseBody
 */
export type RemoveResponseBody = Message<"yeying.api.asset.RemoveResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.asset.RemoveResponseBody.
 * Use `create(RemoveResponseBodySchema)` to create a new message.
 */
export const RemoveResponseBodySchema: GenMessage<RemoveResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 20);

/**
 * 资产块信息
 *
 * @generated from message yeying.api.asset.ChunkMetadata
 */
export type ChunkMetadata = Message<"yeying.api.asset.ChunkMetadata"> & {
  /**
   * 块在资产中的索引
   *
   * @generated from field: uint32 index = 1;
   */
  index: number;

  /**
   * 资产块哈希值，可能是加密后的哈希值，也可能是明文的哈希值，同一个资产种，不同的两块哈希值可能一样
   *
   * @generated from field: string hash = 2;
   */
  hash: string;

  /**
   * 资产块大小，可能是密文块的大小，也可能是明文块的大小
   *
   * @generated from field: uint64 size = 3;
   */
  size: bigint;
};

/**
 * Describes the message yeying.api.asset.ChunkMetadata.
 * Use `create(ChunkMetadataSchema)` to create a new message.
 */
export const ChunkMetadataSchema: GenMessage<ChunkMetadata> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 21);

/**
 * 资产定义
 *
 * @generated from message yeying.api.asset.AssetMetadata
 */
export type AssetMetadata = Message<"yeying.api.asset.AssetMetadata"> & {
  /**
   * 资产所有者
   *
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * 资产版本
   *
   * @generated from field: uint32 version = 2;
   */
  version: number;

  /**
   * 资产唯一ID
   *
   * @generated from field: string uid = 3;
   */
  uid: string;

  /**
   * 资产名称
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * 上一个版本的资产内容哈希值
   *
   * @generated from field: string parentHash = 5;
   */
  parentHash: string;

  /**
   * 资产内容哈希值
   *
   * @generated from field: string contentHash = 6;
   */
  contentHash: string;

  /**
   * 资产块哈希值合并后计算的哈希值，验证数据一致性，如果资产内容小于块的大小
   *
   * @generated from field: string mergedHash = 7;
   */
  mergedHash: string;

  /**
   * 资产描述
   *
   * @generated from field: string description = 8;
   */
  description: string;

  /**
   * 资产类型
   *
   * @generated from field: yeying.api.common.DigitalFormatEnum format = 9;
   */
  format: DigitalFormatEnum;

  /**
   * 明文资产的大小
   *
   * @generated from field: uint64 size = 10;
   */
  size: bigint;

  /**
   * 资产创建时间
   *
   * @generated from field: string created = 11;
   */
  created: string;

  /**
   * 资产更新时间点
   *
   * @generated from field: string checkpoint = 12;
   */
  checkpoint: string;

  /**
   * 资产删除时间
   *
   * @generated from field: string deleted = 13;
   */
  deleted: string;

  /**
   * 资产内容分成多少块
   *
   * @generated from field: uint32 total = 14;
   */
  total: number;

  /**
   * 资产块的大小
   *
   * @generated from field: uint32 block = 15;
   */
  block: number;

  /**
   * 是否加密
   *
   * @generated from field: bool encrypted = 16;
   */
  encrypted: boolean;

  /**
   * 资产扩展信息
   *
   * @generated from field: string extend = 17;
   */
  extend: string;

  /**
   * 资产块信息
   *
   * @generated from field: repeated yeying.api.asset.ChunkMetadata chunks = 18;
   */
  chunks: ChunkMetadata[];

  /**
   * 资产元信息的签名
   *
   * @generated from field: string signature = 19;
   */
  signature: string;
};

/**
 * Describes the message yeying.api.asset.AssetMetadata.
 * Use `create(AssetMetadataSchema)` to create a new message.
 */
export const AssetMetadataSchema: GenMessage<AssetMetadata> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 22);

/**
 * *
 *
 * 开放的分散式仓库网络的接口设计，参考了现实世界中的仓库，逻辑如下：
 * 1、数字资产有两个标识，一个是数字资产的身份标识，可以是分布式数字身份，也可以是用户自定义的身份ID，另一个是数字资产内容的哈希值；
 * 2、数字资产入库，发送到指定存储网络中的节点，可以指定副本数量，一方面保证内容不会因为单个节点故障而丢失，另外也保证内容的可访问性；
 * 3、存储复用，如果两份资产哈希值一样，分两种情况来看，如果资产的所有者一样，则仓库会主动告知身份持有者存在重复，如果资产的所有者不同，会增加引用；
 * 4、授权数字资产，所有者和使用者立交易关系，确保使用者根据指定的策略访问数据，仓库会统计数字资产的使用情况，比如统计内容取（浏览）的次数评估内容热度
 * ，或者统计内容存的次数（收藏）评估内容质量，目的是更好的分配存储资源；
 *
 * 分散式存储网络的使用场景：
 * 1、创作场景，知识产权证明
 * 2、代码包分发场景，比如软件包，模型包等
 * 3、数字资产，类似nft等
 *
 * @generated from service yeying.api.asset.Asset
 */
export const Asset: GenService<{
  /**
   * *
   * 检索数字内容，基于数字内容的元信息检索，比如哈希值、时间、类型、名称等, 如果什么条件都不传入，则按照默认的排序顺序，返回第一个10条记录。
   *
   * @generated from rpc yeying.api.asset.Asset.Search
   */
  search: {
    methodKind: "unary";
    input: typeof SearchRequestSchema;
    output: typeof SearchResponseSchema;
  },
  /**
   * *
   * 以事务的形式和存储供应商签订协议并入库，当所有资产块入库成功后，资产的信息发送到后端服务签字确认，涵盖了新的资产和新的版本入库；
   * 1、根据规则，自动生成新的版本，资产身份不变，但是资产内容的哈希值会变
   *
   * @generated from rpc yeying.api.asset.Asset.Sign
   */
  sign: {
    methodKind: "unary";
    input: typeof SignRequestSchema;
    output: typeof SignResponseSchema;
  },
  /**
   * *
   * 查看某个资产的版本
   *
   * @generated from rpc yeying.api.asset.Asset.Version
   */
  version: {
    methodKind: "unary";
    input: typeof VersionRequestSchema;
    output: typeof VersionResponseSchema;
  },
  /**
   * *
   * 获得资产详细信息，提供该接口是为了更灵活处理资产信息，资产信息的复杂主要是几个方面：
   * 1、资产分块，资产的块信息可能会很大
   * 2、多版本，资产描述信息也会很大
   * 3、分散存储，如果资产过大，可能会被存储到不同的供应商
   *
   * @generated from rpc yeying.api.asset.Asset.Detail
   */
  detail: {
    methodKind: "unary";
    input: typeof DetailRequestSchema;
    output: typeof DetailResponseSchema;
  },
  /**
   * *
   * 从当前仓储网络移除掉数字内容；
   *
   * @generated from rpc yeying.api.asset.Asset.Remove
   */
  remove: {
    methodKind: "unary";
    input: typeof RemoveRequestSchema;
    output: typeof RemoveResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_yeying_api_asset_asset, 0);

