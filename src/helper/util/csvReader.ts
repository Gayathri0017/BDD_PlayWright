import fs from 'fs';
import { parse } from 'csv-parse/sync';

export function readCSV(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true
  });
  return records;
}
