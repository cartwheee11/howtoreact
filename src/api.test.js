/**
  @jest-environment jsdom
  @jest-environment-options {"url": "https://localhost:3000/"}
*/

import { test, expect, beforeAll } from "@jest/globals";
import * as api from "./api.js";
import emotions from "./assets/emotions.json";
import "whatwg-fetch";

function rand() {
  const n = Math.floor(Math.random() * emotions.length);
  return emotions[n];
}

test("api frontend module is working correctly", async () => {
  const randomEmotion = rand();
  let response = api.getWiki(randomEmotion);
  expect(response).resolves.toBeInstanceOf(Object);
  response = undefined;
});
