import type { Password } from '@/card/types';

export const isValidatePassword = (password: string): password is Password => /^[0-9]{4}$/.test(password);
