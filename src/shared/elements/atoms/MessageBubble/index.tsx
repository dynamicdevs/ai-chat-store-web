import { RoleMessage } from '@/enums';
import { type Message } from '@/interfaces';
import { validJson } from '@/utils';

type Props = {
  message: Message;
};

const getMessage = (message: string) => {
  const separators = ['\\[', '\\]'];
  const list = message
    .split(new RegExp(separators.join('|'), 'g'))
    .filter(_ => _)
    .map(_ => {
      if (validJson(_)) {
        const object = JSON.parse(_);
        return `<a href=${object?.key} target="_blank" class="link">${object?.name}</a>`;
      }
      return _;
    });
  const breakWords = list.map(_ => _.replaceAll('\n\n', '<br>'));
  return breakWords.join('');
};

export const MessageBubble = ({ message }: Props) => {
  return (
    <div
      className={`text-body-02 xl:text-body-01 w-[85%] xl:w-[90%] block relative rounded-md after:absolute after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent after:border-b-[10px] after:top-1/2 after:-translate-y-1/2 ${
        message.role === RoleMessage.assistant
          ? 'bg-core-default-inverted p-4 text-core-default-content mr-auto after:-left-3 after:border-b-core-default-inverted after:rotate-[270deg]'
          : 'bg-core-interactive-100 p-[10px] text-core-default-inverted ml-auto after:-right-3 after:border-b-core-interactive-100 after:rotate-90 '
      }`}
      dangerouslySetInnerHTML={{ __html: getMessage(message.content) }}
    ></div>
  );
};
