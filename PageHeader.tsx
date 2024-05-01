import { Heading, Link, Banner } from 'design-system-react'
import CFPBLogo from './node_modules/design-system-react/src/assets/images/cfpb-logo.png';

export function CfpbLogo(): JSX.Element {
  return (
    <Link
      href='https://www.consumerfinance.gov/'
      title='Home'
      aria-label='Home'
      className='o-header_logo'
    >
      <img className='o-header_logo-img' src={CFPBLogo} alt='CFPB Logo' />
    </Link>
  );
}
function Navbar(): JSX.Element {
  return (
    <div className='o-header_content'>
      <div className='navbar wrapper wrapper__match-content'>
        <CfpbLogo />
        <div className='nav-items'>
          <Heading>RegChecker</Heading>
        </div>
      </div>
    </div>
  );
}

export function PageHeader(): JSX.Element {
  return (
    <div className='o-header'>
      <Banner tagline='An official website of the United States government' />
      <Navbar/>
    </div>
  );
}
