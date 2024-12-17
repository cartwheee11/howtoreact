import wiki from "wikijs";
const wikiRU = "https://ru.wikipedia.org/w/api.php";

export default async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  let name = req.body;

  wiki({ apiUrl: wikiRU })
    .page(name)
    .then((page) => {
      return page.summary();
    })
    .then((info) => {
      res.json(JSON.stringify(info));
    })
    .catch(() => {
      res.json(false);
    });
}
