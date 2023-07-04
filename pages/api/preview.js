export default async function handler(req, res) {
  const previousPage = req.headers.referer;

  // IF YOU HAVE VISUALIZATION ON: TURN OFF
  if (req.preview) {
    res.clearPreviewData();
    res.writeHead(307, { Location: previousPage });
    return res.end();
  }

  const password = "PASSWORD";
  if (req.query.password !== password) {
    return res.status(401).json({ message: "Invalid Password" });
  }

  // IF YOU HAVE TURNED OFF PREVIEW: TURN ON
  res.setPreviewData({});
  res.writeHead(307, { Location: previousPage });
  res.end();
}
