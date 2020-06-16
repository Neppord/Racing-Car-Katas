import * as fs from "fs";

export class HtmlPageConverter {
  private readonly _filename: string;
  private readonly _breaks: number[];

  constructor(filename: string) {
    this._filename = filename;
    this._breaks = [0];

    let buffer = fs.readFileSync(this._filename);
    let lines = buffer.toString("utf-8").split("\n");
    let tell = 0;
    for (let line in lines) {
      if (line.indexOf("PAGE_BREAK") !== -1) {
        this._breaks.push(tell);
      }
      tell += 1;
    }
    this._breaks.push(tell);
  }

  public getHtmlPage(page: number) {
    const pageStart = this._breaks[page];
    const pageEnd = this._breaks[page + 1];
    let html = "";

    let buffer = fs.readFileSync(this._filename);
    let lines = buffer.toString("utf-8").split("\n");
    let tell = 0;
    for (let line in lines) {
      if (
        tell < pageStart ||
        tell > pageEnd ||
        line.indexOf("PAGE_BREAK") !== -1
      ) {
        continue;
      }
      html += line.trimRight().replace(
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
  }
}
