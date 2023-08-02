export const REPORT_TYPE = {
    "METAR": "Periodic",
    "SPECI": "Special",
} as const;

export type ReportType = keyof typeof REPORT_TYPE;

export function isReportType(str: string): str is ReportType {
    return str in REPORT_TYPE;
};
