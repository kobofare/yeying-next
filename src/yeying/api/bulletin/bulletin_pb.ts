// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file yeying/api/bulletin/bulletin.proto (package yeying.api.bulletin, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { MessageHeader, RequestPage, ResponsePage, ResponseStatus } from "../common/message_pb";
import { file_yeying_api_common_message } from "../common/message_pb";
import type { LanguageCodeEnum } from "../common/code_pb";
import { file_yeying_api_common_code } from "../common/code_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/bulletin/bulletin.proto.
 */
export const file_yeying_api_bulletin_bulletin: GenFile = /*@__PURE__*/
  fileDesc("CiJ5ZXlpbmcvYXBpL2J1bGxldGluL2J1bGxldGluLnByb3RvEhN5ZXlpbmcuYXBpLmJ1bGxldGluInMKC0xpc3RSZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISMgoEYm9keRgCIAEoCzIkLnlleWluZy5hcGkuYnVsbGV0aW4uTGlzdFJlcXVlc3RCb2R5IqsBCg9MaXN0UmVxdWVzdEJvZHkSMwoEY29kZRgBIAEoDjIlLnlleWluZy5hcGkuYnVsbGV0aW4uQnVsbGV0aW5Db2RlRW51bRI1CghsYW5ndWFnZRgCIAEoDjIjLnlleWluZy5hcGkuY29tbW9uLkxhbmd1YWdlQ29kZUVudW0SLAoEcGFnZRgDIAEoCzIeLnlleWluZy5hcGkuY29tbW9uLlJlcXVlc3RQYWdlInUKDExpc3RSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjMKBGJvZHkYAiABKAsyJS55ZXlpbmcuYXBpLmJ1bGxldGluLkxpc3RSZXNwb25zZUJvZHkirgEKEExpc3RSZXNwb25zZUJvZHkSMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMSOAoJc29sdXRpb25zGAIgAygLMiUueWV5aW5nLmFwaS5idWxsZXRpbi5Tb2x1dGlvbk1ldGFkYXRhEi0KBHBhZ2UYAyABKAsyHy55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVBhZ2Ui4gEKEFNvbHV0aW9uTWV0YWRhdGESEQoJcHVibGlzaGVyGAEgASgJEjUKCGxhbmd1YWdlGAIgASgOMiMueWV5aW5nLmFwaS5jb21tb24uTGFuZ3VhZ2VDb2RlRW51bRILCgN1aWQYAyABKAkSDAoEbmFtZRgEIAEoCRITCgtkZXNjcmlwdGlvbhgFIAEoCRIPCgdjcmVhdGVkGAYgASgJEjAKBWNhcmRzGAcgAygLMiEueWV5aW5nLmFwaS5idWxsZXRpbi5Tb2x1dGlvbkNhcmQSEQoJc2lnbmF0dXJlGAggASgJIj4KDFNvbHV0aW9uQ2FyZBIMCgRuYW1lGAEgASgJEg0KBXByaWNlGAIgASgJEhEKCXZhcmlhYmxlcxgDIAEoCSouChBCdWxsZXRpbkNvZGVFbnVtEhoKFkJVTExFVElOX0NPREVfU09MVVRJT04QADJZCghCdWxsZXRpbhJNCgRMaXN0EiAueWV5aW5nLmFwaS5idWxsZXRpbi5MaXN0UmVxdWVzdBohLnlleWluZy5hcGkuYnVsbGV0aW4uTGlzdFJlc3BvbnNlIgBCFVoTeWV5aW5nL2FwaS9idWxsZXRpbmIGcHJvdG8z", [file_yeying_api_common_message, file_yeying_api_common_code]);

/**
 * @generated from message yeying.api.bulletin.ListRequest
 */
export type ListRequest = Message<"yeying.api.bulletin.ListRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.bulletin.ListRequestBody body = 2;
   */
  body?: ListRequestBody;
};

/**
 * Describes the message yeying.api.bulletin.ListRequest.
 * Use `create(ListRequestSchema)` to create a new message.
 */
export const ListRequestSchema: GenMessage<ListRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_bulletin_bulletin, 0);

/**
 * @generated from message yeying.api.bulletin.ListRequestBody
 */
