import code_pkg from '../yeying/api/common/code_pb.cjs'

const {
  AuthenticateTypeEnum,
  StreamDataTagEnum,
  CategoryCodeEnum,
  ServiceCodeEnum,
  ApiCodeEnum,
  AccountCodeEnum,
  CipherTypeEnum,
  ApplicationCodeEnum,
  DigitalFormatEnum
} = code_pkg

export function getAppIdentityCode() {
  return ApplicationCodeEnum.APPLICATION_CODE_IDENTITY
}

export function getServiceMessageBoxCode() {
  return ServiceCodeEnum.SERVICE_CODE_MESSAGEBOX
}

export function getServiceNodeCode() {
  return ServiceCodeEnum.SERVICE_CODE_NODE
}

export function getServiceAgentCode() {
  return ServiceCodeEnum.SERVICE_CODE_AGENT
}

export function getServiceStoreCode() {
  return ServiceCodeEnum.SERVICE_CODE_STORE
}

export function getStreamDataTagHead(tag) {
  return StreamDataTagEnum.STREAM_DATA_TAG_HEAD
}

export function getStreamDataTagBody(tag) {
  return StreamDataTagEnum.STREAM_DATA_TAG_BODY
}

export function getStreamDataTagTail(tag) {
  return StreamDataTagEnum.STREAM_DATA_TAG_TAIL
}

export function convertDigitalFormatFrom(str) {
  if (str === undefined) {
    return undefined
  }

  const value = DigitalFormatEnum[str.toUpperCase()]
  return value === DigitalFormatEnum.DIGITAL_FORMAT_UNKNOWN ? undefined : value
}

export function listDigitalFormat() {
  return Object.keys(DigitalFormatEnum).filter(d => DigitalFormatEnum[d] > 0)
}

export function convertDigitalFormatTo(digitalFormat) {
  if (digitalFormat === undefined || digitalFormat === DigitalFormatEnum.DIGITAL_FORMAT_UNKNOWN) {
    return undefined
  }

  return Object.keys(DigitalFormatEnum).find(s => DigitalFormatEnum[s] === digitalFormat)
}

export function fromStrToAuthenticateType(str) {
  if (str === undefined) {
    return undefined
  }
  const value = AuthenticateTypeEnum[str.toUpperCase()]
  return value === AuthenticateTypeEnum.AUTHENTICATE_TYPE_UNKNOWN ? undefined : value
}

export function convertAuthenticateTypeTo(authenticateType) {
  if (authenticateType === undefined || authenticateType === AuthenticateTypeEnum.AUTHENTICATE_TYPE_UNKNOWN) {
    return undefined
  }

  return Object.keys(AuthenticateTypeEnum).find(s => AuthenticateTypeEnum[s] === authenticateType)
}


export function convertCategoryCodeFrom(str) {
  if (str === undefined) {
    return undefined
  }
  const value = CategoryCodeEnum[str]
  return value === CategoryCodeEnum.CATEGORY_CODE_UNKNOWN ? undefined : value
}

export function listCategoryCode() {
  return Object.keys(CategoryCodeEnum).filter(s => CategoryCodeEnum[s] > 0)
}

export function convertCategoryCodeTo(category) {
  if (category === undefined || category === CategoryCodeEnum.CATEGORY_CODE_UNKNOWN) {
    return undefined
  }

  return Object.keys(CategoryCodeEnum).find(s => CategoryCodeEnum[s] === category)
}

export function convertServiceCodeFrom(str) {
  if (str === undefined) {
    return undefined
  }
  const value = ServiceCodeEnum[str.toUpperCase()]
  return value === ServiceCodeEnum.SERVICE_CODE_UNKNOWN ? undefined : value
}

export function getApiCodeListByServiceCode(serviceCodeStr) {
  const serviceCode = convertServiceCodeFrom(serviceCodeStr)
  switch (serviceCode) {
    case ServiceCodeEnum.SERVICE_CODE_NODE:
      return [ApiCodeEnum.API_CODE_USER, ApiCodeEnum.API_CODE_IDENTITY, ApiCodeEnum.API_CODE_CERTIFICATE]
    case ServiceCodeEnum.SERVICE_CODE_AGENT:
      return [ApiCodeEnum.API_CODE_USER, ApiCodeEnum.API_CODE_LLM]
    case ServiceCodeEnum.SERVICE_CODE_STORE:
      return [ApiCodeEnum.API_CODE_USER, ApiCodeEnum.API_CODE_ASSET, ApiCodeEnum.API_CODE_STORAGE]
    default:
      return listApiCode()
  }
}

export function listServiceCode() {
  return Object.keys(ServiceCodeEnum).filter(s => ServiceCodeEnum[s] > 0)
}

export function convertServiceCodeTo(serviceCode) {
  if (serviceCode === undefined || serviceCode === ServiceCodeEnum.SERVICE_CODE_UNKNOWN) {
    return undefined
  }

  return Object.keys(ServiceCodeEnum).find(s => ServiceCodeEnum[s] === serviceCode)
}

export function convertApiCodeFrom(str) {
  if (str === undefined) {
    return undefined
  }
  const value = ApiCodeEnum[str]
  return value === ApiCodeEnum.API_CODE_UNKNOWN ? undefined : value
}

export function listApiCode() {
  return Object.keys(ApiCodeEnum).filter(s => ApiCodeEnum[s] > 0)
}

export function convertApiCodeTo(apiCode) {
  if (apiCode === undefined || apiCode === ApiCodeEnum.API_CODE_UNKNOWN) {
    return undefined
  }

  return Object.keys(ApiCodeEnum).find(s => ApiCodeEnum[s] === apiCode)
}

export function convertCipherTypeFrom(str) {
  if (str === undefined) {
    return undefined
  }
  const value = CipherTypeEnum[str.toUpperCase()]
  return value === CipherTypeEnum.CIPHER_TYPE_UNKNOWN ? undefined : value
}

export function convertCipherTypeTo(cipherType) {
  if (cipherType === undefined || cipherType === CipherTypeEnum.CIPHER_TYPE_UNKNOWN) {
    return undefined
  }

  return Object.keys(CipherTypeEnum).find(s => CipherTypeEnum[s] === cipherType)
}