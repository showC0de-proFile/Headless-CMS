export default async function handler(req, res) {
  const previousPage = req.headers.referer;

  // If you have enabled the preview: turn it off.
  if (req.preview) {
    res.clearPreviewData();
    res.writeHead(307, { Location: previousPage });
    return res.end();
  }

  const password = "SECUREPASSWORD";
  if (req.query.password !== password) {
    return res.status(401).json({ message: "Invalid Password" });
  }

  // If you have turned off the preview: turn it on.
  res.setPreviewData({});
  res.writeHead(307, { Location: previousPage });
  res.end();
}
