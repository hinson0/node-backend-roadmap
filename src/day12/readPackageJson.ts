import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const filepath = resolve(process.cwd(), 'package.json')
const packageJson = await readFile(filepath, 'utf-8')
const json = JSON.parse(packageJson)
console.log(json.name)
console.log(json)
