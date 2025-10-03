import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { email, walletAddress } = await req.json();

    // Validate input
    if (!email && !walletAddress) {
      return new Response(
        JSON.stringify({ error: 'Either email or wallet address is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (email && walletAddress) {
      return new Response(
        JSON.stringify({ error: 'Provide either email or wallet address, not both' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert registration
    const { data, error } = await supabase
      .from('registrations')
      .insert({
        email: email || null,
        wallet_address: walletAddress || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Registration error:', error);
      
      // Handle duplicate entries
      if (error.code === '23505') {
        return new Response(
          JSON.stringify({ error: 'Already registered' }),
          { status: 409, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      throw error;
    }

    // Get total count using secure function
    const { data: countData, error: countError } = await supabase
      .rpc('get_registrations_count');
    
    if (countError) {
      console.error('Error getting count:', countError);
    }
    
    const count = countData || 0;

    console.log('Registration successful:', { id: data.id, count });

    return new Response(
      JSON.stringify({ 
        success: true, 
        id: data.id,
        totalRegistrations: count || 0
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in register-user function:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
