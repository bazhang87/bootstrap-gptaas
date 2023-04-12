import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Autonomous Code Generation and Deployment Feedback Loops.',
    description:
      'Autonomous Code Generation and Deployment Feedback Loops are an innovative approach to software development that aims to streamline the entire development process. With this approach, developers can automate the creation and deployment of code, while receiving feedback on the quality and effectiveness of the code at every stage of the development cycle.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'GPTaaS-Powered Customer Success and Support',
    description:
      'GPTaaS-augmented Customer Success and Support capabilities are a game-changer for businesses looking to provide exceptional customer service and build long-lasting relationships with their customers. By leveraging the power of GPT, businesses can improve efficiency, reduce costs, and enhance the overall customer experience.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'LLM-Chain Powered Lead Generation',
    description:
      'Automate lead generation and qualification with GPTaaS, helping software sellers identify and prioritize leads, increasing sales productivity and conversion rates.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Brand Awareness with GPTaaS',
    description:
      'With GPTaaS, SaaS businesses can automate content creation, such as blog posts and social media updates, improving content consistency and frequency, increasing customer engagement and brand awareness.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
