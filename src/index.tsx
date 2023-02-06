import { getNetwork } from './config.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './global_style.js';
import { NetworkRouter } from './network_router.js';

async function main() {
  const network = await getNetwork();
  ReactDOM.render(
    <>
      <GlobalStyle />
      <NetworkRouter network={network} />
    </>,
    document.getElementById('root'),
  );
}

main().catch(console.error);
