import { Alarm } from "../../src/tire_pressure_monitoring_system/alarm";

describe("Tyre Pressure Monitoring System", function () {
  describe("Alarm", function () {
    it("foo", function () {
      let alarm = new Alarm();
      expect(alarm.alarmOn()).toBe(false);
    });
  });
});
