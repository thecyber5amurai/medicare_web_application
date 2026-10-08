-- ============================================================
-- MEDICARE DATABASE SCHEMA
-- Initial database schema for the medical application
-- ============================================================

-- ============================================================
-- USER ROLE ENUM
-- ============================================================
-- Defines the roles that users can have in the application.
-- ============================================================

create type public.user_role as enum (
  'patient',
  'specialist',
  'admin'
);

-- ============================================================
-- APPOINTMENT STATUS ENUM
-- ============================================================
-- Defines the possible statuses for an appointment.
-- ============================================================

create type public.appointment_status as enum (
  'pending',
  'confirmed',
  'completed',
  'cancelled'
);

-- ============================================================
-- 1. PROFILES
-- ============================================================
-- Stores additional information about authenticated users.
--
-- Supabase Auth stores the user's authentication information
-- in auth.users. This table stores application-specific data.
--
-- The id must match auth.users.id.
-- ============================================================

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,

  first_name text not null,
  last_name text not null,

  phone text,
  date_of_birth date,
  gender text,


  -- Determines the type of user.
  -- Example: patient or specialist
  role text not null default 'patient',

  avatar_url text,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);


-- ============================================================
-- 2. DEPARTMENTS
-- ============================================================
-- Stores the medical departments/specialties available
-- in the application.
--
-- Examples:
-- Cardiology
-- Neurology
-- Pediatrics
-- Orthopedics
-- ============================================================

create table public.departments (
  id uuid primary key default gen_random_uuid(),

  name text not null unique,
  description text,

  created_at timestamptz default now()
);


-- ============================================================
-- 3. SPECIALISTS
-- ============================================================
-- Stores information specific to medical specialists.
--
-- A specialist is connected to a profile through profile_id.
--
-- The profile contains general user information such as
-- name and phone number, while this table contains
-- professional information.
-- ============================================================

create table public.specialists (
  id uuid primary key default gen_random_uuid(),

  -- Connects the specialist to their user profile.
  profile_id uuid not null
    references public.profiles(id)
    on delete cascade,

  bio text,
  experience_years integer,
  qualification text,
  hospital text,
  image_url text,

  -- Indicates whether the specialist is currently
  -- available for appointments.
  is_available boolean default true,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);


-- ============================================================
-- 4. SPECIALIST_DEPARTMENTS
-- ============================================================
-- Connects specialists with departments.
--
-- This is a junction table because:
--
-- 1 specialist can belong to multiple departments.
-- 1 department can contain multiple specialists.
--
-- Example:
--
-- Dr. John → Cardiology
-- Dr. John → Vascular Medicine
--
-- The combination of specialist_id and department_id
-- must be unique.
-- ============================================================

create table public.specialist_departments (
  specialist_id uuid not null
    references public.specialists(id)
    on delete cascade,

  department_id uuid not null
    references public.departments(id)
    on delete cascade,

  -- Prevents the same specialist from being assigned
  -- to the same department more than once.
  primary key (specialist_id, department_id)
);


-- ============================================================
-- 5. APPOINTMENTS
-- ============================================================
-- Stores appointments between patients and specialists.
--
-- patient_id points to the patient's profile.
-- specialist_id points to the specialist.
--
-- Example:
--
-- Patient A → Dr. John → 2026-10-20 → 10:00
-- ============================================================

create table public.appointments (
  id uuid primary key default gen_random_uuid(),

  -- The patient making the appointment.
  patient_id uuid not null
    references public.profiles(id)
    on delete cascade,

  -- The specialist the patient wants to see.
  specialist_id uuid not null
    references public.specialists(id)
    on delete cascade,

  appointment_date date not null,
  appointment_time time not null,

  -- Optional explanation for why the patient
  -- wants the appointment.
  reason text,

  -- Example statuses:
  -- pending
  -- confirmed
  -- completed
  -- cancelled

  status text not null default 'pending',

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);


-- ============================================================
-- 6. MEDICAL_HISTORY
-- ============================================================
-- Stores a patient's medical history.
--
-- One patient can have multiple medical history records.
--
-- Example:
--
-- Patient A → Asthma
-- Patient A → Hypertension
-- Patient A → Previous surgery
-- ============================================================

create table public.medical_history (
  id uuid primary key default gen_random_uuid(),

  -- The patient this medical history belongs to.
  patient_id uuid not null
    references public.profiles(id)
    on delete cascade,

  condition text not null,
  description text,
  diagnosed_date date,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);


-- ============================================================
-- 7. ENABLE ROW LEVEL SECURITY
-- ============================================================
-- RLS controls which rows users are allowed to access.
--
-- Enabling RLS does NOT automatically create permissions.
-- We will create specific policies separately.
-- ============================================================

alter table public.profiles enable row level security;

alter table public.departments enable row level security;

alter table public.specialists enable row level security;

alter table public.specialist_departments enable row level security;

alter table public.appointments enable row level security;

alter table public.medical_history enable row level security;