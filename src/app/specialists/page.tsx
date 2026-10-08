import { createClient } from "../lib/supabase/server";
import SpecialistFilter from "../specialists/components/SpecialistsFilter";

export default async function SpecialistsPage() {
    const supabase = await createClient();

    const { data: specialists, error } = await supabase.from("specialists").select(`
      id,
      consultation_fee,
      experience_years,
      qualification,
      hospital,
      image_url,
      is_available,
      profile:profiles (
        first_name,
        last_name
      ),
      specialist_departments (
        department:departments (
          id,
          name
        )
      )
    `);

}