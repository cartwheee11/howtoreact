const wiki = require("wikijs").default;
const wikiRU = "https://ru.wikipedia.org/w/api.php";
const json = require("./emotions.json");

const { expect, test, beforeAll } = require("@jest/globals");

// describe("", () => {
let pages = json.slice();

beforeAll(async () => {
  async function getPages() {
    const pagesArrayPromises = [];
    return new Promise((res) => {
      async function rec(id) {
        if (id === json.length) {
          res(pagesArrayPromises);
          return;
        }

        let pagePromise;
        try {
          pagePromise = await wiki({ apiUrl: wikiRU }).page(json[id]);
        } catch {
          // console.log(json[id] + " упали");
        }

        pagesArrayPromises.push(pagePromise);

        setTimeout(() => {
          rec(id + 1);
        }, 250);
      }

      rec(0);
    });
  }

  pages = await getPages();
}, 30000000);

for (let i = 0; i < pages.length; i++) {
  test("is " + json[i] + " resolves", async () => {
    await expect(pages[i]).toBeInstanceOf(Object);
  });
}
// });
