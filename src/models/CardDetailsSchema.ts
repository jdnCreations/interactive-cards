import {z} from 'zod';

const blankMessage = "Cannot be blank";

export const CardDetailsSchema = z.object({
    cardholderName: z
        .string().trim()
        .min(2, {message: "Name must be 2 or more characters long"}),
    cardNumber: z
        .string().trim()
        .regex(/^(\d{4}\s*){4}$/, {message: "Wrong format, numbers only"}),
    cardExpiryMonth: z
        .string()
        .regex(/^\d{1,2}/, {message: blankMessage}),
    cardExpiryYear: z
        .string()
        .regex(/^\d{1,2}/, {message: blankMessage}),
    cardCVC: z
        .string()
        .min(3, {message: blankMessage})
        .max(3, {message: blankMessage})
        .regex(/^\d{3}/, {message: blankMessage})
});