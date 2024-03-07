import { mkdir, readdir } from "node:fs/promises";
const files = await readdir('./public', {recursive: true, withFileTypes: true});

for (const file of files) {
  const out = `built/${file.name}`
  if (file.isDirectory()){
    await mkdir(out);
  }else{
    const bf = Bun.file(`public/${file.name}`)
    Bun.write(out, bf);
  }
}

await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './built',
})
