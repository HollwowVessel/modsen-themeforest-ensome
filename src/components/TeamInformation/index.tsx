import { OpenInput } from 'tired-hollow-lib-modsen';

import { FormComponent } from '../FormComponent';
import { Heading, Interaction, Wrapper } from './styled';
import { TeamInformationProps } from './types';

export const TeamInformation = ({ heading }: TeamInformationProps) => (
  <Wrapper>
    <Interaction>
      <Heading>{heading}</Heading>
      <FormComponent
        divideFirstRow
        inputComponent={OpenInput}
        messageForm={OpenInput}
        showLabels
      />
    </Interaction>
  </Wrapper>
);
