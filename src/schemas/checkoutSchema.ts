import { z } from 'zod';

export const checkoutSchema = z.object({
    fullName: z
        .string()
        .min(2, 'Full name must be at least 2 characters')
        .max(60, 'Full name is too long'),
    phone: z
        .string()
        .min(9, 'Enter a valid phone number')
        .regex(/^[0-9+\s()-]+$/, 'Phone number contains invalid characters'),
    address: z
        .string()
        .min(5, 'Address must be at least 5 characters')
        .max(200, 'Address is too long'),
    city: z.string().min(2, 'City is required'),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;