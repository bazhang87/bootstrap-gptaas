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
          title="Basic"
          description="This plan is designed for small and medium-sized businesses looking to integrate GPT into their workflows."
          benefits={['Customer Support Automation', 'Content Creation', 'Lead Generation']}
        >
          1000<span>/month*</span>
        </PricingCard>
        <PricingCard
          title="Pro"
          description="This plan is ideal for larger SMBs or mid-sized companies looking to take their GPT integration to the next level."
          benefits={['Marketing Campaign Optimization', 'Personalized Recommendations', 'Sentiment Analysis', 'Pay-As-You-Go LLM Hosting']}
          isOutlined
        >
          5000<span>/month*</span>
        </PricingCard>
        <PricingCard
          title="Enterprise"
          description="Transform your organization with GPTaaS"
          benefits={[
            'Custom solutions and GPT-powered Workflows',
            'Dedicated Support',
            '3-yr Enterprise Agreement',
            'Pay-As-You-Go LLM Hosting'
          ]}
        >
          10000<span>/month*</span>
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
