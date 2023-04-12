import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexible pricing for agile teams</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="PoC/MVP"
          description="Connect with us to discuss GPTaaS Pilot Projects and MVPs"
          benefits={['1 workflow/agent', '1 active project', 'Demo only', '30-day window']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Starter"
          description=""
          benefits={['5 workflows/agents', '3 active projects', 'Unlimited Usage', '1-yr subscription', 'Pay-As-You-Go LLM Hosting']}
          isOutlined
        >
          $299<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Enterprise"
          description="Transform your organization with GPTaaS"
          benefits={[
            'Unlimited workflows/agents',
            'Unlimited active projects',
            'Unlimited usage',
            '3-yr Enterprise Agreement',
            'Pay-As-You-Go LLM Hosting'
          ]}
        >
          Contact Us<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
