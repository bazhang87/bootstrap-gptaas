import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="What is GPTaaS?">
        GPTaaS is a service that helps SaaS businesses integrate GPT technology into their workflows to enhance their customer experiences and business operations.
      </Accordion>
      <Accordion title="How much does GPTaaS cost?">
        The cost of GPTaaS depends on the plan that you choose. Our Basic Plan starts at $1,000 per month, the Pro Plan starts at $5,000 per month, and the Enterprise Plan starts at $10,000 per month.
      </Accordion>
      <Accordion title="What does each plan include?">
        The Basic Plan includes access to basic GPT integration services such as customer support automation, content creation, and lead generation. The Pro Plan includes more advanced services such as marketing campaign optimization, personalized recommendations, and sentiment analysis. The Enterprise Plan includes access to all GPT integration services, including custom solutions and dedicated support.
      </Accordion>
      <Accordion title="Are there any setup fees?">
        Yes, there is a one-time setup fee for each plan to cover the cost of onboarding and customizing the integration for each customer. This varies depending on the volume and complexity of workflows, integrations and use cases being addressed.
      </Accordion>
      <Accordion title="Can I add custom solutions or additional services to my plan?">
        Yes, additional services can be added to any plan for an additional fee. Custom solutions are also available for an additional fee.
      </Accordion>
      <Accordion title="Can I change my plan?">
        Yes, you can change your plan at any time to a plan that better suits your needs. You will charged on a pro-rated basis to cover the difference between your current and former plan for the remainder of your contract.      
      </Accordion>
      <Accordion title="What timelines do you provide within your contracts?">
        GPTaaS contracts can be signed on a monthly, annual, or multi-year basis. Discounts may be available for annual or multi-year contracts.
      </Accordion>
      <Accordion title="Do you offer a free trial?">
        Yes, we offer a 14-day free trial for all plans. During the trial period, you can test our GPT integration services and decide whether they are right for your business.
      </Accordion>
      <Accordion title="How do I get started??">
        You can contact us to schedule a demo and discuss your business needs. We will then recommend a plan that best suits your needs and provide you with a quote.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
