import { HtmlPageConverter } from "../../src/2_unicode_file_to_html_text_converter/html_pages";

describe("Html pages", function () {
  it("converts unicode to html", function () {
    let textConverter = new HtmlPageConverter("README.md");
    textConverter.getHtmlPage(0);
  });
});
