import { UnicodeFileToHtmlTextConverter } from "../../src/2_unicode_file_to_html_text_converter/text_converter";

describe("Text converter", function () {
  it("converts unicode to html", function () {
    let textConverter = new UnicodeFileToHtmlTextConverter("README.md");
    textConverter.convertToHtml();
  });
});