export type ListRequestBody = Message<"yeying.api.bulletin.ListRequestBody"> & {
  /**
   * @generated from field: yeying.api.bulletin.BulletinCodeEnum code = 1;
   */
  code: BulletinCodeEnum;

  /**
   * @generated from field: yeying.api.common.LanguageCodeEnum language = 2;
   */
  language: LanguageCodeEnum;

  /**
   * @generated from field: yeying.api.common.RequestPage page = 3;
   */
  page?: RequestPage;
};

/**
 * Describes the message yeying.api.bulletin.ListRequestBody.
 * Use `create(ListRequestBodySchema)` to create a new message.
 */
export const ListRequestBodySchema: GenMessage<ListRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_bulletin_bulletin, 1);

/**
 * @generated from message yeying.api.bulletin.ListResponse
 */
export type ListResponse = Message<"yeying.api.bulletin.ListResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.bulletin.ListResponseBody body = 2;
   */
  body?: ListResponseBody;
};

/**
 * Describes the message yeying.api.bulletin.ListResponse.
 * Use `create(ListResponseSchema)` to create a new message.
 */
export const ListResponseSchema: GenMessage<ListResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_bulletin_bulletin, 2);

/**
 * @generated from message yeying.api.bulletin.ListResponseBody
 */
export type ListResponseBody = Message<"yeying.api.bulletin.ListResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: repeated yeying.api.bulletin.SolutionMetadata solutions = 2;
   */
  solutions: SolutionMetadata[];

  /**
   * @generated from field: yeying.api.common.ResponsePage page = 3;
   */
  page?: ResponsePage;
};

/**
 * Describes the message yeying.api.bulletin.ListResponseBody.
 * Use `create(ListResponseBodySchema)` to create a new message.
 */
export const ListResponseBodySchema: GenMessage<ListResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_bulletin_bulletin, 3);

/**
 * @generated from message yeying.api.bulletin.SolutionMetadata
 */
export type SolutionMetadata = Message<"yeying.api.bulletin.SolutionMetadata"> & {
  /**
   * @generated from field: string publisher = 1;
   */
  publisher: string;

  /**
   * @generated from field: yeying.api.common.LanguageCodeEnum language = 2;
   */
  language: LanguageCodeEnum;

  /**
   * @generated from field: string uid = 3;
   */
  uid: string;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from field: string description = 5;
   */
  description: string;

  /**
   * @generated from field: string created = 6;
   */
  created: string;

  /**
   * @generated from field: repeated yeying.api.bulletin.SolutionCard cards = 7;
   */
  cards: SolutionCard[];

  /**
   * @generated from field: string signature = 8;
   */
  signature: string;
};

/**
 * Describes the message yeying.api.bulletin.SolutionMetadata.
 * Use `create(SolutionMetadataSchema)` to create a new message.
 */
export const SolutionMetadataSchema: GenMessage<SolutionMetadata> = /*@__PURE__*/
  messageDesc(file_yeying_api_bulletin_bulletin, 4);

/**
 * @generated from message yeying.api.bulletin.SolutionCard
 */
export type SolutionCard = Message<"yeying.api.bulletin.SolutionCard"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string price = 2;
   */
  price: string;

  /**
   * @generated from field: string variables = 3;
   */
  variables: string;
};

/**
 * Describes the message yeying.api.bulletin.SolutionCard.
 * Use `create(SolutionCardSchema)` to create a new message.
 */
export const SolutionCardSchema: GenMessage<SolutionCard> = /*@__PURE__*/
  messageDesc(file_yeying_api_bulletin_bulletin, 5);

/**
 * @generated from enum yeying.api.bulletin.BulletinCodeEnum
 */
export enum BulletinCodeEnum {
  /**
   * @generated from enum value: BULLETIN_CODE_SOLUTION = 0;
   */
  BULLETIN_CODE_SOLUTION = 0,
}

/**
 * Describes the enum yeying.api.bulletin.BulletinCodeEnum.
 */
export const BulletinCodeEnumSchema: GenEnum<BulletinCodeEnum> = /*@__PURE__*/
  enumDesc(file_yeying_api_bulletin_bulletin, 0);

/**
 * @generated from service yeying.api.bulletin.Bulletin
 */
export const Bulletin: GenService<{
  /**
   * @generated from rpc yeying.api.bulletin.Bulletin.List
   */
  list: {
    methodKind: "unary";
    input: typeof ListRequestSchema;
    output: typeof ListResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_yeying_api_bulletin_bulletin, 0);

