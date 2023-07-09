import { isEmptyObj, isObject } from "@/common/function"
import qs from "qs"

export default class Parser {
  uri: string
  query: any
  constructor(query: any) {
    this.query = query
    this.uri = ""
  }

  // parse the final query string
  parse() {
    this.includes()
    this.appends()
    this.fields()
    this.filters()
    this.sorts()
    this.page()
    this.limit()
    this.per_page()
    this.params()

    return this.uri
  }

  prepend() {
    return this.uri === "" ? "?" : "&"
  }

  /**
   * Parsers
   */
  includes() {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!(this.query.include.length > 0)) {
      return
    }

    this.uri += `${this.prepend() + this.query.queryParameters.includes}=${this.query.include}`
  }

  appends() {
    if (!(this.query.append.length > 0)) {
      return
    }

    this.uri += `${this.prepend() + this.query.queryParameters.appends}=${this.query.append}`
  }

  fields() {
    if (!(Object.keys(this.query.fields).length > 0)) {
      return
    }

    const fields = {
      [`${this.query.queryParameters.fields}[${this.query.model}]`]: this.query.fields
    }
    this.uri += this.prepend() + qs.stringify(fields, { encode: false })
  }

  filters() {
    if (!(Object.keys(this.query.filters).length > 0)) {
      return
    }

    const filters = {
      [this.query.queryParameters.filters]: this.query.filters
    }
    this.uri += this.prepend() + qs.stringify(filters, { encode: false })
  }

  sorts() {
    if (!(this.query.sorts.length > 0)) {
      return
    }

    this.uri += `${this.prepend() + this.query.queryParameters.sort}=${this.query.sorts}`
  }

  page() {
    if (this.query.pageValue === null) {
      return
    }

    this.uri += `${this.prepend() + this.query.queryParameters.page}=${this.query.pageValue}`
  }

  limit() {
    if (this.query.limitValue === null) {
      return
    }

    this.uri += `${this.prepend() + this.query.queryParameters.limit}=${this.query.limitValue}`
  }

  per_page() {
    if (this.query.perPageValue === null) {
      return
    }

    this.uri += `${this.prepend() + this.query.queryParameters.per_page}=${this.query.perPageValue}`
  }

  params() {
    if (this.query.paramsObj === null || (isObject(this.query.paramsObj) && isEmptyObj(this.query.paramsObj))) {
      return
    }

    this.uri += this.prepend() + qs.stringify(this.query.paramsObj, { encode: false })
  }
}
