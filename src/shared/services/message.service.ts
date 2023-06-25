import apiBase from '@/constants/fetcher';
import { type Message } from '@/interfaces';

export const useMessageService = () => {
  const useSendMessage = async (messages: Message[]) => {
    return await apiBase.post<Message[]>('messages', messages);
  };

  const useSendMessageForProduct = async (messages: Message[], sku: string) => {
    return await apiBase.post<Message[]>(`messages/product/${sku}`, messages);
  };

  return {
    useSendMessage,
    useSendMessageForProduct,
  };
};
