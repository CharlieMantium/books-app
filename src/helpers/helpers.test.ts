import {createUrlResources, filterOutDuplicateBooks} from './helpers';
import { currentTestBooksData, newTestBooksData } from '../tests/testData';

describe("createUrlResources function", () => {
  it("creates URL for resources", () => {
    const title= "testTitle";
    const author= "testAuthor";
    const language= "testLanguage";
    const category= "testCategory";
    const loadedPage= 3;
    const numberOfResults = 10;
    const newUrlResources = createUrlResources(title, author, language, category, loadedPage, numberOfResults)
    expect(newUrlResources).toBe(`volumes?q=${title.length ? `+intitle:${title.replace(/\s+/g, '+')}` : ''}${category.length ? `+subject:${category}` : ''}${author.length ? `+inauthor:${author.replace(/\s+/g, '+')}` : ''}${language.length ? `&langRestrict=${language}` : ''}&startIndex=${loadedPage * 10}&maxResults=${numberOfResults}`);
  })
});

describe("filterOutDuplicateBooks function", () => {
  it("filters out from fetched books those that are already in state", () => {
    const filteredBooks = filterOutDuplicateBooks(currentTestBooksData, newTestBooksData);
    expect(filteredBooks).toEqual([newTestBooksData[0]]);
  })
});
