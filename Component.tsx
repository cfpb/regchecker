import { useState, useEffect } from "react";
import { DiffEditor, loader } from "@monaco-editor/react";
import { Heading, Link, Select } from 'design-system-react'
import { reglist } from './constants.ts'
import { getEcfr, getIregs } from './api.ts'
import 'design-system-react/style.css';

const iregsPrefix = 'https://www.consumerfinance.gov/rules-policy/regulations/'
const ecfrPrefix = 'https://www.ecfr.gov/current/title-12/chapter-X/part-'

loader.config({
  paths: {
    vs: '/vs'
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


  async function selectReg({value}: {value: string}){
    const [ecfrValue, iregsValue] = await Promise.all([
      getEcfr(value), getIregs(value)
    ])
    setReg(value)
    setEcfr(ecfrValue)
    setIregs(iregsValue)
  }

  useEffect(() => {
      selectReg(reglist[0]);
    }, []
  );

  return (
    <>
    <div className="block block__flush-top">
      <Select
        id="singleSelect"
        label="Select a regulation to check"
        onChange={selectReg}
        options={reglist}
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
