export async function getWiki(name) {
  const response = fetch("/api/getWiki", {
    method: "post",
    body: name
  });

  const res = await response;

  return await res.json();
}
