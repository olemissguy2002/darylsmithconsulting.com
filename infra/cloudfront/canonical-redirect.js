/**
 * CloudFront Function to enforce https and the www canonical host.
 * Attach this as a viewer-request function on the distribution that serves the site.
 */
function handler(event) {
  var request = event.request;
  var headers = request.headers || {};
  var host = headers.host && headers.host.value;
  var proto =
    (headers["x-forwarded-proto"] && headers["x-forwarded-proto"].value) ||
    (headers["cloudfront-forwarded-proto"] && headers["cloudfront-forwarded-proto"].value) ||
    "https";

  var canonicalHost = "www.darylsmithconsulting.com";

  var isCanonicalHost = host === canonicalHost;
  var isHttps = proto === "https";

  if (isCanonicalHost && isHttps) {
    return request;
  }

  var location =
    "https://" +
    canonicalHost +
    request.uri +
    (request.querystring ? "?" + request.querystring : "");

  return {
    statusCode: 301,
    statusDescription: "Moved Permanently",
    headers: {
      location: { value: location },
    },
  };
}
