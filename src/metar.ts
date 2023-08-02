import ICAO from "icao";
import { Hour, Minute } from "time";

type Char = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
type Number = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type MonthDay = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31';

export type ReportType = "METAR" | "SPECI";
export type StationIdentifier = ICAO;
export type ReportDateTime = `${MonthDay}${Hour}${Minute}Z`

export type Modifier = "AUTO" |  "AO1" | "AO2" | "COR";
export type Wind = string | `${string}G${string}`;
export type Visibility = `${string}SM`;

Weather
SkyCondition
TemperatureAndDewPoint
AltimeterSetting
Remarks