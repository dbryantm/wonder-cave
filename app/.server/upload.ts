import { redirect, type TypedResponse } from '@remix-run/node'
import { parseString } from 'fast-csv'
import { type Contact } from '../schemas'

export function upload(text: string, cb: (rows: Contact[]) => Promise<TypedResponse<never> | undefined>) {
  const rows: Contact[] = []

  parseString(text, { headers: true })
    .on('error', (error) => console.error(error))
    .on('data', (row) => rows.push(row))
    .on('end', () => cb(rows))

  return redirect('/')
}
