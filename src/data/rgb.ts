export interface RgbZone {
  id: string;
  name: string;
  colorHex: string;
  effect: "static" | "breathing" | "rainbow" | "wave";
  brightnessPct: number;
}

export interface RgbLightingConfig {
  globalMode: "sync" | "custom";
  overallBrightnessPct: number;
  zones: RgbZone[];
}

export const RGB_LIGHTING_DATA: RgbLightingConfig = {
  globalMode: "sync",
  overallBrightnessPct: 80,
  zones: [
    { id: "zone-ram", name: "DDR5 RAM Modules", colorHex: "#3DFF7A", effect: "breathing", brightnessPct: 80 },
    { id: "zone-gpu", name: "GPU Waterblock", colorHex: "#3DFF7A", effect: "static", brightnessPct: 90 },
    { id: "zone-reservoir", name: "Reservoir Tube", colorHex: "#3DFF7A", effect: "rainbow", brightnessPct: 100 },
    { id: "zone-mb", name: "Motherboard Underglow", colorHex: "#1a1a1a", effect: "static", brightnessPct: 50 },
  ],
};
