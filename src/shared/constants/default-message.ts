import { RoleMessage } from '@/enums';
import { type Message } from '@/interfaces';

export const DEFAULT_MESSAGE: Message = {
  role: RoleMessage.assistant,
  content:
    '¡Hola! Bienvenido/a a nuestro Chat IA. Estamos aquí para ayudarte y brindarte la información que necesites. Si tienes alguna pregunta o consulta, no dudes en hacérnosla. ¡Estamos listos para asistirte y asegurarnos de que tengas la mejor experiencia posible!',
};
