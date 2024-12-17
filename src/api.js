export async function getWiki(name, baseUrl = "/") {
  const response = fetch(baseUrl + "api/getWiki", {
    method: "post",
    body: name,
  });

  const res = await response;

  return await res.json();
}

//"Печаль" не проходит
