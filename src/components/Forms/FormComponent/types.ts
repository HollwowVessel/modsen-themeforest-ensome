import {
  CloseInput,
  InputWithButton,
  OpenInput,
} from 'tired-hollow-lib-modsen';

import { Message } from '@/components/ContactsDescription/styled';

export interface FormComponentProps {
  inputComponent: typeof OpenInput | typeof CloseInput | typeof InputWithButton;
  messageForm: typeof Message | typeof CloseInput | typeof OpenInput;
  divideFirstRow: boolean;
  showLabels: boolean;
}
