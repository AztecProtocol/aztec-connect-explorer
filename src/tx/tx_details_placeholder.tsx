import React from 'react';
import { BlockSummary, InfoRow, InfoValuePlaceholder, HashValuePlaceholder } from '../block_summary/index.js';
import { ProofDataPlaceholder } from '../proof_data/index.js';
import { DetailsSection } from '../template/index.js';

export const TxDetailsPlaceholder: React.FunctionComponent = () => {
  const summaryPlaceholder = (
    <BlockSummary title="Transaction">
      <InfoRow title="TIMESTAMP">
        <InfoValuePlaceholder style={{ width: '50%' }} />
      </InfoRow>
      <InfoRow title="TRANSACTION NUMBER">
        <InfoValuePlaceholder style={{ width: '40px' }} />
      </InfoRow>
      <InfoRow title="NULLIFIERS">
        <HashValuePlaceholder />
        <HashValuePlaceholder />
      </InfoRow>
      <InfoRow title="DATA ENTRIES">
        <HashValuePlaceholder />
        <HashValuePlaceholder />
      </InfoRow>
    </BlockSummary>
  );

  return <DetailsSection lhsContent={summaryPlaceholder} rhsContent={<ProofDataPlaceholder />} />;
};
