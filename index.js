/* The fake express module that can be used to as a template to create mocks with Jest, Sinon and other JS mocking frameworks
   This module simply provides appropriate method signatures needed for each available API within express
*/

/* FakeExpress Mock method
  @return object
*/
function fakeExpress() {
  return { Request: dummyReq, Response: dummyRes, next: dummyFn };
}

fakeExpress.json = function(options = {}) {};
fakeExpress.static = function(root, options = {}) {};
fakeExpress.Router = function() {
  return dummyRouter;
};
fakeExpress.urlencoded = function(options = {}) {};

let dummyReq = {
  // properties
  app: {},
  baseUrl: '',
  body: undefined,
  cookies: {},
  fresh: true,
  hostname: '',
  ip: '',
  ips: [],
  method: '',
  originalUrl: '',
  params: {},
  path: '',
  protocol: '',
  query: {},
  route: '',
  secure: true,
  signedCookies: {},
  stale: false,
  subdomains: {},
  xhr: {},

  // functions
  accepts: function(types = '') {},
  acceptsCharsets: function(...charset) {},
  acceptsEncodings: function(...encodings) {},
  acceptsLanguages: function(...lang) {},
  get: function(types = '') {},
  is: function(types = '') {},
  param: function(...names) {},
  range: function(size, options = {}) {}
};

let dummyRes = {
  // properties
  app: {},
  headersSent: false,
  locals: {},

  // functions
  append: function(field, ...value) {},
  attachment: function(...attachment) {},
  cookie: function(name, value, options = {}) {},
  clearCookie: function(name, options = {}) {},
  download: function(path, filename, options = {}, dummyFn) {},
  end: function(...options) {},
  format: function({}) {},
  get: function(field = '') {},
  json: function(body = {}) {},
  jsonp: function(body = {}) {},
  links: function(data = {}) {},
  location: function(str = '') {},
  redirect: function(url = '') {},
  render: function(url, options = {}, dummyFn) {},
  send: function(body) {},
  sendFile: function(file = '', options = {}, dummyFn) {},
  sendStatus: function(status = 200) {},
  set: function(...values) {},
  status: function(code = 200) {},
  type: function(value = '') {},
  vary: function(field = '') {}
};

let dummyRouter = {
  all: function(path = '', dummyFn) {},
  get: function(path = '', dummyFn) {},
  put: function(path = '', dummyFn) {},
  post: function(path = '', dummyFn) {},
  param: function(param = '', dummyFn) {},
  route: function(path = '') {},
  use: function(path = '', dummyFn) {}
};

let dummyFn = function(...options) {};

// Exports
module.exports = fakeExpress();
