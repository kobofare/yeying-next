// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file yeying/api/mail/mail.proto (package yeying.api.mail, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { MessageHeader, ResponseStatus } from "../common/message_pb";
import { file_yeying_api_common_message } from "../common/message_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/mail/mail.proto.
 */
export const file_yeying_api_mail_mail: GenFile = /*@__PURE__*/
  fileDesc("Chp5ZXlpbmcvYXBpL21haWwvbWFpbC5wcm90bxIPeWV5aW5nLmFwaS5tYWlsIm8KC1NlbmRSZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISLgoEYm9keRgCIAEoCzIgLnlleWluZy5hcGkubWFpbC5TZW5kUmVxdWVzdEJvZHkiIQoPU2VuZFJlcXVlc3RCb2R5Eg4KBnRvTWFpbBgBIAEoCSJxCgxTZW5kUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchIvCgRib2R5GAIgASgLMiEueWV5aW5nLmFwaS5tYWlsLlNlbmRSZXNwb25zZUJvZHkiRQoQU2VuZFJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cyJzCg1WZXJpZnlSZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISMAoEYm9keRgCIAEoCzIiLnlleWluZy5hcGkubWFpbC5WZXJpZnlSZXF1ZXN0Qm9keSIxChFWZXJpZnlSZXF1ZXN0Qm9keRIOCgZ0b01haWwYASABKAkSDAoEY29kZRgCIAEoCSJ1Cg5WZXJpZnlSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjEKBGJvZHkYAiABKAsyIy55ZXlpbmcuYXBpLm1haWwuVmVyaWZ5UmVzcG9uc2VCb2R5IkcKElZlcmlmeVJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1czKaAQoETWFpbBJFCgRTZW5kEhwueWV5aW5nLmFwaS5tYWlsLlNlbmRSZXF1ZXN0Gh0ueWV5aW5nLmFwaS5tYWlsLlNlbmRSZXNwb25zZSIAEksKBlZlcmlmeRIeLnlleWluZy5hcGkubWFpbC5WZXJpZnlSZXF1ZXN0Gh8ueWV5aW5nLmFwaS5tYWlsLlZlcmlmeVJlc3BvbnNlIgBCEVoPeWV5aW5nL2FwaS9tYWlsYgZwcm90bzM", [file_yeying_api_common_message]);

/**
 * *
 * 邮件请求
 *
 * @generated from message yeying.api.mail.SendRequest
 */
export type SendRequest = Message<"yeying.api.mail.SendRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.mail.SendRequestBody body = 2;
   */
  body?: SendRequestBody;
};

/**
 * Describes the message yeying.api.mail.SendRequest.
 * Use `create(SendRequestSchema)` to create a new message.
 */
export const SendRequestSchema: GenMessage<SendRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_mail_mail, 0);

/**
 * @generated from message yeying.api.mail.SendRequestBody
 */
export type SendRequestBody = Message<"yeying.api.mail.SendRequestBody"> & {
  /**
   * 收件箱
   *
   * @generated from field: string toMail = 1;
   */
  toMail: string;
};

/**
 * Describes the message yeying.api.mail.SendRequestBody.
 * Use `create(SendRequestBodySchema)` to create a new message.
 */
export const SendRequestBodySchema: GenMessage<SendRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_mail_mail, 1);

/**
 * *
 * 邮件相应
 *
 * @generated from message yeying.api.mail.SendResponse
 */
export type SendResponse = Message<"yeying.api.mail.SendResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.mail.SendResponseBody body = 2;
   */
  body?: SendResponseBody;
};

/**
 * Describes the message yeying.api.mail.SendResponse.
 * Use `create(SendResponseSchema)` to create a new message.
 */
export const SendResponseSchema: GenMessage<SendResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_mail_mail, 2);

/**
 * @generated from message yeying.api.mail.SendResponseBody
 */
export type SendResponseBody = Message<"yeying.api.mail.SendResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.mail.SendResponseBody.
 * Use `create(SendResponseBodySchema)` to create a new message.
 */
export const SendResponseBodySchema: GenMessage<SendResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_mail_mail, 3);

/**
 * *
 * 验证码验证请求体
 *
 * @generated from message yeying.api.mail.VerifyRequest
 */
export type VerifyRequest = Message<"yeying.api.mail.VerifyRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.mail.VerifyRequestBody body = 2;
   */
  body?: VerifyRequestBody;
};

/**
 * Describes the message yeying.api.mail.VerifyRequest.
 * Use `create(VerifyRequestSchema)` to create a new message.
 */
export const VerifyRequestSchema: GenMessage<VerifyRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_mail_mail, 4);

/**
 * @generated from message yeying.api.mail.VerifyRequestBody
 */
export type VerifyRequestBody = Message<"yeying.api.mail.VerifyRequestBody"> & {
  /**
   * 收件箱
   *
   * @generated from field: string toMail = 1;
   */
  toMail: string;

  /**
   * @generated from field: string code = 2;
   */
  code: string;
};

/**
 * Describes the message yeying.api.mail.VerifyRequestBody.
 * Use `create(VerifyRequestBodySchema)` to create a new message.
 */
export const VerifyRequestBodySchema: GenMessage<VerifyRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_mail_mail, 5);

/**
 * *
 * 验证码验证响应体
 *
 * @generated from message yeying.api.mail.VerifyResponse
 */
export type VerifyResponse = Message<"yeying.api.mail.VerifyResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.mail.VerifyResponseBody body = 2;
   */
  body?: VerifyResponseBody;
};

/**
 * Describes the message yeying.api.mail.VerifyResponse.
 * Use `create(VerifyResponseSchema)` to create a new message.
 */
export const VerifyResponseSchema: GenMessage<VerifyResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_mail_mail, 6);

/**
 * @generated from message yeying.api.mail.VerifyResponseBody
 */
export type VerifyResponseBody = Message<"yeying.api.mail.VerifyResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.mail.VerifyResponseBody.
 * Use `create(VerifyResponseBodySchema)` to create a new message.
 */
export const VerifyResponseBodySchema: GenMessage<VerifyResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_mail_mail, 7);

/**
 * *
 * 定义一个邮件服务
 *
 * @generated from service yeying.api.mail.Mail
 */
export const Mail: GenService<{
  /**
   * @generated from rpc yeying.api.mail.Mail.Send
   */
  send: {
    methodKind: "unary";
    input: typeof SendRequestSchema;
    output: typeof SendResponseSchema;
  },
  /**
   * @generated from rpc yeying.api.mail.Mail.Verify
   */
  verify: {
    methodKind: "unary";
    input: typeof VerifyRequestSchema;
    output: typeof VerifyResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_yeying_api_mail_mail, 0);

