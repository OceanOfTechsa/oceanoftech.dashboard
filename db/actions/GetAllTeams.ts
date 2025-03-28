'use server'

import { createClient } from '@/utils/supabase/server'

export async function GetAllTeams() {
    const supabase = await createClient();
    const {error, data: teams} = await supabase.from("teams")
        .select("*")
        .eq('is_active', 1)
        .order('created_at', { ascending: false })
    if(error)
    {
        console.log(error)
    }
    return teams;
}