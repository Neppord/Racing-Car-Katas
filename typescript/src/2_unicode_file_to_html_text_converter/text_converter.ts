import * as fs from "fs";

export class UnicodeFileToHtmlTextConverter {
  private readonly _fullNameWithPath: string;

  constructor(fullNameWithPath: string) {
    this._fullNameWithPath = fullNameWithPath;
  }

  public convertToHtml() {
    let buffer = fs.readFileSync(this._fullNameWithPath);
    let lines = buffer.toString("utf-8").split("\n");
    let html = "";
    for (let line of lines) {
      line = line.trimRight();
      html += line.replace(
        /[&<>]/g,
        (k) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
          }[k])
      );
      html += "<br />";
    }
    return html;
  }
}
