import { TelemetryClient } from "./client";

export class TelemetryDiagnostics {
  private _telemetry_client: TelemetryClient;
  public diagnostic_info: string;
  public static DiagnosticChannelConnectionString = "*111#";
  constructor() {
    this._telemetry_client = new TelemetryClient();
    this.diagnostic_info = "";
  }

  public checkTransmission() {
    this.diagnostic_info = "";
    this._telemetry_client.disconnect();
    let retryLeft = 3;
    while (!this._telemetry_client.getOnlineStatus() && retryLeft > 0) {
      this._telemetry_client.connect(
        TelemetryDiagnostics.DiagnosticChannelConnectionString
      );
      retryLeft -= 1;
    }
    if (!this._telemetry_client.getOnlineStatus()) {
      throw new Error("Unable to connect.");
    }
    this._telemetry_client.send(TelemetryClient.DIAGNOSTIC_MESSAGE);
    this.diagnostic_info = this._telemetry_client.receive();
  }
}
