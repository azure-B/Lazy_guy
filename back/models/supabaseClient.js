import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

/** Server-side Supabase client. Import only from models/. */
export const supabase =
  url && key ? createClient(url, key) : null;
