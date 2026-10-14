--- consultation fee was added to the specialists table in the database.
alter table public.specialists
add column consultation_fee numeric(10, 2);