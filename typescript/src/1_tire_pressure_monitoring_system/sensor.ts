export class Sensor {
  public static Offset() {
    return 16;
  }
  public static SamplePressure() {
    // placeholder implementation that simulate a real sensor in a real tire
    return Math.floor(6 * Math.random() * Math.random());
  }
  public popNextPressurePsiValue() {
    const pressureTelemetryValue = Sensor.SamplePressure();
    return Sensor.Offset() + pressureTelemetryValue;
  }
}
