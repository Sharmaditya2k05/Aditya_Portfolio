export interface FanSpec {
  id: string;
  name: string;
  speedRPM: number;
  status: "idle" | "running" | "max";
  sizeMM: number;
}

export interface CoolingSpec {
  coolantType: string;
  coolantColor: string;
  pumpSpeedRPM: number;
  tempCelsius: number;
  fans: FanSpec[];
}

export const COOLING_SYSTEM_DATA: CoolingSpec = {
  coolantType: "Distilled Water + Glycol",
  coolantColor: "#3DFF7A",
  pumpSpeedRPM: 2800,
  tempCelsius: 32.5,
  fans: [
    { id: "fan-1", name: "Front Radiator Intake 1", speedRPM: 1200, status: "running", sizeMM: 120 },
    { id: "fan-2", name: "Front Radiator Intake 2", speedRPM: 1200, status: "running", sizeMM: 120 },
    { id: "fan-3", name: "Top Exhaust 1", speedRPM: 1000, status: "running", sizeMM: 140 },
    { id: "fan-4", name: "Rear Exhaust", speedRPM: 1100, status: "running", sizeMM: 120 },
  ],
};
