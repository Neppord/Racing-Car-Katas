export class TelemetryClient {
  private _onlineStatus: boolean;
  private _diagnosticMessageJustSent: boolean;
  public static DIAGNOSTIC_MESSAGE: string = "AT#UD";
  constructor() {
    this._onlineStatus = false;
    this._diagnosticMessageJustSent = false;
  }

  public getOnlineStatus() {
    return this._onlineStatus;
  }

  public connect(telemetryServiceString) {
    if (telemetryServiceString === undefined || telemetryServiceString === "") {
      throw new Error();
    }
    this._onlineStatus = Math.random() > 0.2;
  }

  public disconnect() {
    this._onlineStatus = false;
  }

  public send(message: string) {
    if (message === undefined || message === "") {
      throw new Error();
    }
    if (message == TelemetryClient.DIAGNOSTIC_MESSAGE) {
      this._diagnosticMessageJustSent = true;
    } else {
      this._diagnosticMessageJustSent = false;
    }
  }

  public receive() {
    let message: string;
    if (this._diagnosticMessageJustSent) {
      // Simulate the reception of the diagnostic message
      message =
        "LAST TX rate................ 100 MBPS\n" +
        "HIGHEST TX rate............. 100 MBPS\n" +
        "LAST RX rate................ 100 MBPS\n" +
        "HIGHEST RX rate............. 100 MBPS\n" +
        "BIT RATE.................... 100000000\n" +
        "WORD LEN.................... 16\n" +
        "WORD/FRAME.................. 511\n" +
        "BITS/FRAME.................. 8192\n" +
        "MODULATION TYPE............. PCM/FM\n" +
        "TX Digital Los.............. 0.75\n" +
        "RX Digital Los.............. 0.10\n" +
        "BEP Test.................... -5\n" +
        "Local Rtrn Count............ 00\n" +
        "Remote Rtrn Count........... 00";
      this._diagnosticMessageJustSent = false;
    } else {
      // Simulate the reception of a response message returning a random message.
      message = "";
      let messageLength: number = Math.floor(Math.random() * 50 + 60);
      let i = messageLength;
      while (i >= 0) {
        message += String.fromCharCode(Math.floor(Math.random() * 40 + 86));
        i -= 1;
      }
    }
    return message;
  }
}
