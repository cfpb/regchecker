import { Glob } from "bun";
import { mkdir, readdir } from "node:fs/promises";

async function copy(dir: string){
  const files = await readdir(dir, {recursive: true, withFileTypes: true});

  for (const file of files) {
    const out = `built/${file.name}`
    if (file.isDirectory()){
      try {
        await mkdir(out);
      }catch (e){}
    }else{
      const bf = Bun.file(`${dir}/${file.name}`)
      Bun.write(out, bf);
    }
  }
}

copy('public')
copy('node_modules/monaco-editor/min')

const glob = new Glob("built/style*.css")
const css = glob.scanSync('.').next().value
Bun.spawnSync(["sed", "-i.bak", "s/\\/static\\/font/.\\/static\\/font/g", css])
Bun.spawnSync(["mv", css, "built/style.css"])
