import { useState, useEffect, useCallback } from "react";
import { DiffEditor, loader } from "@monaco-editor/react";
import { Heading, Link, Select } from 'design-system-react'
import { useHash } from './useHash.tsx'
import { reglist, regset } from './constants.ts'
import { getEcfr, getIregs } from './api.ts'
import 'design-system-react/style.css';

const iregsPrefix = 'https://www.consumerfinance.gov/rules-policy/regulations/'
const ecfrPrefix = 'https://www.ecfr.gov/current/title-12/chapter-X/part-'
const defaultReg = '1002'

loader.config({
  paths: {
    vs: './vs'
  }
});

loader.init().then(monaco => {
  monaco.editor.defineTheme('no-back', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'diffEditor.removedTextBackground': '#ffb2ad',
        'diffEditor.insertedTextBackground': '#c9e296',
        'diffEditor.removedLineBackground': '#fff',
        'diffEditor.insertedLineBackground': '#fff'
      }
  });
})

export function Component(){

  const [reg, setReg] = useState('')
  const [ecfr, setEcfr] = useState('')
  const [iregs, setIregs] = useState('')

  const [hash, setHash] = useHash();

  const selectReg = useCallback(async function(reg: string){
    const [ecfrValue, iregsValue] = await Promise.all([
      getEcfr(reg), getIregs(reg)
    ])
    setReg(reg)
    setEcfr(ecfrValue)
    setIregs(iregsValue)
  }, [])

  useEffect(() => {
    const reg = regset.has(hash) ? hash : defaultReg
    selectReg(reg);
    }, [hash]
  );

  return (
    <>
    <div className="block block__flush-top">
      <Select
        id="singleSelect"
        label="Select a regulation to check"
        onChange={setHash}
        options={reglist}
        value={hash || defaultReg }
      />
      </div>
      {ecfr && iregs
        ?
        <>
          <div style={{display:'grid', gridTemplateColumns: '50% 50%'}}>
            <Link target="_blank" href={`${iregsPrefix}${reg}/`}>
              <Heading type="5">Part {reg}: iRegs</Heading>
            </Link>
            <Link target="_blank" href={ecfrPrefix + reg}>
              <Heading type="5">Part {reg}: eCFR</Heading>
            </Link>
          </div>
          <div style={{marginLeft: '-30px'}}>
            <DiffEditor
              original={iregs}
              modified={ecfr}
              height="90vh"
              theme="no-back"
              options={{
                domReadOnly: true,
                readOnly: true,
                diffWordWrap: "on",
                scrollBeyondLastLine: false,
                selectionHighlight: false,
                occurrencesHighlight: "off",
                hideUnchangedRegions: {
                  enabled: true
                }
              }}
            />
          </div>
        </>
        : null
      }
    </>
  );
}
