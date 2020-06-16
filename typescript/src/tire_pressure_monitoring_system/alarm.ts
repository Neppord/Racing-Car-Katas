import { Sensor } from "./sensor";

export class Alarm {
  private readonly _lowPressureThreshold: number;
  private readonly _highPressureThreshold: number;
  private _sensor: Sensor;
  private _alarmOn: boolean;

  constructor() {
    this._lowPressureThreshold = 17;
    this._highPressureThreshold = 21;
    this._sensor = new Sensor();
    this._alarmOn = false;
  }

  public check() {
    var psiPressureValue = this._sensor.popNextPressurePsiValue();

    if (
      psiPressureValue < this._lowPressureThreshold ||
      this._highPressureThreshold < psiPressureValue
    ) {
      this._alarmOn = true;
    }
  }

  public alarmOn() {
    return this._alarmOn;
  }
}
