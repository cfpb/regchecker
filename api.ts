const prefix = 'https://raw.githubusercontent.com/cfpb/reg-text/main/'

async function fetchReg(source: 'iregs' | 'ecfr', reg: string): Promise<string> {
  return fetch(`${prefix}${source}/${reg}.txt`)
    .then(v => v.text())
    .catch(v => {
      console.log(v);
      return '';
    })
}


export function getEcfr(reg: string): Promise<string>{
  return fetchReg('ecfr', reg);
}

export function getIregs(reg: string): Promise<string>{
  return fetchReg('iregs', reg);
}
