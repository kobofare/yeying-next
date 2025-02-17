// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file yeying/api/ai/ai.proto (package yeying.api.ai, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { MessageHeader, ResponseStatus } from "../common/message_pb";
import { file_yeying_api_common_message } from "../common/message_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/ai/ai.proto.
 */
export const file_yeying_api_ai_ai: GenFile = /*@__PURE__*/
  fileDesc("ChZ5ZXlpbmcvYXBpL2FpL2FpLnByb3RvEg15ZXlpbmcuYXBpLmFpImkKCUFJUmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEioKBGJvZHkYAiABKAsyHC55ZXlpbmcuYXBpLmFpLkFJUmVxdWVzdEJvZHkiHwoNQUlSZXF1ZXN0Qm9keRIOCgZpbWdVcmwYASABKAkiawoKQUlSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEisKBGJvZHkYAiABKAsyHS55ZXlpbmcuYXBpLmFpLkFJUmVzcG9uc2VCb2R5IlMKDkFJUmVzcG9uc2VCb2R5EjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzEg4KBnJlc3VsdBgCIAEoCTJDCgJBSRI9CgRDYWxsEhgueWV5aW5nLmFwaS5haS5BSVJlcXVlc3QaGS55ZXlpbmcuYXBpLmFpLkFJUmVzcG9uc2UiAEIPWg15ZXlpbmcvYXBpL2FpYgZwcm90bzM", [file_yeying_api_common_message]);

/**
 * *
 * 请求
 *
 * @generated from message yeying.api.ai.AIRequest
 */
export type AIRequest = Message<"yeying.api.ai.AIRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.ai.AIRequestBody body = 2;
   */
  body?: AIRequestBody;
};

/**
 * Describes the message yeying.api.ai.AIRequest.
 * Use `create(AIRequestSchema)` to create a new message.
 */
export const AIRequestSchema: GenMessage<AIRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_ai_ai, 0);

/**
 * @generated from message yeying.api.ai.AIRequestBody
 */
export type AIRequestBody = Message<"yeying.api.ai.AIRequestBody"> & {
  /**
   * @generated from field: string imgUrl = 1;
   */
  imgUrl: string;
};

/**
 * Describes the message yeying.api.ai.AIRequestBody.
 * Use `create(AIRequestBodySchema)` to create a new message.
 */
export const AIRequestBodySchema: GenMessage<AIRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_ai_ai, 1);

/**
 * @generated from message yeying.api.ai.AIResponse
 */
export type AIResponse = Message<"yeying.api.ai.AIResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.ai.AIResponseBody body = 2;
   */
  body?: AIResponseBody;
};

/**
 * Describes the message yeying.api.ai.AIResponse.
 * Use `create(AIResponseSchema)` to create a new message.
 */
export const AIResponseSchema: GenMessage<AIResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_ai_ai, 2);

/**
 * @generated from message yeying.api.ai.AIResponseBody
 */
export type AIResponseBody = Message<"yeying.api.ai.AIResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: string result = 2;
   */
  result: string;
};

/**
 * Describes the message yeying.api.ai.AIResponseBody.
 * Use `create(AIResponseBodySchema)` to create a new message.
 */
export const AIResponseBodySchema: GenMessage<AIResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_ai_ai, 3);

/**
 * *
 * 定义一个AI智能体
 *
 * @generated from service yeying.api.ai.AI
 */
export const AI: GenService<{
  /**
   * @generated from rpc yeying.api.ai.AI.Call
   */
  call: {
    methodKind: "unary";
    input: typeof AIRequestSchema;
    output: typeof AIResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_yeying_api_ai_ai, 0);

