'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import * as z from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = z.object({
    email: z.string().email("Provide a valid email").min(6).max(100),
    phone: z.string().min(1),
    type: z.string(),
    role: z.string(),
    team: z.string(),
    position: z.string().min(1)
});

export async function invite(values: z.infer < typeof formSchema > ) {
    const supabase = await createClient();
    const loggedInUser = await supabase.auth.getUser()
    const { error, data } = await supabase.auth.signUp({
        email:values.email,
        password: "password",
        options: {
            emailRedirectTo: 'http://localhost:3000/onboarding',
        },
    });

    function generateRandomEmployeeID(): string {
        const num = Math.floor(10000 + Math.random() * 90000);
        return `EMP${num}`;
    }

    if(error) throw error;
    await supabase.rpc("create_user_profile", {
        p_email: values.email,
        p_inviter_id: loggedInUser?.data?.user?.id,
        p_phone_number: values.phone,
        p_position: values.position,
        p_role: values.role,
        p_team_id: values.team,
        p_type: values.type,
        p_user_id: data?.user?.id,
        p_emp_no: generateRandomEmployeeID()
    });
    revalidatePath('/team/all-users', 'layout')
    redirect('/team/all-users')
}